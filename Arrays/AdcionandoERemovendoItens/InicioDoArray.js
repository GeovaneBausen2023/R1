//Adicionando ao inicio
var myArray = [
    "Manchester",
    "London",
    "Liverpool",
    "Birmingham",
    "Leeds",
    "Carlisle",
];
myArray.unshift("Edinburgh");
console.log(myArray);

//removendo do inicio e adcionado a variavel
var removedItem = myArray.shift();
myArray;
console.log(myArray);
console.log(removedItem);