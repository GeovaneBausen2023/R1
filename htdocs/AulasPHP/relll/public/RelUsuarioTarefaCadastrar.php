<?php
include "../backend/Database.class.php";
include "../backend/Usuario.class.php";
include "../backend/UsuarioControl.class.php";


include "../backend/Tarefa.class.php";
include "../backend/TarefaControl.class.php";

$db = new Database("localhost", "root", "", "projetojess");   
$usuarioControl = new UsuarioControl($db);

$tarefaControl = new TarefaControl($db);

//print_r($usuarioControl->listarObj());

    //print_r($tarefa);
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
    <h1>Cadastrar Relacao Usuario - Tarefa</h1>


    
    <form action="RelUsuarioTarefaCadastrarAcao.php" method="POST">

    <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Usuario</label>
        
          <select class="form-select" name="identificacaoUsuario" aria-label="Default select example">
            <option selected>Selecione o Usuario</option>
            <?php
            foreach($usuarioControl->listarObj() as $user) {
                echo '<option value="'.$user->getId().'">'.$user->toString().'</option>';
            }
            ?>           
         </select>
    </div>


    <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Tarefa</label>
        
          <select class="form-select" name="identificacaoTarefa" aria-label="Default select example">
            <option selected>Selecione a Tarefa</option>
            <?php
            foreach($tarefaControl->listarObj() as $tarefa) {
                echo '<option value="'.$tarefa->getId().'">ID:'.$tarefa->getId().' - '.$tarefa->getTitulo().'</option>';
            }
            ?>           
         </select>
    </div>

    <div class="row text-center p-5">
        <div class="col"><button type="reset" class="btn btn-secondary">Resetar</SUBMIT> </div>
        <div class="col"><button type="submit" class="btn btn-success">Cadastrar</SUBMIT> </div>
    </div>

    </form>


  </div>
    





    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
  </body>
</html>