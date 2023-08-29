// Referências para os elementos do documento HTML
const inValor = document.getElementById("inputValor");
const inputProduto = document.getElementById("inputProduto")
const inFormaPgt = document.getElementById("selectFormaPagamento");
const btRegistrar = document.getElementById("btRegistrar");
const outTotal = document.getElementById("outTotal");
let valorTotal, primeiraParcela, valor30Dias, valor60Dias;

btRegistrar.addEventListener("click", registrar); // Adiciona um evento de clique ao botão "Registrar" para chamar a função registrar()

function registrar() {
    const valor = Number(inValor.value);
    const formaPagamento = Number(inFormaPgt.value);
    const Produto = (inputProduto.value);
    
    if (inValor.value == "" || valor <= 0) {
        alert("O campo Valor foi deixado vazio ou preenchido com valor inválido!");
        inValor.focus();
        // Verifica se o campo de valor está vazio ou se o valor é inválido (menor ou igual a zero) e adciona o cursor na janela imput 

    } else if (formaPagamento < 1 || formaPagamento > 3) {
        alert("Por favor, selecione uma forma de pagamento válida.");
        inFormaPgt.focus();
        // seleciona a forma de pagamento
    } else {
        if (formaPagamento == 1) {
            valorTotal = valor.toFixed(2);
            outTotal.textContent = "Produto: " + Produto + ", total a receber: R$ " + valorTotal;

        } else if (formaPagamento == 2) {
            const metade = valor / 2;
            valor30Dias = (valor / 2).toFixed(2);
            outTotal.textContent = "Produto: " + Produto + ", valor da primeira parcela: R$ " + metade + ", total a receber daqui 30 dias: R$" + valor30Dias;

        } else if (formaPagamento == 3) {
            const terco = valor / 3;
            valor30Dias = (valor / 3).toFixed(2);
            valor60Dias = (valor / 3).toFixed(2);
            outTotal.textContent = "Produto: " + Produto + "     Entrada:R$ " + terco.toFixed(2) + ", a receber em 30 dias: R$ " + valor30Dias +
                ", 60 dias: R$ " + valor60Dias;
        }
    }
}

