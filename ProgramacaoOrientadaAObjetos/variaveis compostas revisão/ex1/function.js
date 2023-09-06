//referenciando html
var inNumeros = document.getElementById("inNumeros");
var btAdcionar = document.getElementById("btAdcionar");
var btFinalizar = document.getElementById("btFinalizar");
var numeros = [];

//criando ação de chamada para os botoes
btAdcionar.addEventListener("click", adcionarNumero)
btFinalizar.addEventListener("click", finalizar)

function adcionarNumero() {
    var numero = inNumeros.value;
    // Verifique se o valor é um número válido
    if (numero == ""  || numero < 0 || numero > 100) {
        alert("numero invalido");
        // Limpa o campo de entrada
        inNumeros.value = "";

    } else if (numeros.includes(numero)) {
        alert("Este número já foi adicionado à lista.");
        inNumeros.value = "";
    }else {
        // Adicione o número ao vetor
        numeros.push(numero);
        // Limpe o campo de entrada
        inNumeros.value = "";

        atualizarListaNumeros();
        atualizarAlturaDiv();
        ajustarAlturaContainer();
    }
}
function atualizarListaNumeros() {
    var listaNumeros = document.getElementById("listaNumeros");
    listaNumeros.innerHTML = "";

    for (var i = 0; i < numeros.length; i++) {
        var listItem = document.createElement("li");
        listItem.textContent =  numeros[i] + ' foi adicionado.';
        listaNumeros.appendChild(listItem);
    }
}
function atualizarAlturaDiv() {
    var altura = numeros.length * 30; // Ajuste esse valor conforme necessário
    listaNumeros.style.height = altura + "px";
}
function ajustarAlturaContainer() {
    var alturaListaNumeros = listaNumeros.clientHeight;
    var alturaContainer = alturaListaNumeros + 60; // 60 é um valor de margem extra para acomodar outros elementos
    document.querySelector(".container").style.height = alturaContainer + "px";
}
function finalizar(){
//total de numeros cadastrados
//menor numero informado
//soma de todos os valores
//média dos valores
}

