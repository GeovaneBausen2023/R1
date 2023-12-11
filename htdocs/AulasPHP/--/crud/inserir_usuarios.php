<?php
include 'conexao.php';

$nome =$POST["nome"];
$email =$POST["email"];
$senha =$POST["senha"];

$sql = "INSERT INTO usuarios (nome,email,senha) VALUES ('$nome','$email','$senha')";
if (mysqli_query($conn,$sql)){
    echo"Usuario cadastrado com sucesso";
}else{


    
}