const btClicar = document.getElementById("btClicar");
const outContagem = document.getElementById("outContagem");
var contadora = 0;

btClicar.addEventListener("click", contarCliques);

function contarCliques(){
    contadora = contadora + 1;

    outContagem.textContent = contadora + " - clicks";
}