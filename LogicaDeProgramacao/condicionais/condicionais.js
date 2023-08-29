/*condicionais simples*/
var inVelocidade = window.document.getElementById("inVelocidade");
var btOK = window.document.getElementById("btOK");
var outMensagem = window.document.getElementById("outMensagem");

btOK.addEventListener("click", testar)

function testar() {
    var inEntradaVelocidade = inVelocidade.value;
    if (inEntradaVelocidade > 60) {
        outMensagem.innerHTML = "vc esta acima do limite arrombado";
    }
    else {
        outMensagem.innerHTML = "vc esta ok";
    }
}
/*observações very importantes:
-A varivel usada na função não pode ter o mesmo nome da entrada.
-Se vc utilizar um imput type number não tem nescessidade
 de converter para number.
-A variavel de saida não precisa ser declarada na função.
-lembre-se de linkar a porra do JS
-O chat gpt e apenas um gerador de texto burro que erra um if simples e traz soluções nada ver a maior parte do 
tempo, aprenda usa-lo com sabedoria.
-Estude com paciência
*/