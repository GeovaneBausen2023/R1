<?php
include "site.config.php";

$error_message = $_GET['error'];

// Exibir a mensagem de erro em um alerta
if ($error_message = 'LOGIN_INVALIDO') {
    echo '<script>alert("senha incorreta");</script>';
}

CriaHeader("Entrar");

?>

<?php
criaLogin();
?>

<?php
CriaFooter();
?>

