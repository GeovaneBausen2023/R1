let inNome = document.getElementById('inNome');
let inTipo = document.getElementById("inTipo");
let inCores = document.getElementById("inCores");
let inValorReferencia = document.getElementById("inValorReferencia");
let outResultado = document.getElementById("outResultado");
let btCalcular = document.getElementById("btCalcular");

btCalcular.addEventListener("click", calcular);

function calcular() {
    let tipoP = inTipo.value;
    let cor = inCores.value;
    let valorRf = parseFloat(inValorReferencia.value);
    let valorAPagar;
    let nome = inNome.value;
    let acrescimo=0;
    
    if (inNome.value == "" ) {
        alert("O campo 'nome' foi deixado vazio!");
        inNome.focus();
        outResultado.textContent = "";
        
    }else if (inValorReferencia.value <= 0) {
        alert("O campo 'Valor de Referência' deve ser um número positivo válido maior que 0!");
        inValorReferencia.focus();
        outResultado.textContent = "";
    }else{
    
    switch (cor) {
        case "branca":
            if (tipoP == "metalizada") {
                valorAPagar = valorRf * 1.10;
            } else {
                valorAPagar = valorRf;
            }
            break;
                
        case "preta":
            if (tipoP == "metalizada") {
                valorAPagar = valorRf * 1.10;
            } else {
                valorAPagar = valorRf * 1.03;
            }
            break;
            
        case "vermelha":
            if (tipoP == "metalizada") {
                valorAPagar = valorRf * 1.10;
            } else {
                valorAPagar = valorRf * 1.05;
            }
            break;
            
        case "cinza":
            valorAPagar = valorRf * 1.10;
            break;
        case "grafite":
            valorAPagar = valorRf * 1.10;
            break;
    }
    acrescimo= valorAPagar -valorRf;
}
    outResultado.textContent ="Prezad@: " +nome+ ", o  valor de seu carro é $" +valorRf.toFixed(2)+" e terá um acréscimo de $"+acrescimo.toFixed(2)+  " devido a cor " +cor.toUpperCase()+" do tipo " +tipoP.toUpperCase()+" e o preço final:$" +valorAPagar.toFixed(2);
}
