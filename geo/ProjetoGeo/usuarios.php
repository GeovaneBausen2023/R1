<?php
session_start();
//print_r($_SESSION);
require_once 'php/site.config.php';
include "php/Usuario.class.php";
include "php/UsuarioControl.class.php";


$userControl = new UsuarioControl($conexao);
paginaRestrita($_SESSION["logado"]);

/*---------*/
$erro = @$_GET['error'];
$sucesso = @$_GET['sucesso'];

//echo $msg;
$msg = "";

if ($erro != "") {
    $msg = '<div class="alerta">
    <iconify-icon icon="line-md:alert"></iconify-icon>
    <p><strong>Atenção:</strong> A seguinte mensagem de erro foi informada: '.$erro.'</p>
  </div>';
}


if ($sucesso != "") {
    $msg = '<div class="sucess">
    <iconify-icon icon="el:ok-sign"></iconify-icon>
    <p><strong>Informação:</strong> A seguinte mensagem de sucesso foi informada: '.$sucesso.'</p>
  </div>';
}
/*---------------*/


criaHeader('Usuários ::', $_SESSION["login"]);
echo $msg;
echo '<div> <h1>Users
</h1>';
?>


<div class="row p-4">
    <div class="col-4 p-3">
        <a href="usuariosCadastrar.php" class="btn btn-lg btn-success">cadastrar</a>
    </div>

    <div class="col-8 p-3">
        <form action="usuariosFiltrar.php" method="POST">
            <div class="row">
                <div class="col-10">
                    <input class="form-control" name="filtro" type="text" placeholder="pesquise aqui" />
                </div>
                <div class="col-2">
                    <button type="submit" class="form-control text-bg-primary">
                        <iconify-icon icon="uiw:search"></iconify-icon>
                    </button>
                </div>
        </form>
    </div>
</div>



<?php
echo '<table class="table table-striped">
<thead>
  <tr>
    <th scope="col">#ID</th>
    <th scope="col">Login</th>
    <th scope="col">Email</th>
    <th scope="col">Senha</th>
    <th scope="col">Ações</th>
  </tr>
</thead>
<tbody>';


foreach ($userControl->listarObj() as $usuario) {
    //print_r($usuario);
    echo ' <tr>
        <th scope="row">' . $usuario->getId() . '</th>
        <td>' . $usuario->getNome() . '</td>
        <td>' . $usuario->getEmail() . '</td>
        <td>' . $usuario->getSenha() . '</td>

        <td><a href="usuariosEditar.php?id='.$usuario->getId().'" class="btn btn-sm btn-warning"><iconify-icon icon="akar-icons:edit"></iconify-icon>Editar</a>
        
        <a href="usuariosDeletar.php?id='. $usuario->getId().'"class="btn btn-sm btn-danger"><iconify-icon icon="icon-park-twotone:delete"></iconify-icon>Deletar</a></td>

      </tr>';
}
echo ' </tbody></table>';
echo '</div>';


criaFooter();
?>