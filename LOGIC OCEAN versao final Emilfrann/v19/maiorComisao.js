function calcularComissaoTotal(vetCPF, vetValor, vetPorcentagem) {
  var vendasPorVendedor = {};

  // Calcular a comissão total de cada vendedor
  for (var i = 0; i < vetCPF.length; i++) {
    var cpf = vetCPF[i];
    var valor = vetValor[i];
    var porcentagem = vetPorcentagem[i];
    var comissao = valor * (porcentagem / 100);

    if (vendasPorVendedor.hasOwnProperty(cpf)) {
      vendasPorVendedor[cpf] += comissao;
    } else {
      vendasPorVendedor[cpf] = comissao;
    }
  }

  return vendasPorVendedor;
}

var vendasPorVendedor = calcularComissaoTotal(vetCPF, vetValor, vetPorcentagem);

// Converter o objeto vendasPorVendedor em um array de pares chave-valor
var vendasArray = Object.entries(vendasPorVendedor);

// Classificar o array com base no valor da comissão total em ordem decrescente
vendasArray.sort(function (a, b) {
  return b[1] - a[1];
});

var tbody = document.querySelector("#tbTotalVendas tbody");

// Percorrer o array e cria as linhas da tabela em ordem
for (var i = 0; i < vendasArray.length; i++) {
  var cpf = vendasArray[i][0];
  var comissao = vendasArray[i][1].toFixed(2);

  var tr = document.createElement("tr");

  var tdCPF = document.createElement("td");
  tdCPF.textContent = cpf;

  var tdComissao = document.createElement("td");
  tdComissao.textContent = "R$ " + comissao;

  tr.appendChild(tdCPF);
  tr.appendChild(tdComissao);

  tbody.appendChild(tr);
}
