<?php
    // The global $_POST variable allows you to access the data sent with the POST method
    // To access the data sent with the GET method, you can use $_GET
    $name = htmlspecialchars($_POST['name']);
    $email  = htmlspecialchars($_POST['email']);
    $sub = htmlspecialchars($_POST['sub']);
    $msg = htmlspecialchars($_POST['msg']);
    $headers = 'From:' . $email   .  "\r\n";
    $success = False;

     if(!$name || !$email || !$sub || !$msg) {
        $error = "Missing Required Fields";
     }

    $success = True;
    //echo  $name, ' ', $email, ' ', $sub, ' ', $msg;

    $msg = $msg . "\r\n" . "\r\n" . "****   This message is sent from admin@gopikaindia.com ****";
    $msg = wordwrap($msg, 70, "\r\n");

    $admin_email = "kenzkiran@gmail.com";

    if ($success) {
        if (!mail($admin_email, $sub, $msg, $headers)) {
            $success = False;
            $error = "Sending Mail Failed";
        }
    }

    $result = array('result' => $success, 'error' => $error);
    $jsonData = json_encode($result);
    echo $jsonData;
?>