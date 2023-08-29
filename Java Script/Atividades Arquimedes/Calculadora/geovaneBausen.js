var InOperando1 = document.getElementById("operando1");
var InOperando2 = document.getElementById("operando2");
var InOperacao = document.getElementById("InOperacao");
var btCalcular = document.getElementById("btCalcular");
var btLimpar = document.getElementById("btLimpar");
var outResultado = document.getElementById("resultado");

btCalcular.addEventListener("click", calcular);

function calcular() {
    var operando1 = parseFloat(InOperando1.value);
    var operando2 = parseFloat(InOperando2.value);
    var operacao = InOperacao.value;
    var resultado = 0;

    if (InOperando1.value == "") {
        alert("O campo 1 foi deixado vazio!");
        InOperando1.focus();
        outResultado.textContent = ""; 
        
    }

    if (InOperando2.value == "" && operacao !== "SQRT") {
        alert("O campo 2 foi deixado vazio!");
        InOperando2.focus();
        outResultado.textContent = ""; 
        
    }

    if (operacao == "/") {
        if (operando2 == 0) {
            outResultado.textContent = "ERRO...Divisão por ZERO Impossível";
            InOperando2.focus();
            outResultado.textContent = ""; 
            return;
        }

        resultado = operando1 / operando2;
    } else if (operacao == "SQRT") {
        InOperando2.disabled = true;//não consegui fazer funcionar 
        if (operando1 < 0) {
            alert("ERRO...Raiz quadrada de valor negativo não é um número real.");
            return;
        }
        resultado = Math.sqrt(operando1);
    } else {
        switch (operacao) {
            case "+":
                resultado = operando1 + operando2;
                break;
            case "-":
                resultado = operando1 - operando2;
                break;
            case "*":
                resultado = operando1 * operando2;
                break;
            case "^":
                resultado = Math.pow(operando1, operando2);
                break;
            default:
                alert("Operação inválida.");
                return;
        }
    }

    outResultado.textContent = "Resultado da operação: " + operando1 + " " + operacao + " " + operando2 + " = " + resultado.toFixed(2);
}

btLimpar.addEventListener("click", limpar);

function limpar() {
    InOperando1.value = "";
    InOperando2.value = "";
    outResultado.textContent = "";

    // Colocar o cursor de foco no primeiro campo de entrada (Operando1)
    InOperando1.focus();
}
