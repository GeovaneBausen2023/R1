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
function criaMain() {
    echo '
    <div class="form-container">
        <h2>Cadastro de Usuário</h2>
        <form action="seu_arquivo_php.php" method="post">
            <label for="nome">Nome:</label><br>
            <input type="text" id="nome" name="nome" required><br>
            <label for="email">Email:</label><br>
            <input type="email" id="email" name="email" required><br>
            <label for="senha">Senha:</label><br>
            <input type="password" id="senha" name="senha" required><br>
            <input type="submit" value="Cadastrar">
        </form>
    </div>
    ';
}











?>