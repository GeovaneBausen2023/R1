var btPesquisar = document.getElementById("btPesquisar");
var cpfInformado = document.getElementById("cpfInformado");

btPesquisar.addEventListener("click", pesquisar);

function pesquisar(){
//variaveis globais, contadoras ou acumuladoras
  var valorTotalVendas = 0;
  var qtdVendas = 0;
  var comissoesTotal = 0;
  
  if (cpfInformado.value == "") {
    alert("O Campo CPF está vazio! Informe o CPF corretamente");
  } else {


  valorVenda = "";
  percntComissao = "";

  for (var i = 0; i < vetCPF.length; i++){

   if( cpfInformado.value == vetCPF[i]){
    valorVenda = vetValor[i];
    percntComissao = vetPorcentagem[i];
    
    //acrescentador da quantidade de vendas
    qtdVendas++;

    //somador de vendas e comissao
    valorTotalVendas = valorTotalVendas + valorVenda;

    var comissao = percntComissao / 100 * valorVenda;
    comissoesTotal = comissoesTotal + comissao; 

   }
 }

 if (valorVenda == "" && percntComissao == "") {
  alert("Não foram encontrados valores para este CPF, digite um CPF válido!");
  limpar();
  cpfInformado.focus();
 } else {

 //calcular das médias
 var mediaComissoes = comissoesTotal / qtdVendas;
 var mediaValores = valorTotalVendas / qtdVendas;

 //criar colunas da tabela
 var tbMediaValores = document.getElementById("tbMediaValores");
 var trMediaValores = document.createElement("tr");
 
 //informar os valores na tabela
  var tdCPF = document.createElement("td");
  tdCPF.innerHTML = cpfInformado.value;
  var tdMediaValores = document.createElement("td");
  tdMediaValores.innerHTML = "R$ " + mediaValores.toFixed(2);
  var tdMediaComissoes = document.createElement("td");
  tdMediaComissoes.innerHTML = "R$ " + mediaComissoes.toFixed(2);

  trMediaValores.appendChild(tdCPF);
  trMediaValores.appendChild(tdMediaValores);
  trMediaValores.appendChild(tdMediaComissoes);
 
  tbMediaValores.appendChild(trMediaValores);

  }
 }
}

var btLimpar = document.getElementById("btLimpar")

btLimpar.addEventListener("click", limpar)

function limpar(){
  cpfInformado.value = "";
}
