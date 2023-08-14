function criarMatriz(x, y) {
    const matriz = [];
    for (let i = 0; i < y; i++) {
      const linha = [];
      for (let j = 0; j < x; j++) {
        linha.push(0); // Adicione aqui os valores iniciais dos elementos, se necessário
      }
      matriz.push(linha);
    }
    return matriz;
  }
  
  const colunas = 5; // X
  const linhas = 4; // Y
  
  const matrizCriada = criarMatriz(colunas, linhas);
  console.log(matrizCriada);