<?php

print_r($_POST);

$email = $_POST['email'];
$senha = $_POST['senha'];

if ($email == "admin@admin" && $senha == "1234") {
    echo "OK";

} else {
    echo "ta errado man";
}

?>