<?php
session_start();

include 'php/site.config.php';

if($_SESSION["logado"] == 0) { 
   header('Location: entrar.php?error=Usuário não está LOGADO');
} 

criaHeader('Equipes', $_SESSION["email"]);



criaFooter();
?>

