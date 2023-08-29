const CaixaDeEntrada = document.getElementById("InCaixaDeEntrada");
const btMostrar = document.getElementById("btMostrar");
const btLimpar = document.getElementById("btLimpar");
const outImput = document.getElementById("outImput");

// Se for clicado em "Mostrar"
btMostrar.addEventListener("click", ExibirResultado);
function ExibirResultado() {
    if (CaixaDeEntrada.value !== "") {
        outImput.textContent = "Prazer em conhece-lo " + CaixaDeEntrada.value;
    } else {
        outImput.textContent = "Preencha os campos, por favor.";
    }
}

// Se for clicado em "Limpar"
btLimpar.addEventListener("click", LimparCaixa);
function LimparCaixa() {
    CaixaDeEntrada.value = "";
    outImput.textContent = "";
}
