<?php
include "../backend/Database.class.php";
include "../backend/Tarefa.class.php";
include "../backend/TarefaControl.class.php";

$db = new Database("localhost", "root", "", "projetojess");   
$tarefaControl = new TarefaControl($db);

$id = @$_GET["id"];
if($id != "") {
    $tarefa = $tarefaControl->buscarPorId($id);

    if($tarefaControl->deletar($tarefa)) 
    {
    header("Location: tarefaLista.php?msg=DELEÇÃO REALIZADA COM SUCESSO");

    } else {
        header("Location: tarefaLista.php?msg=ERRO NA DELEÇÃO");
    }
} else 
{
    header("Location: tarefaLista.php?msg=ID não encontrado");
}

//print_r($tarefa);


//print_r($tarefaControl->listar());

?>