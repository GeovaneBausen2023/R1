<?php
session_start();
//print_r($_SESSION);
require_once 'php/site.config.php';
include "php/Usuario.class.php";
include "php/UsuarioControl.class.php";

$userControl = new UsuarioControl($conexao);
/*verificação*/
paginaRestrita($_SESSION["logado"]);

$erro=@$_GET['error'];
$sucesso = @$_GET['sucesso'];

//echo $msg; 
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

<form  action="usuariosCadastrarAcao.php" method="POST">

    <div class="mt-5 mb-3">
    <label for="exampleLogin" class="form-label">Login</label>
    <input type="text" class="form-control" id="exampleLogin" name="login" placeholder="Digite seu login">
    </div>

    <div class="mb-3">
    <label for="exampleEmail" class="form-label">E-mail</label>
    <input type="text" class="form-control" id="exampleEmail" name="email" placeholder="Digite seu E-mail">
    </div>

    <div class="mb-3">
    <label for="exampleSenha" class="form-label">Senha</label>
    <input type="password" class="form-control" id="exampleSenha" name="senha" placeholder="Digite sua senha">
    </div>
    <!--botões-->
    <div class="row mt-5"   >
        <div class="col">
            <button type="reset" class="form-control btn btn-lg btn-secondary">
                Resetar
            </button>   
        </div>

        <div class="col">
            <button type="submit" class="form-control btn btn-lg btn-success">
            <iconify-icon icon="subway:add"></iconify-icon> Cadastrar</iconify-icon>
                            </button>  
        </div>
    </div>
</form>

<?php
echo '</div>';
criaFooter();
?>