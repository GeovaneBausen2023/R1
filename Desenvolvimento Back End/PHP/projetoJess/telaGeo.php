<?php
include "site.config.php";

CriaHeader("Home");
?>
<?php
echo ' <main>

<div class="container">
Aqui é um espaço onde você pode escrever suas anotações
</div>
<div class="lado-direito flex-center-column">
<textarea id="editor" rows="10" cols="50" placeholder="Escreva seu livro aqui"></textarea>
<button id="salvarBtn" class="btn-green efeito-ah">Salvar</button>
</div>
        
    </main>';

?>
<?php
CriaFooter();
?>