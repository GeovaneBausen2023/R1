//declarando vetor
var vetPaises = [
    "Manchester",
    "London",
    "Liverpool",
    "Birmingham",
    "Leeds",
    "Carlisle"
];
//*
//push adciona um elemento ao final do vetor
vetPaises.push("Bradford", "Brighton");

//unshift - Adicionando ao inicio e desloca os elemento a uma posção abaixo
vetPaises.unshift("Edinburgh");

//Pop - Remove o último item da array
vetPaises.pop();

//remove o primeiro elemento e desloca o que sobraram a uma posição acima
vetPaises.shift();

//Para salvar o item removido em uma nova variável
console.log('item em uma nova variável:');
var removedItem = vetPaises.pop();

