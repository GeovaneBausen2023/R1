var out = document.getElementById("out");

function ordenarNum(vetor) {
    for (var ind = 0; ind < vetor.length - 1; ind++) {
        var indMenor = ind;

        for (var indDois = ind + 1; indDois < vetor.length; indDois++) {
            if (vetor[indDois] < vetor[indMenor]) {
                indMenor = indDois;
            }
        }
        var aux = vetor[ind];
        vetor[ind] = vetor[indMenor];
        vetor[indMenor] = aux;
    }
    return vetor;
}

var vetorOrdenado = ordenarNum(vetKM);
var indMaiorDistancia = vetorOrdenado.length - 1;

for (var i = 0; i < vetorOrdenado.length; i++) {
    out.innerHTML +=
    "Placa: " + vetPlaca[i] 
    +"<br>Quilometragem: " + vetorOrdenado[i] + " Km" 
    +"<br>Consumo: " + vetConsumo[i] + " L<br><br>";
}


