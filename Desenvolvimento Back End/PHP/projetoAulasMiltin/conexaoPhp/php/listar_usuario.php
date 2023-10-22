<?php
include 'conexao.php';

$sql = "SELECT * FROM usuarios";
$result = mysqli_query($conn, $sql);

if(mysqli_num_rows($result) > 0){
    while($row = mysqli_fetch_assoc($result)){

        echo "ID: ".$row['id']." - nome: ".$row['nome']."
         - Email" . $row['email']. "
         <a href='excluir_usuario.php?id='>Excluir</a><br>";
    }
}else{
    echo "nenhum usuarios encontrado.";
}

mysqli_close($conn);
?>