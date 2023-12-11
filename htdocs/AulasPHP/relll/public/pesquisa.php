<?php



include "../backend/Database.class.php";
include "../backend/Tarefa.class.php";
include "../backend/TarefaControl.class.php";
include "../backend/Usuario.class.php";
include "../backend/UsuarioControl.class.php";
include "../backend/RelUsuarioTarefaControlN.class.php";


$procura =  @$_POST["tarefa"];

$db = new Database("localhost", "root", "", "projetojess");   
$rel = new RelUsuarioTarefaControlN($db);

$tarefaControl = new TarefaControl($db);
$usuarioControl = new UsuarioControl($db);


$usuario = $usuarioControl->buscarPorId(1);
$tarefas = $rel->listarTarefas($usuario);

$encontradas = array();
foreach($tarefas as $tarefa) {
    //echo "<hr>";
   // print_r($tarefa->getTitulo());
    
    if(strpos($tarefa->getTitulo(), $procura) != "") {
        //echo 'Achei: '. $tarefa->getTitulo();
        $encontradas[] = $tarefa;
    }/*
    else 
        echo 'Nao achei '. $tarefa->getTitulo();
    */
}

print_r($encontradas);

/*
$texto = "A Miltin Aula Miltin de Back-end do Miltin é massa!";
$procura = "Aula";

echo strpos($texto, $procura);

if(strpos($texto, $procura) != "")
    echo "Oi achei o $procura no texto - $texto";
else
    echo 'nao achei nada';


/*
$texto = "A Aula do Adrian sobre a vida é legal!";
//$procura = "Aula";

echo strpos($texto, $procura);

if(strpos($texto, $procura) != "")
    echo "Oi achei o $procura no texto - $texto";
else
    echo 'nao achei nada';
*/
?>


