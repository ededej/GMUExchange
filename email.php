$email = $_POST['email'];
$name = $_POST['name'];
$message = $_POST['message'];

mail($email, $name, $message);
