<?php

$site_header = '<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Metas by geo</title>
    <link rel="stylesheet" href="style.css">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif&family=Roboto:wght@300;400;700&display=swap"
        rel="stylesheet">
</head>

<body>
    <div class="header">
        <div img="img-conteiner">
            <img class="logo" src="logo.png" alt="Logo">
        </div>
        <div class="icons">
        <a href="#" class="link">Home</a>
        <a href="sobre.html" class="link">Sobre</a>
        <ion-icon name="bag-handle-outline"></ion-icon>
        <a href="#" class="link btn">Fazer Login</a>
    </div>
    </div>
    <div class="main">
        

        <input class="pesquisa" type="text" id="inTarefa" autofocus>
        
        <div class="botoes">
            <input type="button" class="btn-cinza" value="Adicionar Tarefa" id="btAdicionarTarefa">
            <input type="button" class="btn-cinza" value="Urgência" id="btUrgencia">
            <input type="button" class="btn-cinza" value="Em progresso" id="btAtender">
        </div>
        <h3>Em processo:
            <span id="outAtendimento"></span>
        </h3>
        <p id="outLista"></p>
    </div>';

    $site_footer = '<div class="footer">Brasil</div>
    <div class="footer1">
        <a href="#" class="link">Sobre</a>
        <a href="#" class="link">Como funciona o programa</a>
        <a href="#" class="link">Privacidade</a>
        <a href="#" class="link">Termos</a>
        <a href="#" class="link">Configurações</a>
    </div>

    <script src="metas.js"></script>
</body>

</html>';

?>