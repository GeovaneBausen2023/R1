
// Criando uma matriz bidimensional (array de arrays)
var matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log('Acessando elementos da matriz')
console.log(matrix[0][0]); // Primeira linha, primeiro elemento: 1
console.log(matrix[1][2]); // Segunda linha, terceiro elemento: 6
console.log(matrix[2][1]); // Terceira linha, segundo elemento: 8
//
console.log('percorrendo todos os itens')

for (var i = 0; i < matrix.length; i++) {
  var rowOutput = '';
  for (var j = 0; j < matrix[i].length; j++) {
    rowOutput += matrix[i][j] + '\t'; // Adiciona um tab para separar os elementos
  }
  console.log(rowOutput); // Imprime a linha no console
}
