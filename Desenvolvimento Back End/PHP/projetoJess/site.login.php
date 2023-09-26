/* OBS:= ATRIBUIÇÃO
== COMPARAÇÃO*/
<?php
    $username = $_POST['username'];
    $password = $_POST['password'];
    $senhaMD5 = md5($senha);

    // Verifique o nome de usuário e a senha
    if ($username == 'admin@admin' &&  $senhaMD5 == "5942b7aebcdce3299f17f7a795c9ec83 ") {
       // echo 'Acesso liberado';
    header('Location:equipes.php');
    } else {
        //echo 'Tente novamente';
        header('Location:entrar.php?error=LOGIN');

    }


?>