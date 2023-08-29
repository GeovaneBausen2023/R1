var inNomeProduto = document.getElementById("inNomeProduto");
var inValorProduto = document.getElementById("inValorProduto");
var inSelectFormaPagamento = document.getElementById("inSlectFormaPagamento");
var btRegistrar = document.getElementById("btRegistrar");
var outTotal = document.getElementById("outTotal");
var totalRecebidoDeimediato = 0;
var totalAReceber30Dias = 0;
var totalAReceber60Dias = 0;
var totalRecebimentos = 0;
var outTotalRecebidoDeimediato = document.getElementById("totalRecebidoDeimediato");
var outTotalRecebido30Dias = document.getElementById("totalRecebido30Dias");
var outTotalRecebido60Dias = document.getElementById("totalRecebido60Dias");
var outMedia = document.getElementById("outMedia");

btRegistrar.addEventListener("click", calcular);

function calcular() {
  var nomeProduto = inNomeProduto.value;
  var valorProduto = Number(inValorProduto.value);
  var formaPagamento = inSelectFormaPagamento.value;

  // Validar entradas
  if (nomeProduto == "") {
    alert("O campo Nome do Produto está vazio!");
    inNomeProduto.focus();
  } else if (inValorProduto == "" || inValorProduto < 0) {
    alert("O campo Valor do Produto está vazio ou contém um valor inválido!");
    inValorProduto.focus();
  } else if (formaPagamento =="") {
    alert("Selecione uma forma de pagamento!");
    inSelectFormaPagamento.focus();
  } else {
    switch (formaPagamento) {
      case "avista":
        outTotal.innerHTML =`Produto: ${nomeProduto}<br>Recebimento imediato: $${valorProduto.toFixed(2)}<br>`;
        totalRecebidoDeimediato += valorProduto;
        outTotalRecebidoDeimediato.textContent = " $" + totalRecebidoDeimediato.toFixed(2);
        break;

      case "parcelado2x":
        var valor30Dias = (valorProduto / 2);
        outTotal.innerHTML = "Produto: " + nomeProduto + "<br>" + "Recebimento imediato: $" + valorProduto.toFixed(2) + "<br>" +
        `Parcela a receber daqui a 30 dias: $${valor30Dias.toFixed(2)}`;
        totalAReceber30Dias += valor30Dias;
        outTotalRecebido30Dias.textContent = ` $${totalAReceber30Dias.toFixed(2)}`;
        break;

      case "parcelado3x":
        var valor60Dias = (valorProduto / 3);
        var valor30Dias = valor60Dias;
        outTotal.innerHTML = `Produto: ${nomeProduto}<br>Recebimento imediato: $${valor60Dias.toFixed(2)}<br>` +
        `Parcela a receber daqui a 30 dias: $${valor30Dias.toFixed(2)}<br>` +
        `Parcela a receber daqui a 60 dias: $${valor60Dias.toFixed(2)}`;
        totalAReceber30Dias += valor30Dias;
        totalAReceber60Dias += valor60Dias;
        outTotalRecebido30Dias.textContent = `$${totalAReceber30Dias.toFixed(2)}`;
        outTotalRecebido60Dias.textContent = `$${totalAReceber60Dias.toFixed(2)}`;
        break;
    }

    totalRecebimentos++;
    var mediaRecebimentos = (totalRecebidoDeimediato + totalAReceber30Dias + totalAReceber60Dias) / totalRecebimentos;
    outMedia.textContent = ` $${mediaRecebimentos.toFixed(2)}`;
  }
}
