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
?>


<main>
        <div class="principalLoginEsquerda">
            Bem vindos!!<br> Cadastre-se ou faça login.
        </div>

        <div class="principalLoginDireita">

            <form action="php/site.login.php" method="POST">

                <fieldset class="quadroLogin">
                    <p>LOGIN</p><br>

                    <label class="lb-center">E-mail:
                        <input class="in-center" name="email" type="text" placeholder="email-valido@dominio.com">
                    </label>

                    <label class="lb-center">Senha:
                        <input class="in-center" name="senha"  type="password" placeholder="4 a 6 dígitos">
                    </label>

                    <label>
                        <input id="bt-entrar" type="submit" value="ENTRAR">
                    </label>
                   
                </fieldset>

            </form>
        </div>

</main>

<?php
criaFooter();
?>