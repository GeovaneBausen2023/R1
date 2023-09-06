
/*let numeros = [0,1,2,3,4,5,6,7,8,9];
numeros.push(1);//adc ao final
console.log(numeros);
console.log(numeros.length);//tamanho

//ordenando de forma simples
let numeros3 = [9,0,1,2,3,5,6,7,8,9];
numeros3.sort();
console.log(numeros3);
*/
/*
let valores = [0,1,2,3,4,5];
for(pos = 0; pos < valores.length; pos++) {
    console.log(`a posição ${pos} tem o valor ${valores[pos]}`);
}
*/
//para cada posição em valores mostre pos
let valores = [0,1,2,3,4,36];
for(let pos in valores) {
    console.log(`a posição ${pos} tem o valor ${valores[pos]}`);
}

//buscando por posição
console.log(valores.indexOf(36));