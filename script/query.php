<?php
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo "INVALID";
    exit;
}

$name    = strip_tags(trim($_POST['name'] ?? ''));
$email   = filter_var($_POST['email'] ?? '', FILTER_VALIDATE_EMAIL);
$message = strip_tags(trim($_POST['message'] ?? ''));

if (!$name || !$email || !$message) {
    echo "INVALID";
    exit;
}

$to      = "vipul0809@gmail.in";
$subject = "Enquiry Mail from vipulism.github.io";

$body  = "Name: $name\n";
$body .= "Email: $email\n";
$body .= "Message: $message\n";

$headers  = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";

if (mail($to, $subject, $body, $headers)) {
    echo "OK";
} else {
    echo "FAIL";
}
