/*ex3*/
var agora = new Date();
var diaDaSemana = agora.getDay();
/*
0 = domingo
1 = segunda
2 = terça 
3 = quarta
4 = quinta
5 = sexta
6 = sabado
*/
switch (diaDaSemana) {
    case 0:
        console.log('Domingo')
        break;
    case 1:
        console.log('Segunda')
        break;
    case 3:
        console.log('Terça')
        break;
    case 4:
        console.log('Quarta')
        break;
    case 5:
        console.log('quinta')
        break;
    case 6:
        console.log('sexta')
        break;
    default:
        console.log('dia inválido')
}











/*observações very importantes:
não da pra usar a mesma variavel para duas saidas a não ser que vc some seus resultados +=
*/