//resultado de tres atividades avaliativas
//Criando Variáveis de Referência para Campos do Html 
const InAtividade1 = document.getElementById("InAtividade1");
const InAtividade2 = document.getElementById("InAtividade2");
const InAtividade3 = document.getElementById("InAtividade3");
const InFaltas = document.getElementById("InFaltas");
//variaveis para calcular
let PercentualNotas;
const CargaHoraria = 80;
//
var btCalcular = document.getElementById("btCalcular");//imputBotão
var outResultado = document.getElementById("outResultado");//botão e saida de dados

// Adicionando um listener no botão btCalcular para executar a função calcular
btCalcular.addEventListener("click", calcular);
//
// A função calcular é definida, recebendo como entrada os valores das notas de 0 a 100
function calcular() {
    let InAtividade1Valor = Number(InAtividade1.value);
    let InAtividade2Valor = Number(InAtividade2.value);
    let InAtividade3Valor = Number(InAtividade3.value);
    let InFaltasValor = Number(InFaltas.value);
    /*Validar entradas:
    Campo "notas"  valores de 0 a 100, faltas 0 a 80
    */
    // Código a ser executado se a condição1 for verdadeira        
    if (InAtividade1.value =="" || InAtividade1Valor < 0 || InAtividade1Valor > 100) {
        alert("Valores inválidos! Preencha com valores entre 0 e 100");
        InAtividade1.focus();
        //Código a ser executado se a condição1 for falsa e a condição 2 ser verdadeira
    } else if (InAtividade2.value =="" || InAtividade2Valor < 0 || InAtividade2Valor > 100) {
        alert("Valores inválidos! Preencha com valores entre 0 e 100");
        InAtividade2.focus();
        //Código a ser executado se a condição1 e a condição2 forem falsas e a condição3 for verdadeira
    } else if (InAtividade3.value =="" || InAtividade3Valor < 0 || InAtividade3Valor > 100) {
        alert("Valores inválidos! Preencha com valores entre 0 e 100");
        InAtividade3.focus();
        //Código a ser executado se a 1,2,3 forem falsas e a condição4 for verdadeira
    } else if (InFaltas.value =="" || InFaltasValor < 0 || InFaltasValor > 80) {
        alert("Valores inválidos! Preencha com valores entre 0 e 80");
        InFaltas.focus();

        //calcular a média final do estudante, usando as três notas;
        // a média final do estudante será a média aritmética das três notas.
        // Código a ser executado se todas as condições anteriores forem falsas

    } else {
        let percentualDeFaltas = parseFloat(100 * InFaltasValor / CargaHoraria);
        let mediaNotas = parseFloat((InAtividade1Valor + InAtividade2Valor + InAtividade3Valor) / 3);
        let situacao; // variável situacao
        if (mediaNotas == 0) {
            situacao = "Reprovado por Nota\n" + "Média de notas: " + mediaNotas.toFixed(2);
        }
        else if (percentualDeFaltas >= 25) {//
            situacao = "Reprovado por Falta:\n" + percentualDeFaltas.toFixed(2) + "% de faltas";

        } else if (mediaNotas < 60) {// //Se a média das faltas for menor a 60,
            // a variável situacao recebe a mensagem "Reprovado por Nota" 

            situacao = "Reprovado por Nota\n" + "Média de notas: " + mediaNotas.toFixed(2);
        } else {
            situacao = "Aprovado: " + "Média de notas: " + mediaNotas.toFixed(2);

        }
        outResultado.textContent = situacao;
    }
}





