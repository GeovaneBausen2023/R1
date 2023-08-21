// Função para ordenar viagens com base na quilometragem
function ordenarViagens(vetorPlaca, vetorKM, vetorConsumo) {
    const totalViagens = vetorKM.length;

    for (let i = 0; i < totalViagens - 1; i++) {
        let indiceMenor = i;

        for (let j = i + 1; j < totalViagens; j++) {
            if (vetorKM[j] < vetorKM[indiceMenor]) {
                indiceMenor = j;
            }
        }

        // Trocar valores nos arrays usando destructuring assignment
        [vetorKM[i], vetorKM[indiceMenor]] = [vetorKM[indiceMenor], vetorKM[i]];
        [vetorPlaca[i], vetorPlaca[indiceMenor]] = [vetorPlaca[indiceMenor], vetorPlaca[i]];
        [vetorConsumo[i], vetorConsumo[indiceMenor]] = [vetorConsumo[indiceMenor], vetorConsumo[i]];
    }
}
// Chamar a função de ordenação
ordenarViagens(vetPlaca, vetKM, vetConsumo);

// Mostrar informações das viagens
let viagensInfo = "";

for (let i = 0; i < vetKM.length; i++) {
    viagensInfo +=
        `Viagem ${i + 1}:\n` +
        `Placa: ${vetPlaca[i]}\n` +
        `Quilometragem: ${vetKM[i]} Km\n` +
        `Consumo: ${vetConsumo[i]} L\n` +
        "-------------------------\n";
}

alert(viagensInfo);
