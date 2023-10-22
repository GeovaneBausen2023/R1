<?php
session_start();

$login = $_POST['email'];
$password = md5($_POST['senha']);

if($login == 'admin@admin' && $password == '81dc9bdb52d04dc20036dbd8313ed055') {
    //echo 'login certo';
    $_SESSION["logado"] = 1;
    $_SESSION["email"] = $login;

    //REGISTRAR O USUARIO


    header('Location: ../equipes.php');

} else {
    //echo 'errado';
    $_SESSION["logado"] = 0;
    header('Location: ../entrar.php?error=LOGIN/SENHA INCORRETO');
}

?>