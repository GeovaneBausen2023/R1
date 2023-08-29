/*
5) Desenvolva uma aplicação para calcular
  a média semestral de um estudante da disciplina,

  sendo esta a média ponderada de trêss notas (nota1, nota2 e nota3)
  com seus respectivos pesos(peso1, peso2, peso3)

  a aplicação deve inicialmente usar instruções que interajam
  com o estudante, solicitando que ele informe os valores de cada nota e seu 
  respectivo peso, atribuindo tais valores a variaveis criadas por você
  Em seguida, a aplicação deve fazer o calculo da média semestral, 
  atribuindo a outra variavél. E por fim, mostrar ao estudante o valor que obteve 
  na média semestral da disciplina.*/


 // solicita as notas e pesos das avaliações
let nota1 = parseFloat(prompt("Digite a nota 1:"));
let peso1 = parseFloat(prompt("Digite o peso da nota 1:"));

let nota2 = parseFloat(prompt("Digite a nota 2:"));
let peso2 = parseFloat(prompt("Digite o peso da nota 2:"));

let nota3 = parseFloat(prompt("Digite a nota 3:"));
let peso3 = parseFloat(prompt("Digite o peso da nota 3:"));

// calcula a média ponderada
let mediaSemestral = (nota1*peso1 + nota2*peso2 + nota3*peso3) / (peso1 + peso2 + peso3);

// exibe o resultado ao usuário
alert("Sua média semestral na disciplina é: " + mediaSemestral.toFixed(2));


/*(nota1 x peso1 + nota2 x peso2 + nota3 x peso3) / (peso1 + peso2 + peso3)

Substituindo os valores, temos:

(10 x 1 + 10 x 1 + 10 x 1) / (1 + 1 + 1) = 10
30 / 3 = 10

(10 x 5 + 10 x 5 + 10 x 5) / (5 + 5 + 5) = 10
150 / 15 = 10

(10 x 1 + 10 x 2 + 10 x 3) / (1 + 2 + 3) = 10
150 / 15 = 10


*/
    /*
    A palavra-chave var foi a primeira forma de declarar variáveis em JavaScript e é uma variável global,
    ou seja, é acessível em todo o escopo da função em que foi declarada.
    Além disso, as variáveis var são elevadas (hoisted) para o topo do escopo 
    da função em que foram definidas, o que significa que podem ser usadas antes
    mesmo de serem declaradas. No entanto, isso pode levar a problemas de legibilidade e confusão no código.

    Já a palavra-chave let foi introduzida no ES6 (ECMAScript 2015) e é uma variável local,
    ou seja, é acessível apenas dentro do bloco em que foi declarada. As variáveis let não
    são elevadas (hoisted), o que significa que elas precisam ser declaradas antes de serem usadas. 
    Isso ajuda a tornar o código mais legível e fácil de entender.

    Resumindo, é recomendado usar let em vez de var na maioria dos casos,
    pois isso ajuda a evitar problemas de escopo e torna o código mais legível.
    No entanto, em alguns casos, como quando se trabalha com bibliotecas ou códigos antigos,
     o uso de var pode ser necessário.
     */