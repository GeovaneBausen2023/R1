<?php
include "../backend/Database.class.php";
include "../backend/Tarefa.class.php";
include "../backend/TarefaControl.class.php";

$db = new Database("localhost", "root", "", "projetojess");   
$tarefaControl = new TarefaControl($db);

//print_r($_POST);

$tarefa = new Tarefa(@$_POST["titulo"], @$_POST["descricao"], @$_POST["data"]);
$tarefaControl->cadastrar($tarefa);

/*
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