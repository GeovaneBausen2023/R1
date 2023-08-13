/*Tarefa 1 - Aplicação de Criação e Preenchimento de uma Matriz
Desenvolva uma aplicação que crie e mostre uma matriz de dimensões NxM (ou seja, com N linhas e M colunas), sendo que o usuário informará os valores de N e de M em campos de input do documento Html (os valores informados pelo usuário devem ser verificados, de forma que sejam maiores que zero). O exemplo a seguir mostra o formato que deve ser usado para mostrar a matriz, caso o usuário informasse os valores de N = 5 e M = 4:
n=linhas
m=colunas

  n  |0.0|0.1|0.2|0.3|
  n  |1.0|1.1|1.2|1.3|
  n  |2.0|2.1|2.2|2.3|
  n  |3.0|3.1|3.2|3.3|
  n  |4.0|4.1|4.2|4.3|

---------

*/
var inNLinhas = document.getElementById("inNLinhas");
var inMColunas = document.getElementById("inMColunas");
var btOk = document.getElementById("btOk");
var saida = document.getElementById("out");

btOk.addEventListener("click", gerar)

function gerar() {
  var nLinhas = inNLinhas.value;
  var mColunas = inMColunas.value;

  if (inNLinhas.value < 0 || inNLinhas.value == "") {
    alert("insira os dados corretamente...");
    inNLinhas.focus();
  } else if (inMColunas.value < 0 || inMColunas.value == "") {
    alert("insira os dados corretamente...");
    inMColunas.focus();

  } else {

    var matrix = [];

    for (var i = 0; i < nLinhas; i++) {
      var row = [];
      for (var j = 0; j < mColunas; j++) {
        row.push(i + "." + j);
      }
      matrix.push(row);
    }
    // Limpar conteúdo anterior da saída
    saida.innerHTML = "";

    // Exibir a matriz na saída
    for (var i = 0; i < nLinhas; i++) {
      var linhaFormatada = "";
      for (var j = 0; j < mColunas; j++) {
        linhaFormatada += "|" + matrix[i][j];
      }
      linhaFormatada += "|<br>";
      saida.innerHTML += linhaFormatada;
    }
  }
}