//maior distancia percorrida
function indexMaiorElemento(vetor) {
    var indexMaiorDistancia = 0;//iniciando com indice 0

    for (let ind = 1; ind < vetor.length; ind++) {

        //compara e armazena o indice do maior valor encontrado
        if (vetor[ind] > vetor[indexMaiorDistancia]) {
            indexMaiorDistancia = ind;
        }
    }
    //retorna o indice do elemento 
    return indexMaiorDistancia;
}
var indMaiorDistancia = indexMaiorElemento(vetKM);
alert("Maior distancia percorrida:"
 + "\nPlaca: " + vetPlaca[indMaiorDistancia]
 + "\nQuilometragem: " + vetKM[indMaiorDistancia] +" Km"
 + "\nConsumo: " + vetConsumo[indMaiorDistancia]+" L");

