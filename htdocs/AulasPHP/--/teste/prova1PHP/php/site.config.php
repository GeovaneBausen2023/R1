<?php

function criaHeader($titulo) {
    return '<!DOCTYPE html>
    <html>
    <head>

        <title>'.$titulo.'</title>

        <link rel="stylesheet" type="text/css" href="styleCSS1.css">

    </head>
    
    <body>
    
    <header>

        <h1>Prova de Back-End I - PHP</h1>

    </header>';
    }
function criaCss($estilo) {
    if ($estilo == 1) {
        echo '
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
        }
        
        header {
            background-color: #333;
            color: #fff;
            text-align: center;
            padding: 10px;
        }
        
        footer {
            background-color: #333;
            color: #fff;
            text-align: center;
            padding: 10px;
            position: absolute;
            bottom: 0;
            width: 100%;
        }
        
        main {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
        }
        ';
    } elseif ($estilo == 2) {
        // Coloque aqui o código CSS para o estilo 2
    } else {
        // Coloque aqui o código CSS para outros estilos
    }
}

    

function criaMain($tipo = 0) {
$html = "";
if($tipo ==0 )
$html = '<main>
<!-- Container padrão -->
<div id="container">'; //vai criar o inicio do main
else if( $tipo ==1) {
$html = '<!-- Conteúdo da questão será inserido aqui -->
</div>
</main>'; //vai criar o fechamento do main
}
return $html;
}
?>