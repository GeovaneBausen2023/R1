<?php
include 'conexao.php';



$nome = $_POST["nome"];
$email = $_POST["email"];
$senha = $_POST["senha"];

$sql = "INSERT INTO usuarios (nome, email, senha)
        VALUES ('$nome', '$email', '$senha')";

if (mysqli_query($conn, $sql)) {
    echo "Usuário cadastrado com sucesso!";
} else {
    echo "Erro ao cadastrar usuário: " . mysqli_error($conn);
}

mysqli_close($conn);
?>