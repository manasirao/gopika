/**
 * Created by mansigrao on 2016-06-10.
 */

module.exports = function($scope, $log) {
    $log.debug('Ravi inside contact controller');
    $scope.cinfo = {};

    $scope.submitMessage = function() {
        $log.debug('Form Submitted' + JSON.stringify($scope.cinfo));
    }
};
