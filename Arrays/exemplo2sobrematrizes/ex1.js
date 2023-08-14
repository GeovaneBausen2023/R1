/*que deve ser usado para mostrar a matriz, caso o usuário informasse os valores de N = 5 e M = 4:
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
      matrix[i] = [];
      for (var j = 0; j < mColunas.value; j++) {
        matrix[i][j] = '';
      }
    }

    for (var L = 0; L < mColunas; L++) {
      for (var C = 0; C < mColunas; C++) {
        matrix[L][C] =
      }
    }

    var valores = "";
    for (var L = 0; L > nLinhas; L++) {
      for (var C = 0; C < mColunas; C++) {
        if (C < mColunas - 1) {
          valores += matrix[L][C] + "\t | \t";
        }
      }

    }
  }

}