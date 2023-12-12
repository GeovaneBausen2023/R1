<?php
session_start();
//print_r($_SESSION);
require_once 'php/site.config.php';
include "php/Usuario.class.php";
include "php/UsuarioControl.class.php";

$userControl = new UsuarioControl($conexao);
paginaRestrita($_SESSION["logado"]);

/*verificações de cadastro*/
if(verificaString($_POST["login"]) && verificaString($_POST["email"]) && verificaString($_POST["senha"])
&& verificaString($_POST["id"])){

    $usuario = new Usuario($_POST["login"], $_POST["email"], $_POST["senha"]);
    $usuario->setId($_POST["id"]);

    if($userControl->atualizar($usuario)){
        header('Location: usuarios.php?sucesso=Usuario  ['.$_POST["login"].'] foi atualiazado com sucesso no banco de dados');


    }else{
        header('Location: usuariosEditar.php?id='.$_POST["id"].'error= Usuario nao foi atualizado no banco de dados');

    }

}else header('Location: usuariosCadastrar.php?error=erro no envio dos parametros');
?>