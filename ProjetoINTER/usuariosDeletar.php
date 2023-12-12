<?php
session_start();
//print_r($_SESSION);
require_once 'php/site.config.php';
include "php/Usuario.class.php";
include "php/UsuarioControl.class.php";

$userControl = new UsuarioControl($conexao);
paginaRestrita($_SESSION["logado"]);

//print_r($_GET);

//busca usuario pelo id
$usuario = $userControl->buscarPorId(@$_GET["id"]);
//print_r($usuario);


if($usuario && verificaString($_GET["id"]) && $usuario!=null){
        if($userControl->deletar($usuario))
             header('Location: usuarios.php?sucesso=Usuario ['.$usuario->getNome().'] foi deletado .Encontrado');
        else
        header('Location: usuarios.php?error= Ocorreu algum equivoco na deleção do usuario
        ['.$usuario->getNome().'] no banco de dados.');
    // Código para quando o usuário existe
}else{
     header('Location: usuarios.php?error= Ocorreu algum erro na deleção do usuario.Usuario não encontrado');
}

$userControl->deletar($usuario);


?>