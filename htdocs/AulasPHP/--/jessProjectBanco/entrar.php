<?php
include 'php/site.config.php';

$erro = @$_GET['error'];
$sucesso = @$_GET['sucesso'];

//echo $msg;
$msg = "";

if ($erro != "") {
    $msg = '<div class="alert">
    <span class="iconify" data-icon="mdi-alert" data-inline="false"></span>
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
        <div class="container box-50vw p-2">
                Cadastre-se no MetasTSI para configurar sua equipe e <strong>determinar/organizar</strong> suas tarefas e de sua equipe de forma prática.
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
                        <label class="self-aling-left">
                        <a href="cadastrar.php"> <input id="bt-cadastrar" type="button" value="CADASTRAR-SE"></a>
                    </label>
                    </label>
                </fieldset>
            </form>


            </div>
    </div>
</div>    

<?php
criaFooter();
?>

