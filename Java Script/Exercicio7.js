
/* 6
   Deselvolva uma aplicação que leia a quantidade de trabalhadores 
   por faixa etária em uma instituição, usando esses dados, calcule
   e mostre para o suaário o percentual de trabalhadores
   de cada faixa etaria naquela instituição.

    Inicialmente, prepare um documento em html, que possua
    tres canpos de text (<imput type="texto>"). Os campos 
    de entrada devem estar em caa linha, acolhidos os  seguintes 
    textos descritivos:

    Quantidade de trabalhadores Jovens:
    quantidades de trabalhadores adultos:
    quantidade de trabalhadores idosos:

    No código JavaScript, você deve criar variavéis que referenciam 
    os campos de entrada, e o botão. Sendo que quando o usuarío 
    clicar no botão "calcular %", a aplicação deve ler os valores 
    que o usuário informou nos campos de entrada, a fim de calcular 
     os percentuais dos trabalhadores em cada faixa etária. Por fim 
     a aplicação deve mostrar os percentuais em janelas usando Alert.
     */


/* define três variáveis, "jovens", "adultos" e"idosos", e as inicializa com os
 valores inseridos pelo usuário nos campos de entrada correspondentes.
  Esses valores são obtidos por meio do método "getElementById" do objeto "document" e
 convertidos para números inteiros por meio da função "parseInt".*/
 alert('Iniciou a execução do JS');

 var jovens = parseInt(document.getElementById("jovens").value);
 var adultos = parseInt(document.getElementById("adultos").value);
 var idosos = parseInt(document.getElementById("idosos").value);
 
 var btCalcular = document.getElementById("btCalcular")
 var outResultado = document.getElementById("outResultado")
 
 btCalcular.addEventListener("click", calcularPercentual)
 
 function calcularPercentual() {
   var total = jovens + adultos + idosos;
   var percJovens = (jovens / total) * 100;
   var percAdultos = (adultos / total) * 100;
   var percIdosos = (idosos / total) * 100;
 
   outResultado.textContent = "Percentual de trabalhadores jovens: " + percJovens.toFixed(2) + "%\n" +
                               "Percentual de trabalhadores adultos: " + percAdultos.toFixed(2) + "%\n" +
                               "Percentual de trabalhadores idosos: " + percIdosos.toFixed(2) + "%";
 }
 
 




