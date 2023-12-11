<?php
include "../backend/Database.class.php";
include "../backend/Tarefa.class.php";
include "../backend/TarefaControl.class.php";

$db = new Database("localhost", "root", "", "projetojess");   
$tarefaControl = new TarefaControl($db);

print_r($_POST);

$id = @$_POST["id"];
$titulo = @$_POST["titulo"];
$descricao = @$_POST["descricao"];
$data = @$_POST["data"];

if($id != "") {
    $tarefa = $tarefaControl->buscarPorId($id);
    $tarefa->setTitulo($titulo);
    $tarefa->setDescricao($descricao);
    $tarefa->setData($data);

    $tarefaControl->atualizar($tarefa);
}


/*


    //print_r($tarefa);
    */
?>