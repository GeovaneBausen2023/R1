function DistanciaTotal(vetor) {
    var maiorViagem = 0;
    var indexMaiorViagem = 0;

    // Encontrar o índice da frota com mais viagens
    for (let ind = 0; ind < vetor.length; ind++) {
        if (vetor[ind] > maiorViagem) {
            maiorViagem = vetor[ind];
            indexMaiorViagem = ind;
        }
    }

    var distanciaTotal = 0;

    // Calcular a distância total percorrida pela frota com mais viagens
    for (let ind = 0; ind < vetor.length; ind++) {
        if (ind == indexMaiorViagem) {
            distanciaTotal += vetor[ind];
        }
    }

    return { distanciaTotal, indexMaiorViagem };
}

var resultadoDistanciaTotal = DistanciaTotal(vetKM);
var indMaiorViagem = resultadoDistanciaTotal.indexMaiorViagem;

alert("Distância total da frota com mais viagens: " + resultadoDistanciaTotal.distanciaTotal +
"\nPlaca: " + vetPlaca[indMaiorViagem] +
"\nQuilometragem: " + vetKM[indMaiorViagem] + " Km");
