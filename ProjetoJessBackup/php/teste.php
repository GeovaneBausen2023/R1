<?php
include "site.config.php";
include "Usuario.class.php";
include "UsuarioControl.class.php";

$db = new Database("localhost", "root", "", "projetojess");  
$userControl = new UsuarioControl($conexao);
$userControl->listar();
print_r($userControl->listar());


?>