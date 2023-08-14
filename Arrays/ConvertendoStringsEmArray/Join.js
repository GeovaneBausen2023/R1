console.log( 'metodo split, seprando por , ');
var string = "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle";
var string = string.split(",");
console.log(string);
console.log('-------');
console.log('Ao acessar o último elemento de um array, subtrai-se 1 do seu comprimento devido à indexação baseada em zero.');
console.log(string.length-1);
console.log('numero de cidades:');
console.log(string.length);//

console.log('//inverso-----.join');
var string = string.join(",+");//você pode especificar diferentes separadores
console.log(string);
console.log('--------------------------------');

console.log('//inverso----- toString()');
var string = ["Rocket", "Flash", "Bella", "Slugger"];
string.toString(); //Rocket,Flash,Bella,Slugger
console.log(string);
console.log('--------------------------------');
