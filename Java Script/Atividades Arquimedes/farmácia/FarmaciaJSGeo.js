//Criando Variáveis de Referência para Campos do Html
var inMedicamento = document.getElementById("inMedicamento");
var inPreco = document.getElementById("inPreco");
//
var btPromocao = document.getElementById("btPromocao");
var outResultado = document.getElementById("outResultado");
// Adicionando um listener no botão btPromocao para executar a função calcular
btPromocao.addEventListener("click", calcular);
//
// A função calcular é definida, recebendo como entrada os valores dos campos nomeMedicamento e preco
function calcular (){
    var nomeMedicamento = inMedicamento.value;
    var preco = inPreco.value;
    var valorDesconto = Math.floor(preco) * 2;// O valor do desconto é calculado pela multiplicação do preço por 2, arredondado para baixo

 // verificação de informações  
    if (!isNaN(nomeMedicamento)) {
    alert("O campo Nome deve conter apenas letras e espaços em branco!");
    inMedicamento.focus();
        }
   if (nomeMedicamento == "") {
    alert("O campo Nome não pode estar vazio!!")
    inMedicamento.focus();
    return;
        }
    if (preco == "") {
    alert("O campo Preço não pode estar vazio!!")
    inPreco.focus();
    return;
       }
    if (preco<=0) {
    alert("!!")
    inPreco.focus();
    return;
       }
    else{
        // O resultado é exibido no elemento outResultado
    outResultado.textContent = "Medicamento: " + nomeMedicamento + "\n" + "Promoção de 2 produtos: R$" + valorDesconto.toFixed(2) ;
    }
     }
     


