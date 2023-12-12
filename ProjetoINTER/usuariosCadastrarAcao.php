<?php
session_start();
//print_r($_SESSION);
require_once 'php/site.config.php';
include "php/Usuario.class.php";
include "php/UsuarioControl.class.php";

$userControl = new UsuarioControl($conexao);
paginaRestrita($_SESSION["logado"]);

$erro = @$_GET['error'];
$sucesso = @$_GET['sucesso'];

$msg = "";

/*verificações de cadastro*/
if(verificaString($_POST["login"]) && verificaString($_POST["email"]) && verificaString($_POST["senha"]))
{
    $user = new Usuario($_POST["login"], $_POST["email"], $_POST["senha"]);
    if($userControl->cadastrar($user))
        header('Location: usuarios.php?sucesso=Usuario  ['.$_POST["login"].'] cadasrado com sucesso no banco de dados');
    else
        header('Location: usuariosCadastrar.php?error=Usuario nao foi cadastrado no banco de dados');

    
}else header('Location: usuariosCadastrar.php?error=erro no envio dos parametros');

?>