console.log("ex1")
var listaDeTarefas = ["Comprar leite", "Fazer exercícios", "Ler um livro"];

function exibirTarefasNaConsole(tarefas) {
    tarefas.forEach(function (tarefa, indice) {
        console.log("Tarefa " + (indice + 1) + ": " + tarefa);
    });
}
exibirTarefasNaConsole(listaDeTarefas);
//
//ex2
console.log("ex2")
var numeros = [10, 20, 30, 40, 50];

function calcularMedia(numeros) {
    var soma = 0;

    numeros.forEach(function (numero) {
        soma += numero;
    });

    var media = soma / numeros.length;
    return media;
}

var mediaCalculada = calcularMedia(numeros);
console.log("A média dos números é: " + mediaCalculada);
