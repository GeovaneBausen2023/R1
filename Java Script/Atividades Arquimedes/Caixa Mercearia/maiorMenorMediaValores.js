const inValor = document.getElementById("inValor");
const btRegistrar = document.getElementById("btRegistrar");
const outMenor = document.getElementById("outMenor");
const outMaior = document.getElementById("outMaior");
const outMedia = document.getElementById("outMedia");

var contaValores = 0;
var somaValores = 0;
var menorValor;
var maiorValor;


btRegistrar.addEventListener("click", registrarValor);

function registrarValor() {
    var valor = Number(inValor.value);

    if (inValor.value == "") {
        alert("Campo Valor deixado vazio!");
        inValor.focus();
    } else {
        if (contaValores == 0) {
            menorValor = valor;
            maiorValor = valor;
        } else {
            if (valor < menorValor) {
                menorValor = valor;
            }
            if (valor > maiorValor) {
                maiorValor = valor;
            }
        }
        contaValores++;
        somaValores += valor;
        outMenor.textContent = "Menor: " + menorValor;
        outMaior.textContent = "Maior: " + maiorValor;
        outMedia.textContent = "Média: " + (somaValores / contaValores).toFixed(2);
    }
}