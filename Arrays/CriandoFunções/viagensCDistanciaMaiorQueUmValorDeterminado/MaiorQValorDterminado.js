// Obter referências do HTML
var inValorEstipulado = document.getElementById("inValorEstipulado");
var btClick = document.getElementById("btClick");
var out = document.getElementById("out");

// Adicionar evento ao botão btClick
btClick.addEventListener("click", exibirViagensMaiores);

// Função para encontrar viagens com distâncias maiores que o valor determinado
function ValorDeterminado(vetor, valor) {
    var viagensMaiores = [];

    for (let ind = 0; ind < vetor.length; ind++) {
        if (vetor[ind] > valor) {
            viagensMaiores.push(ind);
        }
    }
    return viagensMaiores;
}

function exibirViagensMaiores() {
    // Obter o valor inserido pelo usuário
    var valorDeterminado = parseFloat(inValorEstipulado.value);

    // Chamar a função ValorDeterminado com o vetor vetKM e o valor inserido pelo usuário
    var viagensMaiores = ValorDeterminado(vetKM, valorDeterminado);

    // Limpar a saída antes de exibir novos resultados
    out.innerHTML = "";

    // Exibir informações das viagens maiores
    for (let ind = 0; ind < viagensMaiores.length; ind++) {
        var viagemIndex = viagensMaiores[ind];
        out.innerHTML += "Quilometragem: " + vetKM[viagemIndex] + " Km"
            + "<br>Placa: " + vetPlaca[viagemIndex]
            + "<br>Consumo: " + vetConsumo[viagemIndex] + " L<br><br>";
    }

}


