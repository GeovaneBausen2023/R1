const inValor = document.getElementById("inValor");
const btRegistrar = document.getElementById("btRegistrar");
const outSoma = document.getElementById("outSoma");
const outMedia = document.getElementById("outMedia");

var contaValores = 0;
var somaValores = 0;

btRegistrar.addEventListener("click", registrarValor);

function registrarValor(){
    var valor = Number(inValor.value);

    if (inValor.value == ""){
        alert("Campo Valor deixado vazio!");
        inValor.focus();
    } else {
        contaValores = contaValores + 1;
        somaValores = somaValores + valor;
        outSoma.textContent = "Somatória: " + somaValores;
        outMedia.textContent = "Média: " + (somaValores / contaValores).toFixed(2);
    }
}