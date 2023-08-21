//menor consumo
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
alert("Menor consumo:"+"\nPlaca: "
     + vetPlaca[indMenorConsumo]
     +"\nQuilometragem percorrida: " + vetKM[indMenorConsumo] + " Km"
     +"\nConsumo médio: " + vetConsumo[indMenorConsumo] + " L");

