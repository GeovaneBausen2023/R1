<?php
include "../backend/Database.class.php";
include "../backend/Tarefa.class.php";
include "../backend/TarefaControl.class.php";

$db = new Database("localhost", "root", "", "projetojess");   
$tarefaControl = new TarefaControl($db);

$id = @$_GET["id"];
if($id != "") {
    $tarefa = $tarefaControl->buscarPorId($id);

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
    <h1>Tarefa #<?php echo $tarefa->getId()?></h1>


    <form action="tarefaEditarAcao.php" method="POST">
        <input type="hidden" name="id" value="<?php echo $tarefa->getId();?>">

    <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Título</label>
            <input type="text" name="titulo" class="form-control"  value="<?php echo $tarefa->getTitulo();?>">
    </div>

    <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">Descrição</label>
        <textarea name="descricao" class="form-control" id="exampleFormControlTextarea1" rows="3"><?php echo $tarefa->getDescricao(); ?></textarea>
    </div>

    <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Data e Hora</label>
            <input type="datetime-local" name="data" class="form-control"  value="<?php echo $tarefa->getData();?>">
    </div>

    <div class="row text-center p-5">
        <div class="col"><button type="reset" class="btn btn-secondary">Resetar</SUBMIT> </div>
        <div class="col"><button type="submit" class="btn btn-success">Confirmar</SUBMIT> </div>
    </div>

    </form>


  </div>
    





    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
  </body>
</html>


<?php




}

//print_r($tarefa);


//print_r($tarefaControl->listar());

?>