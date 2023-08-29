const inEntrada = document.getElementById("inEntrada");
const btRegistrar = document.getElementById("btRegistrar");
const outTotal = document.getElementById("outTotal");

btRegistrar.addEventListener("click", registrar)

function registrar() {
    const valor = inEntrada.value;
    outTotal.textContent = ("!" + valor);
  }


