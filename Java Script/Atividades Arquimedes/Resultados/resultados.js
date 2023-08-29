const InAtividade1 = document.getElementById("InAtividade1");
const InAtividade2 = document.getElementById("InAtividade2");
const InAtividade3 = document.getElementById("InAtividade3");
const InFaltas = document.getElementById("InFaltas");
const btCalcular = document.getElementById("btCalcular");
const outResultado = document.getElementById("outResultado");
const CargaHoraria = 80;


function calcular() {
    let InAtividade1Valor = Number(InAtividade1.value);
    let InAtividade2Valor = Number(InAtividade2.value);
    let InAtividade3Valor = Number(InAtividade3.value);
    let InFaltasValor = Number(InFaltas.value);
    outResultado.textContent = "" // limpa sempre que chama a funçao

    // Validar entradas:  Campos referentes as notas valores de 0 a 100 && faltas 0 a 80. 

    if (InAtividade1Valor < 0 || InAtividade1Valor > 100 || InAtividade1.value === "") {
        outResultado.textContent = "Valores inválidos! Preencha com valores entre 0 e 100";
        InAtividade1.focus();
    } else if (InAtividade2Valor < 0 || InAtividade2Valor > 100 || InAtividade2.value === "") {
        outResultado.textContent = "Valores inválidos! Preencha com valores entre 0 e 100";
        InAtividade2.focus();
    } else if (InAtividade3Valor < 0 || InAtividade3Valor > 100 || InAtividade3.value === "") {
        outResultado.textContent = "Valores inválidos! Preencha com valores entre 0 e 100";
        InAtividade3.focus();
    } else if (InFaltas.value === "" || InFaltasValor < 0 || InFaltasValor > 80) {
        outResultado.textContent = "Valores inválidos! Preencha com valores entre 0 e 80";
        InFaltas.focus();
    } else {

        let percentualDeFaltas = ((100 * InFaltasValor) / CargaHoraria);
        let mediaNotas = ((InAtividade1Valor + InAtividade2Valor + InAtividade3Valor) / 3);
        let situacao;

        if (percentualDeFaltas >= 25) {
            situacao = `Reprovado por Falta!\n${percentualDeFaltas.toFixed(2)} % de faltas`;
        } else if (mediaNotas < 60) {
            situacao = `Reprovado por Nota!\nMédia de notas: ${mediaNotas.toFixed(2)}`;
        } else {
            situacao = `Aprovado!\nMédia de notas: ${mediaNotas.toFixed(2)}`;
        }
        outResultado.textContent = situacao;
    }
}
btCalcular.addEventListener("click", calcular);





