let inFatorial = document.getElementById("inFatorial");
let outResultado = document.getElementById("outResultado");
let btCalcular = document.getElementById("btCalcular");

btCalcular.addEventListener("click", calcular);

function calcular() {
    let fatorial = inTipo.value;

    if (inFatorial.value == "") {
        alert("O campo foi deixado vazio'!");
        inTipo.focus();
        outResultado.textContent = "";
    }
    if (inValorReferencia.value == "") {
        alert("O campo 'Valor de Referencia' foi deixado vazio!");
        inTipo.focus();
        outResultado.textContent = "";
        if (inValorReferencia.value == 0) {
            alert("O campo 'Valor de Referencia' não pode ser zero!");
            inTipo.focus();
            outResultado.textContent = "";

        } else {
            while (fatorial >= 0) {

            }
        outResultado.textContent `${numero}!{fatorial}`;
        }
    }
}
