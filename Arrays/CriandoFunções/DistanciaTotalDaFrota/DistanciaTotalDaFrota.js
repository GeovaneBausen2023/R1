//distancia total da frota
function somarvetores(vetor){
    let somaTotal = 0;

    for (let i = 0; i < vetor.length; i++) {
        somaTotal += vetor[i];
    }
    return somaTotal;
}
const distanciaTotal = somarvetores(vetKM);
alert(distanciaTotal);
