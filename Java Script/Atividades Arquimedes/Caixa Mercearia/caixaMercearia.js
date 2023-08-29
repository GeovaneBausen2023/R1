// Referências para os elementos do documento HTML
const inValor = document.getElementById("inValor"); // Campo de entrada para o valor do item
const inQtd = document.getElementById("inQtd"); // Campo de entrada para a quantidade do item
const btSomar = document.getElementById("btSomar"); // Botão para adicionar o item à compra
const btZerar = document.getElementById("btZerar"); // Botão para zerar a compra
const outTotal = document.getElementById("outTotal"); // Local para exibir o total da compra
const outQtdItens = document.getElementById("outQtdItens"); // Local para exibir a quantidade de itens da compra

var totalizadora = 0.0; // Variável que armazena o valor total da compra
var qtdItens = 0; // Variável que armazena a quantidade total de itens da compra

btSomar.addEventListener("click", somarCompra); // Adiciona um evento de clique ao botão "Somar" para chamar a função somarCompra()

function somarCompra() {
    var valor = Number(inValor.value); // Obtém o valor do campo de entrada de valor como um número
    var qtd = Number(inQtd.value); // Obtém a quantidade do campo de entrada de quantidade como um número

    if (inValor.value == "" || valor <= 0) {
        alert("O campo Valor foi deixado vazio ou preenchido com valor inválido!");
        inValor.focus();
    } else if (inQtd.value == "" || qtd <= 0) {
        // Verifica se o campo de quantidade está vazio ou se a quantidade é inválida (menor ou igual a zero)
        alert("O campo Quantidade foi deixado vazio ou preenchido com valor inválido!"); 
        inQtd.focus(); 
    } else {
        // Executa os cálculos somente se não houver erros nos valores de entrada

        if (qtd + qtdItens > 20) {
            alert("Caixa Rápido (Limite de 20 itens) - Permitido apenas mais " + (20 - qtdItens) + " unidades!"); 
            btSomar.focus(); 
            inQtd.value = 20 - qtdItens;
        } else {
            totalizadora += valor * qtd; // Calcula o valor total da compra somando o valor do item multiplicado pela quantidade
            qtdItens += qtd; // Atualiza a quantidade total de itens da compra

            outTotal.textContent = "Total = R$" + totalizadora.toFixed(2); // Exibe o valor total da compra com duas casas decimais
            outQtdItens.textContent = "Quantidade Itens = " + qtdItens; // Exibe a quantidade total de itens da compra
        }
    }
}

btZerar.addEventListener("click", zerarCompra); // Adiciona um evento de clique ao botão "Zerar" para chamar a função zerarCompra()

function zerarCompra() {
    totalizadora = 0.0; // Zera o valor total da compra
    qtdItens = 0; // Zera a quantidade total de itens da compra
    inValor.value = ""; // Limpa o campo de valor
    inValor.focus(); // Coloca o foco de volta no campo de valor
    inQtd.value = ""; // Limpa o campo de quantidade
    outTotal.textContent = "Total = R$0,00"; // Exibe o valor total da compra como zero
    outQtdItens.textContent = "Quantidade Itens = 0"; // Exibe a quantidade total de itens da compra como zero
}