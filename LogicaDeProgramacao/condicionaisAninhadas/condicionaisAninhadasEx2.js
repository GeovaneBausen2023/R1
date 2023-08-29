/*condicionais aninhadas*/
var inIdade = window.document.getElementById("inIdade");
var btOK = window.document.getElementById("btOK");
var outMensagem = window.document.getElementById("outMensagem");
btOK.addEventListener("click", testar)

function testar() {
    var inIdaVoto = inIdade.value;
  
    if (inIdaVoto < 16) {
        outMensagem.innerHTML = (`Não vota!`);
    } else if (inIdaVoto < 18 || inIdaVoto > 65) {
        outMensagem.innerHTML = (`opcional`);
    } else {
        outMensagem.innerHTML = (`voto obrigatório`);
    }
}
/*observações very importantes:
não da pra usar a mesma variavel para duas saidas a não ser que vc some seus resultados +=
*/