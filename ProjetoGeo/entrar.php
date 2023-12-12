<?php
include 'php/site.config.php';

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


criaHeader('Entrar');

echo $msg;
?>



<div class="flex-center-column">

    <div class="flex-center-row">
    <div class="container box-50vw p-2 text-dark">
    Cadastre-se e organize seu estoque de forma prática.
    </div>


            <div class=" lado-direito flex-center-column">
            <!--   <img class="img-equipe efeito-h" src="img/equipe.svg" alt="Equipe" width="150" height="150"> 
                <button class="btn-green efeito-ah">Montar Equipe</button>
    -->    
    
                <form action="php/site.login.php" method="POST">
                <fieldset class="fd-center">
                    <p>Sistema de Login</p>
                    <label class="lb-center">Login ou Email:
                        <input class="in-center" name="login" type="text" placeholder="Insira seu Login">
                    </label>

                    <label class="lb-center">Senha:
                        <input class="in-center" name="senha"  type="password" placeholder="4 a 6 dígitos">
                    </label>
                    <label class="self-aling-left">
                        <input id="bt-entrar" type="submit" value="ENTRAR">
                    </label>
                </fieldset>
            </form>


            </div>
    </div>
</div>    

<?php
criaFooter();
?>

