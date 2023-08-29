var inNome = document.getElementById("inNome");
var inSobrenome = document.getElementById("inSobrenome");
var inAnoNasc = document.getElementById("inAnoNasc");
var btOk = document.getElementById("btOk");

btOk.addEventListener("click", ola);

function ola(){
    alert (inNome.value + " " + inSobrenome.value + ", você tem " +
            (2023 - inAnoNasc.value) + "anos de idade!");
}