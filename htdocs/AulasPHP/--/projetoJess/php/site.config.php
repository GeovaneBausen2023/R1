<?php

function criarMenu($usuario) {
    $menu = "";
    if($usuario != "")
    {
        $menu = ' <ul class="flex-center-row">
        <li><a class="efeito-h" href="index.php">Home</a></li>
        <li><a class="efeito-ah" href="equipes.php">Equipes</a></li>      
        <li class="usuario-logado">
            <iconify-icon icon="lucide:user-cog"></iconify-icon> 
             '.$usuario.'
             <a class="efeito-h" href="sair.php">
                Sair</a>
        </li>
    </ul>';
    } else {
        $menu = ' <ul class="flex-center-row">
        <li><a class="efeito-h" href="index.php">Home</a></li>
        <li><a class="efeito-ah" href="equipes.php">Equipes</a></li>
        <li>
        <a class="efeito-h" href="entrar.php">
            Entrar</a>
        </li>
    </ul>';
    }

    return $menu;
}

function criaHeader($titulo, $usuario = "") {
   // echo "Usuario : " . $usuario;

    echo '<!DOCTYPE html>
    <html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>MetasTSI : '.$titulo.'</title>
        <link rel="stylesheet" href="css/style.css">
        <link rel="stylesheet" href="css/login.css">
        
        <link rel="icon" href="img/logo.PNG" type="image/png">
    
         <!-- Inclua o Iconify Core para lidar com os ícones -->
         <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"></script>
    
    </head>
    <body>
        <header>
            <div class="logo flex-center-row">
                <img src="img/logo.svg" alt="Logo MetaTSI" width="50" height="50"> 
                <div>MetasTSI</div>
            </div>
    
            '.criarMenu($usuario).'
           
        </header>
        
        <main class="center">';
}

function criaFooter() {
   
}

function criaEquipe($nome) {
    return '<div class="equipe flex-center-column mr-2 p-2">
    <img class="img-equipe efeito-h" src="img/equipe.svg" alt="Logo MetaTSI" width="100" height="100"> 
    <p>Equipe '.$nome.'</p>
    </div>';   
}

?>