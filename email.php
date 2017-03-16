<?php
# Include the Autoloader (see "Libraries" for install instructions)
require 'vendor/autoload.php';
use Mailgun\Mailgun;


$date = $_POST['date'];
$time = $_POST['time'];
$service = $_POST['service'];
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];


# Instantiate the client.
$mgClient = new Mailgun('');
$domain = "";

var_dump($_POST);
# Make the call to the client.
$result = $mgClient->sendMessage($domain, array(
    'from'    => $name . ' <' . $email . '>',
    'to'      => 'Baz <>',
    'subject' => 'Contato BSLan Website',
    'text'    => $message
));


?>

