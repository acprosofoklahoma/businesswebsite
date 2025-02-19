<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = isset($_POST["name"]) ? htmlspecialchars($_POST["name"]) : "";
    $phone = isset($_POST["phone"]) ? htmlspecialchars($_POST["phone"]) : "";
    $email = isset($_POST["email"]) ? htmlspecialchars($_POST["email"]) : "";
    $message = isset($_POST["message"]) ? htmlspecialchars($_POST["message"]) : "";

    if (empty($name) || empty($phone) || empty($email) || empty($message)) {
        echo "error";
        exit;
    }

    $to = "hunterjohnson@acprosofoklahoma.onmicrosoft.com"; // Your work email
    $subject = "New Contact Form Submission from AC Pros";
    $headers = "From: no-reply@acprosofoklahoma.com\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    $email_content = "
        <html>
        <head>
            <title>New Contact Form Submission</title>
        </head>
        <body>
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> $name</p>
            <p><strong>Phone:</strong> $phone</p>
            <p><strong>Email:</strong> $email</p>
            <p><strong>Message:</strong><br> $message</p>
        </body>
        </html>
    ";

    if (mail($to, $subject, $email_content, $headers)) {
        echo "success";
    } else {
        echo "error";
    }
} else {
    echo "Invalid request.";
}
?>
