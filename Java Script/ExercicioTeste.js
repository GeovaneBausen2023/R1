
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


function calcularPercentual() {
    var InQtdJovens = parseInt(document.getElementById("InQtdJovens").value);
    /* document e uma palavra reservada do metodo get, value recebe o valor do formulario*/
    var InQtdAdultos = parseInt(document.getElementById("InQtdAdultos").value);
    var InQtdIdosos = parseInt(document.getElementById("InQtdIdosos").value);
    
    var total = jovens + adultos + idosos;
   /* A variável "total" é então calculada somando os valores de "jovens", 
    "adultos" e "idosos", e representa o número total de trabalhadores informados
     pelo usuário.*/
    var percJovens = (InQtdJovens / total) * 100;
    var percAdultos = (InQtdAdultos / total) * 100;
    var percIdosos = (InQtdIdosos / total) * 100;
    
    alert("Quantidade de trabalhadores jovens: " + percJovens.toFixed(2) + "%\n" +
          "Quantidade de trabalhadores adultos: " + percAdultos.toFixed(2) + "%\n" +
          "Quantidade de trabalhadores idosos: " + percIdosos.toFixed(2) + "%");
  }
  /* Por fim, o código exibe uma mensagem de alerta na tela com os percentuais
   calculados para cada faixa etária, usando o método
   "toFixed" para arredondar os valores para duas casas decimais.
*/
