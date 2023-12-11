<?php
include 'UsuarioControl.php'; 

if (isset($_GET['id'])) {
    $id = $_GET['id']; 

    $usuarioControl = new UsuarioControl($conexao); 

    $usuario = $usuarioControl->buscarPorId($id); 
    if ($usuario != null) {
        $usuarioControl->deletar($usuario); // Deletar o usuário
        echo "Usuário deletado com sucesso!";
    } else {
        echo "Usuário não encontrado.";
    }
} else {
    echo "ID do usuário não fornecido.";
}
?>
