var btClick = document.getElementById("btClick");
var out = document.getElementById("out");

btClick.addEventListener("click", ValorDeterminado);

function ValorDeterminado() {
    var valorD = parseFloat(document.getElementById("valorD").value);
    var viagensMaiores = [];

    for (let ind = 0; ind < vetKM.length; ind++) {
        if (vetKM[ind] > valorD) {
            viagensMaiores.push(ind);
        }
    }

    // Exibe as informações das viagens com distâncias maiores que o valor determinado
    for (let i = 0; i < viagensMaiores.length; i++) {
        let indViagem = viagensMaiores[i];
        out.innerHTML += "Maior distancia percorrida:"
            + "<br>Placa: " + vetPlaca[indViagem]
            + "<br>Quilometragem: " + vetKM[indViagem] + " Km"
            + "<br>Consumo: " + vetConsumo[indViagem] + " L<br><br>";
    }
}
