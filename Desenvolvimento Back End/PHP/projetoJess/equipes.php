<?php
include "site.config.php";

CriaHeader("Equipes");

?>

<?php 

for($indice=1; $indice <=3; $indice++) {
    criaEquipe($indice);
}
?>

<?php
CriaFooter();
?>