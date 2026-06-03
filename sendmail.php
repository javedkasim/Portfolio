<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $course = $_POST['course'];
    $message = $_POST['message'];

    $to = "info@admitrixsolutions.in";

    $subject = "New Admission Enquiry";

    $body = "
    Name: $name

    Phone: $phone

    Email: $email

    Course: $course

    Message:
    $message
    ";

    $headers = "From: info@admitrixsolutions.in";

    if(mail($to, $subject, $body, $headers)) {

        echo "
        <script>
        alert('Form Submitted Successfully');
        window.location.href='index.html';
        </script>
        ";

    } else {

        echo "
        Mail Failed.
        ";

    }

}

?>