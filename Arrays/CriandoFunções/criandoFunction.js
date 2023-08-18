/*
const mat1 = [
  39, 8, 58, 42, 2, 15, 7, 19, 21,
  5, 7, 32, 11, 67, 9, 57, 13, 65,
  62, 34, 18, 56, 58, 43, 56, 8, 17,
  5, 7, 32, 11, 67, 9, 57, 13, 65
];
*/

function somarElementos(vetor){
  var acumuladora = 0;

  for (let ind = 0; ind < vetor.length; ind++){
      acumuladora += vetor[ind];
  }
  return acumuladora;
}
alert(somarElementos(vetKM));


//função para retornar a posição de menor valor

function menorValor(vetor){
  var acumuladora = 0;
  var maiorValor = 0;
  for (let ind = 0; ind < vetor.length; ind++){
    
      acumuladora += vetor[ind];
  }
  return acumuladora;
}
alert(menorValor(vetKM));
