<?php
session_start();
//print_r($_SESSION);
require_once 'php/site.config.php';
include "php/Usuario.class.php";
include "php/UsuarioControl.class.php";

$userControl = new UsuarioControl($conexao);
/*verificação*/
paginaRestrita($_SESSION["logado"]);

$id=@$_GET['id'];
$erro=@$_GET['error'];
$sucesso = @$_GET['sucesso'];


//localizando usuario por id
$usuario = $userControl->buscarPorId(@$_GET["id"]);
/*verificação*/
if(!verificaString($_GET["id"]) || $usuario==null){
    header('Location: usuarios.php?error= Nao foi possivél editar o usuario com a identificacao informada');
}

$msg = "";
if ($erro != "") {
    $msg = '<div class=" alerta">
    <iconify-icon icon="line-md:alert"></iconify-icon>
    <p><strong>Atenção:</strong> A seguinte mensagem de erro foi informada: '.$erro.'</p>
  </div>';
}

criaHeader('Usuários :: Cadastrar', $_SESSION["login"]);
//echo $msg;
echo '<div> <h1>Cadastro de Usuários</h1>';
echo $msg;
?>
 <!--submit-->
<form action="usuariosEditarAcao.php" method="POST">

                                            <!--obj escondido-->
    <input type="text" class="form-control" name="id" hidden value="<?=$usuario->getId()?>">


    <div class="mt-5 mb-3">
    <label for="exampleLogin" class="form-label">Login</label>
    <input type="text" class="form-control" id="exampleLogin" name="login" value="<?=$usuario->getNome()?>">
    </div>

    <div class="mb-3">
    <label for="exampleEmail" class="form-label">E-mail</label>
    <input type="text" class="form-control" id="exampleEmail" name="email" value="<?=$usuario->getEmail()?>">
    </div>

    <div class="mb-3">
    <label for="exampleSenha" class="form-label">Senha</label>
    <input type="password" class="form-control" id="exampleSenha" name="senha" value="<?=$usuario->getSenha()?>">
    </div>
    <!--botões-->
    <div class="row mt-5">

        <div class="col">
            <button type="submit" class="form-control btn btn-lg btn-warning">
            <iconify-icon icon="akar-icons:edit"></iconify-icon> Editar</button>  
        </div>
    </div>
</form>

<?php
echo '</div>';
criaFooter();
?>