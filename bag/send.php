<?php
require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';
$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.yandex.ru';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'kirillpovasin@gmail.com'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'Pk7802662302'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров
$mail->setFrom('admin@gmail.com'); // от кого будет уходить письмо?
$mail->addAddress('kirillpovasin@gmail.com');     // Кому будет уходить письмо quick-count@yandex.ru
$mail->isHTML(true);                           
$name = $_POST['name'];
$tel = $_POST['tel'];
$input__checkboxMap = $_POST['input__checkboxMap'];
$summPriceOrder = $_POST['summPriceOrder'];
$adress = $_POST['adress'];
$name = htmlspecialchars($name);
$adress = htmlspecialchars($adress);
$tel = htmlspecialchars($tel);
$name = urldecode($name);
$adress = urldecode($adress);
$tel = urldecode($tel);
$name = trim($name);
$adress = trim($adress);
$tel = trim($tel);

mail("kirillpovasin@gmail.com", "заказ N1234 с сайта MSB", "Имя:".$name.".<br> Номер телефона: ".$tel ". <br>доствака:" if (.$name.checked) {"самовызов"} else{.$adress.}. "заказ:" foreach ($bagMass as $item) {"<br>название": $item.name. "количество:" $item.inputkol. "срок аренды:" $item.inputMonth. "цена:" $item.price} "<br>общая цена:" .$summPriceOrder,"From: admin@gmail.com \r\n");

if (mail("kirillpovasin@gmail.com", "заказ N1234 с сайта MSB", "Имя:".$name.".<br> Номер телефона: ".$tel ". <br>доствака:" if (.$name.checked) {"самовызов"} else{.$adress.}. "заказ:" foreach ($bagMass as $item) {"<br>название": $item.name. "количество:" $item.inputkol. "срок аренды:" $item.inputMonth. "цена:" $item.price} "<br>общая цена:" .$summPriceOrder,"From: admin@gmail.com \r\n"))
 {
    echo "сообщение успешно отправлено";
} else {
    echo "при отправке сообщения возникли ошибки";
}
?>