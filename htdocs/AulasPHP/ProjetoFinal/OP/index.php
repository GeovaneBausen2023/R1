<?php
include 'php/site.config.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $nome = $_POST['nome'];
  $email = $_POST['email'];
  $senha = $_POST['senha'];

  $usuario = new Usuario($nome, $email, $senha);

  // Aqui você pode inserir o código para adicionar o usuário ao banco de dados
}



criaMain();

?>

