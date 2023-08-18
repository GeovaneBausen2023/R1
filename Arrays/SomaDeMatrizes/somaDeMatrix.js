const mat1 = [
  [39, 8, 58, 42, 2, 15, 7, 19, 21],
  [5, 7, 32, 11, 67, 9, 57, 13, 65],
  [62, 34, 18, 56, 58, 43, 56, 8, 17],
  [5, 7, 32, 11, 67, 9, 57, 13, 65]
];

const mat2 = [
  [5, 7, 32, 11, 67, 9, 57, 13, 65],
  [62, 34, 18, 56, 58, 43, 56, 8, 17],
  [39, 8, 58, 42, 2, 15, 7, 19, 21],
  [5, 7, 32, 11, 67, 9, 57, 13, 65]
];





// Criar uma matriz auxiliar para armazenar a soma das matrizes
const matrizAuxiliar = [];

// Iterar sobre as linhas das matrizes mat1 e mat2
for (let i = 0; i < mat1.length; i++) {
  const linhaMatrizAuxiliar = [];
  
  // Iterar sobre os elementos das linhas de mat1 e mat2
  for (let j = 0; j < mat1[i].length; j++) {
    const soma = mat1[i][j] + mat2[i][j];
    linhaMatrizAuxiliar.push(soma);
  }
  
  matrizAuxiliar.push(linhaMatrizAuxiliar);
}

console.log(matrizAuxiliar);
