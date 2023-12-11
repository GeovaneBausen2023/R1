<?php
include "Database.class.php";
include "Usuario.class.php";
include "Tarefa.class.php";
include "TarefaControl.class.php";
include "UsuarioControl.class.php";

include "RelUsuarioTarefaControl.class.php";

$db = new Database("localhost", "root", "", "projetojess");   

$rel = new RelUsuarioTarefaControl($db);
//$rel->listar();

$tarefaControl = new TarefaControl($db);
$usuarioControl = new UsuarioControl($db);

$tarefa_antiga = $tarefaControl->buscarPorId(7);
$tarefa_nova = $tarefaControl->buscarPorId(8);

$usuario = $usuarioControl->buscarPorId(1);

//print_r($tarefa);
//print_r($usuario);


$rel->atualizar($usuario, $tarefa_antiga, $tarefa_nova);


//$rel->cadastrar($usuario, $tarefa);
//$rel->deletar($usuario, $tarefa);

//$usuario = new Usuario();




//$tarefa = new Tarefa("Estudar OO em PHP", "Realizar as videoaulas e codar");
//$tarefa->toPrint();
/*
$tarefaControl = new TarefaControl($db);


print_r($tarefaControl->listar());

$tarefa = $tarefaControl->buscarPorId(3);
$tarefa->setTitulo('Novo titulo: Estudar mais PHP OO e JAVASCRIPT e HTML E CSS E TUDO QUE NO CURSO');

$tarefaControl->atualizar($tarefa);

print_r($tarefaControl->listar());

//$tarefa->toPrint();

//$tarefaControl->cadastrar($tarefa);



/*


$userControl = new UsuarioControl($db);

$resultados = $userControl->listar();

//echo count($resultados);

foreach($resultados as $valor) {
    echo $valor["nome"];
}

/*
for($i =0; $i<count($resultados); $i++) {
   // print_r($resultados[$i]);
   echo $resultados[$i]["nome"];
}

/*

$usuario = $userControl->buscarPorId(18);
$usuario->setSenha('3212');
$usuario->setNome('Zanotti');
$userControl->atualizar($usuario);
*/
?>