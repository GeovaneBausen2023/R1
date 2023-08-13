/*Tarefa 1 - Aplicação de Criação e Preenchimento de uma Matriz
Desenvolva uma aplicação que crie e mostre uma matriz de dimensões NxM (ou seja, com N linhas e M colunas), sendo que o usuário informará os valores de N e de M em campos de input do documento Html (os valores informados pelo usuário devem ser verificados, de forma que sejam maiores que zero). O exemplo a seguir mostra o formato que deve ser usado para mostrar a matriz, caso o usuário informasse os valores de N = 5 e M = 4:
1 passo criar html com imputs para N linhas e M colunas

n=linhas
m=colunas
|0.0|0.1|0.2|0.3|
|1.0|1.1|1.2|1.3|
|2.0|2.1|2.2|2.3|
|3.0|3.1|3.2|3.3|
|4.0|4.1|4.2|4.3|

*/
var inNLinhas = document.getElementById("inNLinhas");
var inMColunas = document.getElementById("inMColunas");
var btOk = document.getElementById("btOk");

btOk.addEventListener("click", gerar) 

function gerar(){
  var linhas = inNLinhas.value;
  var colunas = inMColunas.value;
  alert(linhas);
  alert(colunas);

}