<?php
include "Database.class.php";
include "Usuario.class.php";
include "Tarefa.class.php";
include "TarefaControl.class.php";
include "UsuarioControl.class.php";

include "RelUsuarioTarefaControlN.class.php";

$db = new Database("localhost", "root", "", "projetojess");   

$rel = new RelUsuarioTarefaControlN($db);
$usuarioControl = new UsuarioControl($db);
/*
//$tarefaControl = new TarefaControl($db);


//$tarefa_antiga = $tarefaControl->buscarPorId(7);
//$tarefa_nova = $tarefaControl->buscarPorId(8);



*/

$usuario = $usuarioControl->buscarPorId(1);
print_r($rel->listarTarefas($usuario));

echo "<hr>";

print_r($rel->pesquisarTarefaCaseSensitive($usuario, "javascript"));


?>