<?php
include "site.config.php";

CriaHeader("Equipes");

?>

<?php 

for($indice=1; $indice <=5; $indice++) {
    criaEquipe($indice);
}
?>

<?php
CriaFooter();
?>