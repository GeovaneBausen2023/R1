<?php
include 'UsuarioControl.php'; 

$usuarioControl = new UsuarioControl($conexao); 
$usuarios = $usuarioControl->listar(); 

echo "<ul>";
foreach ($usuarios as $usuario) {
    echo "<li>";
    echo "Nome: " . $usuario['nome'] . ", ";
    echo "Email: " . $usuario['email'];
    echo " [<a href='excluir.php?id=" . $usuario['id'] . "'>Excluir</a>]";
    echo "</li>";
}
echo "</ul>";
?>
