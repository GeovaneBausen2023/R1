<?php
include "site.config.php";
        //@removo worn mensagem de erro ao dar reload na page
        if ($msg =''){

        }else{
        $msg = @$_GET['error'];
        }

// Exibir a mensagem de erro em um alerta
if ($msg == 'LOGIN') {
    echo '<script>alert("senha incorreta");</script>';
}
?>
<?php
CriaHeader("Entrar");

?>

<?php
criaLogin();
?>

<?php
CriaFooter();
?>

