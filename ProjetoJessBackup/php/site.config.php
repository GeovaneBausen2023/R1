<?php
/*conexao global*/
require_once "Database.class.php";
$conexao = new Database("localhost", "root", "", "projetojess");  

/*verificação*/
function paginaRestrita($logado){
    if($logado == 0) { 
        header('Location: entrar.php?error=Usuário não está LOGADO');
     } 
}

function getUsuario($login, $senha_md5) {

    include './site.conexao.php';
    
    $sql = "SELECT * FROM `usuarios` WHERE (`login` LIKE '$login' OR `email` LIKE '$login') AND `senha` LIKE '$senha_md5';";
    

    $result = mysqli_query($conn, $sql);    
    if (mysqli_num_rows($result) > 0) {
    
        $row = mysqli_fetch_assoc($result);
       // print_r($row);
        return $row;
        /*
        $id = $row["id"];
        $nome = $row["nome"];
        $email = $row["email"];    
        $senha = $row["senha"];    
        */
    
    } else {
       return null;
    }
    
    mysqli_close($conn);

}

function criarMenu($usuario) {
    $menu = "";
    if($usuario != "")
    {
        $menu = ' <ul class="flex-center-row">
        <li><a class="efeito-h" href="index.php">Home</a></li>
        <li><a class="efeito-ah" href="equipes.php">Equipes</a></li> 
        <li><a class="efeito-ah" href="equipes.php">Tarefas</a></li>       
        <li class="usuario-logado">
            <iconify-icon icon="lucide:user-cog"></iconify-icon> 
             '.$usuario.'
             
        </li>
        <li class="btn-cinza"><a class="efeito-h" href="sair.php">
        Sair</a></li>
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

        <!--bootstrap-->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
        <!--bootstrap-->

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
    echo '   </main>
    <footer>
        <iconify-icon icon="ic:outline-copyright"></iconify-icon>
        <div>Projeto desenvolvido por alunos do curso de TSI</div>
        <ul class="flex-center-column"> 
            <li><a href="#">Sobre Nós</a></li>
            <li><a href="#">Contato</a></li>
        </ul>
    </footer>

    <!-- <img src="img/equipe.svg" alt="Meu SVG" width="100" height="100">-->

</body>

 <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>

  </body>

</html>';
}

function criaEquipe($nome) {
    return '<div class="equipe flex-center-column mr-2 p-2">
    <img class="img-equipe efeito-h" src="img/equipe.svg" alt="Logo MetaTSI" width="100" height="100"> 
    <p>Equipe '.$nome.'</p>
    </div>';   
}

function verificaString($str){
    if(isset($str)&&$str !="")
     return true;
else
    return false;

    
}

?>