//funções:
//trabalho de garçon
//terça
//quarta
//quinta
//sexta
//sabado
//domingo

/*
--------------------------------------
- São açoes executadas assim que são chamadas
ou em decorrencia de um evento.

- Uma function pode receber parametros e retorna um resultado.

--------------------------------------
function açao(param){
return res
}
açao(5)chamada
--------------------------------------
*/
/*function parInpar(n){
    if(n%2==0){
        return 'par!'
    }else{
        return 'impar!'
    }
}
/*
 res = parInpar(16);
console.log(res);

console.log(parInpar(989.47));
//--------------------------------------
function somar(num1, num2){
    return num1 + num2;
}
//res = somar(16,2);
console.log(somar(16,2));
*///--------------------------------------
function fatorial(n) {
    let fat = 1
    for(let c = n; c > 1; c--){
        fat *= c ;
    }
    return fat;
}
console.log(fatorial(6));
//5!= 5x4x3x2x1 = 120
//--------------------------------------