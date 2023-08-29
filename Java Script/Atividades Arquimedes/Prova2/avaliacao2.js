/* Descrição:
O jogador deve escolher uma face do dado, valor entre 1 e 6 e indicar quantas vezes o dado deve ser lançado;
 A aplicação deve simular a repetição de lançamentos do dado (de acordo com a quantidade de vezes que o jogador indicou) e contabilizar em quantas lançamentos foi obtido cada um dos números entre 1 e 6.
Por exemplo: Admita que o jogador escolha a face 4 do dado e indique 100 lançamentos do dado, um possível resultado seria:
face 1 - obtido em 18 lançamentos do dado;
face 2 - obtido em 11 lançamentos do dado;
face 3 - obtido em 21 lançamentos do dado;
face 4 - obtido em 26 lançamentos do dado;
face 5 - obtido em 11 lançamentos do dado;
face 6 - obtido em 13 lançamentos do dado.
O jogador pode realizar diversas rodadas do jogo. Sendo que a cada rodada, o jogador pode:
ganhar 3 pontos, se a face do dado que escolheu tiver ocorrido em mais de 20% das vezes que o dado foi lançado;
ganhar 1 ponto, se a face do dado escolhida tiver ocorrido em menos de 10% dos lançamentos do dado;
perder 1 ponto, se a face do dado escolhida tiver ocorrido entre 10 e 20% dos lançamentos do dado.

   Autor: Geovane Bausen
   Versão: 1.0
   Data: 12/06/2023
*/

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
        `Parcela a receber daqui a 30 dias: $${valor30Dias.toFixed(2)}`;;
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
