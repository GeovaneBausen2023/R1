//Criando Variáveis de Referência para Campos do Html
var inPrecoPor15min = document.getElementById("inPrecoPor15min");
var inTempoDeUso = document.getElementById("inTempoDeUso");
var btCalcular = document.getElementById("btCalcular");
var outResultado = document.getElementById("outResultado");

// btCalcular para executar a função calcular
btCalcular.addEventListener("click", calcular);

function calcular() {
    var precoPor15min = inPrecoPor15min.value;
    var tempoDeUso = inTempoDeUso.value;
  
    // Verifica se os valores são válidos
    if (isNaN(precoPor15min) || isNaN(tempoDeUso) || precoPor15min <= 0 || tempoDeUso <= 0) {
      alert("Por favor, preencha os campos com valores válidos (maiores que zero).");
    } else {
      // Calcula o valor total
      var valorTotal = precoPor15min * Math.ceil(tempoDeUso / 15);
                                        //retorna um numero inteiro
      // Exibe o valor total no campo de resultado
      outResultado.textContent = "Valor total a ser pago: $" + valorTotal.toFixed(2);
    }
  }
  



  
     


