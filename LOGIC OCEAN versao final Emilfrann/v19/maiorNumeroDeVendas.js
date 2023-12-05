function calcularNumeroVendasPorCPF(vetCPF) {
  var numeroVendasPorCPF = {};

  // Contar o número de vendas para cada CPF
  for (var i = 0; i < vetCPF.length; i++) {
    var cpf = vetCPF[i];

    if (numeroVendasPorCPF.hasOwnProperty(cpf)) {
      numeroVendasPorCPF[cpf]++;
    } else {
      numeroVendasPorCPF[cpf] = 1;
    }
  }

  return numeroVendasPorCPF;
}

var numeroVendasPorCPF = calcularNumeroVendasPorCPF(vetCPF);

// Converter o objeto numeroVendasPorCPF em um array de pares chave-valor
var numeroVendasArray = Object.entries(numeroVendasPorCPF);

// Classificar o array com base no número de vendas em ordem decrescente
numeroVendasArray.sort(function (a, b) {
  return b[1] - a[1];
});

var tbody = document.querySelector("#tbTotalVendas tbody");

// Percorrer o array classificado e criar as linhas da tabela em ordem
for (var i = 0; i < numeroVendasArray.length; i++) {
  var cpf = numeroVendasArray[i][0];
  var numeroVendas = numeroVendasArray[i][1];

  var tr = document.createElement("tr");

  var tdCPF = document.createElement("td");
  tdCPF.textContent = cpf;

  var tdNumeroVendas = document.createElement("td");
  tdNumeroVendas.textContent = numeroVendas;

  tr.appendChild(tdCPF);
  tr.appendChild(tdNumeroVendas);

  tbody.appendChild(tr);
}
