<?php
    // The global $_POST variable allows you to access the data sent with the POST method
    // To access the data sent with the GET method, you can use $_GET
    $postdata = file_get_contents("php://input");
    $data = json_decode($postdata, true);
    $name = $data["name"];
    $email  = $data["email"];
    $phone = $data["phone"];
    $msg = $data["msg"];
    $headers = 'From:' . $email   .  "\r\n";
    $success = False;

    $admin_email = "marketing@gopikaindia.com";
    $incoming = "Received" . $name . '  ' . $email .  ' ' . $phone . ' ' . $msg;
     if (!$name || !$email || !$phone || !$msg) {
        $error = "Missing Required Fields";
        $success = False;
     } else {
        $sub = "Web Enquiry from:  " . $name;
        $finalMsg = $finalMsg . "Name: " . $name . "\r\n";
        $finalMsg = $finalMsg . "Email: " . $email . "\r\n";
        $finalMsg = $finalMsg . "Contact Number: " . $phone . "\r\n";
        $finalMsg = $finalMsg . "Message: " . "\r\n";
        $finalMsg = $finalMsg . " => " . $msg;
        $finalMsg = $finalMsg . "\r\n" . "\r\n" . "****   This message is sent from admin@gopikaindia.com ****";
        $finalMsg = wordwrap($finalMsg, 70, "\r\n");
        if (!mail($admin_email, $sub, $finalMsg, $headers)) {
            $success = False;
            $error = "Sending Mail Failed";
        } else {
            $success = True;
        }
     }

    $result = array('result' => $success, 'error' => $error, 'input' => $incoming);
    $jsonData = json_encode($result);
    echo $jsonData;
?>