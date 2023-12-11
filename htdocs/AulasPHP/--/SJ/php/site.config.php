<?php

function criaHeader($titulo, $usuario = "") {
    // echo "Usuario : " . $usuario;
 
     echo '<!DOCTYPE html>
     <html lang="pt-br">
     
     <head>

         <meta charset="UTF-8">
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <link rel="stylesheet" href="./css/styleGeral.css">
         <link rel="stylesheet" href="./css/styleLogin.css">
         <title>'.$titulo.'</title>
     
     </head>
     
     <body>
     
         <header>

             <div class="logo">
                 <img src="./imagens/kitsune.png" alt="logo image">
                 <div class="oss">Oss</div>
                 <div class="idem">idem</div>
             </div>

             '.criarMenu($usuario).'

         </header>
         <main>
         
         ';
        
}

function criarMenu($usuario) {
    
    $menu = "";

        if($usuario != ""){
            $menu ='
            <ul>
                <li>Home</li>
                <li>Tracks</li>
                <li>'.$usuario.'</li>

            </ul>';

        }else{

        $menu ='
            <ul>
                <li><a href="index.php">Home</a></li>
                <li>Tracks</li>
                <li><a href="entrar.php">Entrar</a></li>

            </ul>';

        }
        return $menu;
}

function criamMin() {
    echo'
    <main class="apresentacao">
    <section class="apresentacao__conteudo">
        <h1 class="apresentacao__conteudo__titulo">A Ossidem eleva seu som a outro Nível<strong 
        class="titulo-destaque"><br> Mixagem profissional!
        </strong></h1>
        <p class="apresentacao__conteudo__texto">Olá! Sou Geo, bora tornar ideias reais.</p>
        <div class="apresentacao__links">
            <a class="apresentacao__links__link" href="https://www.youtube.com/@ossidemrec">Youtube</a>
            <a class="apresentacao__links__link" href="https://github.com/GeovaneBausen2023">GitHub</a>
            <a class="apresentacao__links__link" href="#">Spotfy</a>
        </div>
    </section>
    <img class ="img" src="OIG (3).jpeg(1).png" alt="Foto da Joana Santos programando">
</main>
';



}



















function criaFooter() {
    echo ' </main>
    <footer>
        <iconify-icon icon="ph:copyright-thin"></iconify-icon>
        <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"></script>


        <div>ossidem</div>
        <div class="links">
            <a href="#">Sobre nós </a>
            <a href="#">  Contato</a>
        </div>
    </footer>

    </body>
</html>';
}











?>