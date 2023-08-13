//Adicionando ao final do array
var myArray = [
    "Manchester",
    "London",
    "Liverpool",
    "Birmingham",
    "Leeds",
    "Carlisle",
];
console.log(myArray);
console.log(myArray.length);

myArray.push("Bradford", "Brighton");
console.log(myArray);
console.log(myArray.length);

//Removendo o último item da array
myArray.pop();
console.log(myArray);
console.log(myArray.length);

//Para salvar o item em uma nova variável
console.log('item em uma nova variável:');
var removedItem = myArray.pop();
myArray;
console.log(removedItem)

