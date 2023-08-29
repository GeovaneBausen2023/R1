//Criando Variáveis de Referência para Campos do Html
var inQtdJovens = document.getElementById("inQtdJovens");
var inQtdAdultos = document.getElementById("inQtdAdultos");
var inQtdIdosos = document.getElementById("inQtdIdosos");
var btCalcular = document.getElementById("btCalcular");

var outResultado = document.getElementById("outResultado");

btCalcular.addEventListener("click", calcularPerc);

function calcularPerc() {
    var qtdJovens = Number(inQtdJovens.value);
    var qtdAdultos = Number(inQtdAdultos.value);
    var qtdIdosos = Number(inQtdIdosos.value);

    if (inQtdJovens.value === "" || qtdJovens <0) {
        alert("Valor inválido ");
    } else if (inQtdAdultos.value === "" || qtdAdultos < 0) {
        alert("Valor inválido para a quantidade de adultos.");
    } else if (inQtdIdosos.value === "" || qtdIdosos < 0) {
        alert("Valor inválido para a quantidade de idosos.");
    } else {
        var qtdTotal = qtdJovens + qtdAdultos + qtdIdosos;
        var percJovens = (qtdJovens * 100) / qtdTotal;
        var percAdultos = (qtdAdultos * 100) / qtdTotal;
        var percIdosos = (qtdIdosos * 100) / qtdTotal;

        outResultado.textContent = "Percentual Trab. Jovens = " + percJovens.toFixed(1) + "%\n"
            + "Percentual Trab. Adultos = " + percAdultos.toFixed(1) + "%\n"
            + "Percentual Trab. Idosos = " + percIdosos.toFixed(1) + "%\n";
    }
}
