<?php
include "site.config.php";
include "Usuario.class.php";
include "UsuarioControl.class.php";

include "Tarefa.class.php";
include "TarefaControl.class.php";


$tarefa = new Tarefa('titulo','descricao', date('Y-m-d H:i:s'));
$tarefa ->toPrint();

$tc = new TarefaControl($conexao);
print_r($tc->cadastrar($tarefa));
?>