//switch case
// cria referência aos elementos da página
var inCategoria = document.getElementById("inCategoria");
var inSalarioAtual = document.getElementById("inSalarioAtual");

var outResultado = document.getElementById("outResultado");
var btResultado = document.getElementById("btResultado")

btResultado.addEventListener("click", calcularFaixaSalarial);

function calcularFaixaSalarial() {
 
  var categoria = inCategoria.value.toLowerCase();
  var salarioAtual = Number(inSalarioAtual.value);
  // cria a condição
  
  if (inCategoria.value == "" ) {
    outResultado.textContent = "Categoria incorreta, digite novamente!";
    outResultado.style.color = "blue";
    inCategoria.focus();
  }else if (inSalarioAtual.value == "" ) {
    outResultado.textContent = "Salário atual incorreto, digite novamente!";
    outResultado.style.color = "red";
    inSalarioAtual.focus();
  }
  
  var salarioFinal= 0;

    switch (categoria) {
     
    case "Auxiliar":
      salarioFinal = salarioAtual + (salarioAtual * 0.02)
      outResultado.textContent = "Auxiliar bunus de 2% $" +salarioFinal.toFixed(2) ;
      outResultado.style.color = "green";
      break;
      case "Secretário":
        salarioFinal = salarioAtual + (salarioAtual * 0.05)
      outResultado.textContent = "Secretário bunus de 5% $" +salarioFinal.toFixed(2) ;
      outResultado.style.color = "purple";
      break;
      case "Vendedor":
        salarioFinal = salarioAtual + (salarioAtual * 0.07)
      outResultado.textContent = "Vendedor bunus de 7% $" +salarioFinal.toFixed(2) ;
      outResultado.style.color = "green";
      break;
      case  "Gerente":
        salarioFinal = salarioAtual + (salarioAtual * 0.10)
      outResultado.textContent = "erente bunus de 10%  $"+salarioFinal.toFixed(2) ;
      outResultado.style.color = "black";
      break;

      default:
      outResultado.textContent = "Categoria inválida!";
      outResultado.style.color = "red";
      return;
    }
    
  }
