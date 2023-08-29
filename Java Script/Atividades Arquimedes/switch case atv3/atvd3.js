/* Descrição: Desenvolva uma aplicação que leia dois valores numéricos X e N informados pelo usuário
sendo o valor de X um número real 
e o valor de N um inteiro maior ou igual a zero (validar). 

A aplicação deve usar esses valores para calcular e mostrar o resultado do seguinte somatório:
S = ( X0 / 0! ) - ( X1 / 1! ) + ( X2 / 2! ) - ( X3 / 3! ) + ... ( X(N-1) / (N-1)! ) ±  ( XN / N! )

   Autor: Geovane Brandemburg Bausen
   Versão: 1.0
   Data: 14/06/2023
*/
const inputX = document.getElementById("inputX");
const inputY = document.getElementById("inputY")
const btCalcular = document.getElementById("btCalcular");
const outResultado = document.getElementById("outResultado");

btCalcular.addEventListener("click", calcular);

function calcular(){
    var numeroX = inputX.value;

    if (inputX.value == "" || numeroX<0) {
    alert("O número x deve ser real!");
    inputX.value = "";
    inputX.focus();
    outResultado.textContent = "";
    
    }else if(inputX.value == "" || numeroX<0){
        alert("O número ta ok");
    }else{
        outResultado.textContent = "ok";
    }
}

  