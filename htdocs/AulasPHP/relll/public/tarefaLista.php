<?php
include "../backend/Database.class.php";
include "../backend/Tarefa.class.php";
include "../backend/TarefaControl.class.php";

$db = new Database("localhost", "root", "", "projetojess");   
$tarefaControl = new TarefaControl($db);
//print_r($tarefaControl->listar());

?>

<!doctype html>
<html lang="pt-br">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Tarefas</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
  </head>
  <body>

  <div class="container">
    <h1>Tarefas</h1>

    <h1><a class="btn btn-success" href="tarefaCadastrar.php">Cadastrar</a></h1>


    <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">#ID</th>
      <th scope="col">Título</th>
      <th scope="col">Descrição</th>
      <th scope="col">Data e Hora</th>
      <th scope="col">Ações</th>
    </tr>
  </thead>
  <tbody>
   <?php
       foreach($tarefaControl->listar() as $tarefa) {              
        echo ' <tr>
        <th scope="row">'.$tarefa["id"].'</th>
        <td>'.$tarefa["titulo"].'</td>
        <td>'.$tarefa["descricao"].'</td>
        <td><small>'.$tarefa["data"].'</small></td>
        <td><a href="tarefaExcluir.php?id='.$tarefa["id"].'" class="btn btn-danger">Excluir</a> <a href="tarefaEditar.php?id='.$tarefa["id"].'"class="btn btn-primary">Editar</a></td>
      </tr>';
    }
   ?>
  </tbody>
</table>

  </div>
    





    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
  </body>
</html>