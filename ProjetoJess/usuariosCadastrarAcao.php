<?php
session_start();
//print_r($_SESSION);
require_once 'php/site.config.php';
include "php/Usuario.class.php";
include "php/UsuarioControl.class.php";

$userControl = new UsuarioControl($conexao);
/*verificação*/
paginaRestrita($_SESSION["logado"]);

$user = new Usuario($_POST["login"],$_POST["email"],$_POST["senha"]);
$userControl->cadastrar($user);


print_r($_POST);

?>