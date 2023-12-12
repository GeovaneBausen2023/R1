<?php
include "site.config.php";
include "Usuario.class.php";
include "UsuarioControl.class.php";

include "Tarefa.class.php";
include "TarefaControl.class.php";


$tarefa = new Tarefa('titulo','descricao');
$tarefa ->toPrint();

$tc = new TarefaControl($conexão);
$tc ->cadastrar($tarefa);
?>