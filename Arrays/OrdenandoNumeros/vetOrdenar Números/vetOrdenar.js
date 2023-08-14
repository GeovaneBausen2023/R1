const outSaida = document.getElementById("outSaida");
const btOrdenar = document.getElementById("btOrdenar");

var vetQuant = [39, 8, 58, 42, 2, 15, 7, 19, 21];
var vetDescr = ['pirulito', 'bala', 'bombom', 'pipoca', 'jujuba', 'paçoca', 'todinho', 'choquito', 'bis'];

btOrdenar.addEventListener("click", ordenarNum);

function ordenarNum() {
    for (var ind = 0; ind < vetQuant.length-1; ind++) { //percorre vetor
        var indMenor = ind; //indice de comparação;

        for (var indDois = ind + 1; indDois < vetQuant.length; indDois++) { //para verificar se tem troca ou não na posição percorrida; ordenar para cada percorrida;
            if (vetQuant[indDois] < vetQuant[indMenor]) { //de trás para frente ele compara no vetor inteiro;
                indMenor = indDois; //fica aqui o menor número
            }
        }
        var aux = vetQuant[ind]; //trocando números
        vetQuant[ind] = vetQuant[indMenor];
        vetQuant[indMenor] = aux;

        aux = vetDescr[ind]; //trocando números
        vetDescr[ind] = vetDescr[indMenor];
        vetDescr[indMenor] = aux;
    }
    outSaida.innerHTML = `Vetores Ordenados:<br>${vetQuant}<br>${vetDescr}`;
}
