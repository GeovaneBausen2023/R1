
var inNome = document.getElementById("inNome");
var inSobrenome = document.getElementById("inSobrenome");
var inAnoNasc = document.getElementById("inAnoNasc");

var btOk = document.getElementById("btOk");
var outDados = document.getElementById("outDados");

btOk.addEventListener("click", exibirNaTela);

function exibirNaTela() {
    var nome = inNome.value;
    var sobreNome = inSobrenome.value;
    var anoNasc = inAnoNasc.value;

    if (nome == "") {
        alert("O campo Nome não pode estar vazio!!")
        inNome.focus();
    } else {
        if (anoNasc > 2023|| anoNasc <1900) {
         alert("Ano de nascimento invalido!! Varifique o valor!!");
         inAnoNasc.focus();
         inAnoNasc.value = ""; 
        } else {
            var idade = 2023 - anoNasc;
            outDados.textContent = nome + " " + sobreNome + ", você tem " + (idade) + " anos de idade!";
        }
    }
}
        
    