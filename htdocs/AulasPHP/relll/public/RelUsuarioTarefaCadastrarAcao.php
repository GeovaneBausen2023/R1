<?php
include "../backend/Database.class.php";
include "../backend/Tarefa.class.php";
include "../backend/TarefaControl.class.php";
include "../backend/Usuario.class.php";
include "../backend/UsuarioControl.class.php";
include "../backend/RelUsuarioTarefaControl.class.php";

$db = new Database("localhost", "root", "", "projetofinal");   
$rel = new RelUsuarioTarefaControl($db);

$tarefaControl = new TarefaControl($db);
$usuarioControl = new UsuarioControl($db);

$idUsuario = $_POST["identificacaoUsuario"];
$idTarefa = $_POST["identificacaoTarefa"];

$rel->cadastrar($usuarioControl->buscarPorId($idUsuario),  $tarefaControl->buscarPorId($idTarefa));
?>