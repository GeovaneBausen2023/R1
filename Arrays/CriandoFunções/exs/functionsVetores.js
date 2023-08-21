
function somarElementos(vetor){
    var acumuladora = 0;

    for (let ind = 0; ind < vetor.length; ind++){
        acumuladora += vetor[ind];
    }
    return acumuladora;
}

function indexMenorElemento(vetor){
    var indexMenor = 0;

    for (let ind = 1; ind < vetor.length; ind++){
        if (vetor[ind] < vetor[indexMenor]){
            indexMenor = ind;
        }
    }
    return indexMenor;
}

var indMenorConsumo = indexMenorElemento(vetConsumo);
alert("Placa: " + vetPlaca[indMenorConsumo] +
      "\nKm: " + vetKM[indMenorConsumo] +
      "\nConsumo: " + vetConsumo[indMenorConsumo]);