<?php

    $username = $_POST['username'];
    $password = $_POST['password'];

    // Verifique o nome de usuário e a senha
    if ($username == 'admin@admin' && $password == '1234') {
       // echo 'Acesso liberado';
    header('Location:equipes.php');
    } else {
        //echo 'Tente novamente';
        header('Location:entrar.php?error=LOGIN');

    }


?>