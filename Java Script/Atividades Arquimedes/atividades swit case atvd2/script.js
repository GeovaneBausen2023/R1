// cria referência aos elementos da página
var inValor1 = document.getElementById("inValor1");
var inValor2 = document.getElementById("inValor2");

var outResultado = document.getElementById("outResultado");
var btCalcMaior = document.getElementById("btCalcMaior");

btCalcMaior.addEventListener("click", calcularMaiorResultado);

function calcularMaiorResultado() {
  // obtém os conteúdos dos campos de edição da página
  var valor1 = Number(inValor1.value);
  var valor2 = Number(inValor2.value);

  // cria a condição
  switch (true) {
    
    case valor1 == "" && valor2 == "":
      outResultado.textContent = "Valor Incorreto, digite novamente!!";
      outResultado.style.color = "blue";
      inValor1.focus();
      break;
      case valor2 == valor1:
      outResultado.textContent = "valores iguais";
      outResultado.style.color = "red";
      inValor1.focus();
      break;
    case valor1 > valor2:
      outResultado.textContent = "maior: " + valor1;
      outResultado.style.color = "blue";
      break;
    case valor2 > valor1:
      outResultado.textContent = "maior: " + valor2;
      outResultado.style.color = "red";
      break;
   
  }
}
