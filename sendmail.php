<?php

$receiver = $_POST['receiver'];          //PROVIDE YOUR EMAIL ADDRESS IN HTML CONTACT FORM SECTION CHANGE value="admin@mail.com"
$subject = $_POST['subject'];            //PROVIDE THE SUBJECT OF THE EMAIL IN HTML CONTACT FORM SECTION CHANGE value="contactform"



$name = $_POST['name'];
$email = $_POST['email'];
$mail_message = $_POST['message'];


$message = "<br/>Name: " . $name .
	"<br/>Email: " . $email ;

$message .= "<br/>Message: " . $mail_message .
	"<br/><br/><br/>Date: " . date("Y-m-d h:i:s");

$siteEmail = $receiver;
$emailTitle = $subject;
$thankYouMessage = "Merci, votre message à bien été envoyé.";  
$err_msg =  'Erreur ! Svp, essayez à nouveau';


$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
$headers .='From: ' . $name . ' <' . $email . '>';

/* if($_POST['website_url'] == '')
{ */
	if(mail($receiver, $emailTitle, $message, $headers))
		{ echo 'success'; }
	else { echo 'error'; }
/* }
else
{
	echo 'error';
} */


?>
