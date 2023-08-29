//switch case
// cria referência aos elementos da página
var inNome = document.getElementById("inNome");
var inNota1 = document.getElementById("inNota1");
var inNota2 = document.getElementById("inNota2");
var outSituacao = document.getElementById("outSituacao");
var outMedia = document.getElementById("outMedia");
var btResultado = document.getElementById("btResultado")

btResultado.addEventListener("click", calcularMedia);

function calcularMedia() {
  // obtém os conteúdos dos campos de edição da página
  var nome = inNome.value
  var nota1 = Number(inNota1.value);
  var nota2 = Number(inNota2.value);

  // calcula a média das notas
  var media = (nota1 + nota2) / 2;
  outMedia.textContent = "Média das Notas: " + media.toFixed(1);

  // cria a condição usando apenas uma variavel de verificação
  switch (media >= 7) {
    case true:
      outSituacao.textContent = "Parabéns " + nome + "! Você foi aprovado(a)";
      outSituacao.style.color = "blue";
      break;
    case false:
      outSituacao.textContent = "Ops " + nome + "... Você foi reprovado(a)";
      outSituacao.style.color = "red";
      break;
  }
  
}

