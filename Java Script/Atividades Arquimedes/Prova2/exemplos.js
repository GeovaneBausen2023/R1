var inValorProduto = document.getElementById("numero");

btRegistrar.addEventListener("click", calcular);

    function calcularSoma() {
      let numero = document.getElementById('numero').value;
      let soma = 0;
      let contador = 1;

      while (contador <= numero) {
        soma += contador;
        contador++;
      }

      document.getElementById('resultado').textContent = "A soma dos números de 1 a " + numero + " é: " + soma;
    }