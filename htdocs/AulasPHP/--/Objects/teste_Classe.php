<?php
include 'Usuario.class.php';

    $sind = new Usuario();
    $sind->nome = "sindoca";
    $sind->email = "sind@email.com";
    $sind->setSenha("1234");

    echo $sind->toString();
    //$sind ->toString();
    /*
    echo "nome: " . $sind->nome . " senha: " . $sind->getSenha();
    */ 
    $geo = new Usuario();
    $geo->nome = "geo";
    $geo->email = "geo@email.com";
    $geo->setSenha("1234");

    $geo ->toString();
?>

