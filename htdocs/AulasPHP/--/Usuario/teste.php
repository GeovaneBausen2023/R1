<?php
include "Database.class.php";
include "Usuario.class.php";
include "UsuarioControl.class.php";


$db = new Database("localhost", "root", "", "projetojess");   

$userControl = new UsuarioControl($db);
print_r($userControl->listarUsuarios()); 
?>