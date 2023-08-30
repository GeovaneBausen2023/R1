<?php
function criaHeader($titulo) {
    echo '<!DOCTYPE html>
    <html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Projeto MetasTSI :: '.$titulo.'</title>
        <link rel="stylesheet" href="css/style.css">
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
    
            <ul class="flex-center-row">
                <li><a class="efeito-h" href="index.php">Home</a></li>
                <li><a class="efeito-ah" href="equipes.php">Equipes</a></li>
                <li><a class="efeito-h" href="entrar.php">Entrar</a></li>
            </ul>
        </header>

        <main class="flex-center-row">';
}

function criaFooter() {
    echo ' </main>
    <footer>
        <iconify-icon icon="ic:outline-copyright"></iconify-icon>
        <div>Projeto desenvolvido por alunos do curso de TSI</div>
        <ul class="flex-center-column"> 
            <li><a href="#">Sobre nós</a></li>
            <li><a href="#">Contato</a></li>
        </ul>
    </footer>

    <!-- <img src="img/equipe.svg" alt="Meu SVG" width="100" height="100"> -->

</body>
</html>';
}

function criaEquipe($nome) {
    return '<div class="equipe flex-center-column mr-2 p-2">
    <img class="img-equipe efeito-h" src="img/equipe.svg" alt="Logo MetaTSI" width="100" height="100"> 
    <p>Equipe '.$nome.'</p>
    </div>';   
}

?>