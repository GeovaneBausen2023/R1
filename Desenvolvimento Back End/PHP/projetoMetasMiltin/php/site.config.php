<?php
/*
$titulo = "Projeto Metas :: Principal";
$titulo2 = "Projeto Metas :: Sobre";

function ImprimeTitulo ($texto) {
    return "Pedro Quem Desenvolveu o projeto: " . $texto;
}*/

function CriaHeader ($titulo) {
    echo '<!DOCTYPE html>
    <html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>'.$titulo.'</title>
        <link rel="stylesheet" href="../css/metas.css">
    
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
        
        <script src="https://cdn.jsdelivr.net/npm/iconify-icon@1.0.8/dist/iconify-icon.min.js"></script>
    </head>
    <body>
        <header class="df-horizontal-center">
            <iconify-icon icon="uil:post-stamp"></iconify-icon>
            <div>
                <a class="btn-outline" href="sobre.php">Sobre</a>
                <a class="btn-outline" href="../html/index.html">Google</a>
                <a class="btn" href="metas.php">Principal</a>            
            </div>
            
        </header>
        <main>';
}


    $site_footer = ' </main>
    <footer class="df-horizontal-center">
        <small>Projeto de Metas :: Desenvolvido pela Turma de Back-end I 2023</small>
    </footer>
    </body>
    </html>';

    $site_footerBlank = ' </main>
</body>
</html>';

?>