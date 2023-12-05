// Loop que percorre o array "vetValor"
for (let i = 0; i < vetValor.length; i++) {
  // Obtém a tabela com o id "tbComissoes"
  var tbComissoes = document.getElementById("tbComissoes");
  
  // Cria uma nova linha <tr> para a tabela
  var trComissoes = document.createElement("tr");
  
  // Cria uma célula <td> para o CPF e define seu conteúdo
  var tdCpf = document.createElement("td");
  tdCpf.innerHTML = vetCPF[i];
  trComissoes.appendChild(tdCpf); // Adiciona a célula <td> de CPF à linha <tr>
  
  // Cria uma célula <td> para o Valor de Venda e define seu conteúdo
  var tdValorVenda = document.createElement("td");
  tdValorVenda.innerHTML = vetValor[i];
  trComissoes.appendChild(tdValorVenda);
  
  // Cria uma célula <td> para a Porcentagem e define seu conteúdo formatado
  var tdPorcentagem = document.createElement("td");
  tdPorcentagem.innerHTML = vetPorcentagem[i].toFixed(1) + "%";
  trComissoes.appendChild(tdPorcentagem);
  
  // Cria uma célula <td> para o Valor da Comissão e define seu conteúdo formatado
  var tdValorComissao = document.createElement("td");
  tdValorComissao.innerHTML = "R$" + (vetValor[i] * vetPorcentagem[i] / 100).toFixed(2);
  trComissoes.appendChild(tdValorComissao);
  
  // Adiciona a linha <tr> completa à tabela com o id "tbComissoes"
  tbComissoes.appendChild(trComissoes);
}
