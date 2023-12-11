<?php
include 'conexao.php';

$id = $_POST["id"];
$nome = $_POST["nome"];
$email = $_POST["email"];

$sql = "UPDATE usuarios SET nome='$nome', email='$email' WHERE id=$id";

if (mysqli_query($conn, $sql)) {
    echo "Usuário atualizado com sucesso!";
} else {
    echo "Erro ao atualizar usuário: " . mysqli_error($conn);
}

mysqli_close($conn);
?>