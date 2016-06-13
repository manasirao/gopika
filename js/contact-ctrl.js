/**
 * Created by mansigrao on 2016-06-10.
 */

module.exports = function($scope, $log, $http) {
    $scope.cinfo = {};
    var MessageUrl = 'message.php';
    $scope.States = {
        init: 1,
        failure: 2,
        success: 3
    };

    $scope.StatusMessage = {
        sending: "Sending...",
        thankyou : "Thanking you for your message, we will contact you soon!",
        error: "Sorry, something went Wrong :(  Refresh & Retry in a few minutes."
    };

    $scope.status = $scope.States.init;
    $scope.statusMessage = $scope.StatusMessage.sending;

    $scope.submitMessage = function() {
        $scope.status = $scope.States.success;
        $log.debug('Form Submitted' + JSON.stringify($scope.cinfo));
        $http.post(MessageUrl, $scope.cinfo).then(function(res) {

            $log.debug('Success:' + JSON.stringify(res));
            var data = res.data;
            $log.debug('Sending mail success: ' + data.result);
            if (data.result) { // data.result === true
                $scope.status = $scope.States.success;
                $scope.statusMessage = $scope.StatusMessage.thankyou;
            } else {
                $scope.status = $scope.States.failure;
                $scope.statusMessage = $scope.StatusMessage.error;
            }
        }, function(error) {
            $scope.status = $scope.States.failure;
            $scope.statusMessage = $scope.StatusMessage.error;
        })
    }
};
