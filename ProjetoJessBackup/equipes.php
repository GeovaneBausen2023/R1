<?php
session_start();
//print_r($_SESSION);

require_once 'php/site.config.php';
/*verificação*/
paginaRestrita($_SESSION["logado"]);
criaHeader('Equipes', $_SESSION["login"]);

echo '<div class="flex-center-row">';

for($indice=1; $indice <=3; $indice++) {
   $box = criaEquipe($indice);
   echo $box;
}

echo '</div>';


criaFooter();
?>

