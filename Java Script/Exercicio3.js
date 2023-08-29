/*
3) Desenvolva um programa que leia 2 notas de um aluno em uma disciplina. 
Calcule e informe a média das notas do aluno na disciplina.

Exemplo:

1ª Nota: 7.0

2ª Nota: 8.0

Média da Notas: 7.5*/


alert("Introdução ao Java script: ")
// Lê as notas do usuário
let nota1 = parseFloat(prompt("Digite a primeira nota:"));
let nota2 = parseFloat(prompt("Digite a segunda nota:"));

// Calcula a média das notas
let media = (nota1 + nota2) / 2;

// Exibe o resultado da média
alert("A média das notas é: " + media.toFixed(2));

/*
Neste código, usei a função parseFloat para converter
as notas inseridas pelo usuário de strings para números decimais.
Em seguida, calculamos a média das notas usando a fórmula (nota1 + nota2) / 2.
Finalmente, usamos a função toFixed para arredondar o resultado da média para 2 casas decimais
e exibimos o resultado em uma janela de alerta.
*/