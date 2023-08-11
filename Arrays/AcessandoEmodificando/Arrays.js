//ex:como criar um array para adcionar elemento de um estoque"
/*Um array em JavaScript pode conter uma variedade de tipos de dados,
  incluindo variáveis, números, strings, objetos e até mesmo outros arrays.*/
console.log("Elementos do array:")
var estoqueMolhos = ["mShoyu", "mTeriaque", "mAgridoce", "mBarbecue"];
console.log(estoqueMolhos)
//
console.log("Ex. de como inserir outros tipos de dados:")
var random = ["string", 795, [0, 1, 2]];
console.log(random)
//
console.log("Acessando elementos do array:")
console.log("Elemento na posição 0:")
console.log(random[0]);
console.log("Elemento na posição 2:")
console.log(random[2]);
//
console.log("modificando um item do array:")
estoqueMolhos[0] = "mShoyuHiperConcetrado";
console.log('Elemento na posição 0: "estoqueMolhos"')//observe como inserir aspas dentro do console.log
console.log(estoqueMolhos[0]);

