
/* 6
    Desenvolva uma aplicação que auxilie uma familia a fazer o controle 
    finaceiro de seus gastos agrupados por categorias
    inicialmente, voce deve fazer um levantamento com seus familiares.
    (ou com uma familia que vc tenha proximidade) das dispesas comuns 
    da casa, organizando em 3 grupos:

    essenciais: Aluguel, luz, agua, alimentação, internet, passagem 
    dentista.
    Finaceiras: divida no cartão, divida da moto
    Estilo de vida:  Lazer

A aplicação desenvolvida por voce deve apresentar a 
renda mensal nescessária para aquela familia arcar 
com seus gastos
tambem deve apresentar apresentar percentuais de cada 
grupo de gastos da familia, em relação ao total de ganhos informados

     */
// solicita os gastos essenciais
let aluguel = parseFloat(prompt("Digite o valor do aluguel:"));
let luz = parseFloat(prompt("Digite o valor da conta de luz:"));
let agua = parseFloat(prompt("Digite o valor da conta de água:"));
let alimentacao = parseFloat(prompt("Digite o valor das despesas com alimentação:"));
let internet = parseFloat(prompt("Digite o valor da conta de internet:"));
let passagem = parseFloat(prompt("Digite o valor das despesas com passagem:"));
let pensao = parseFloat(prompt("Digite o valor das despesas com pensão:"));
let dentista = parseFloat(prompt("Digite o valor das despesas com dentista:"));

// solicita os gastos financeiros
let dividaCartao = parseFloat(prompt("Digite o valor da dívida no cartão:"));
let dividaMoto = parseFloat(prompt("Digite o valor da dívida da moto:"));

// solicita os gastos com estilo de vida
let lazer = parseFloat(prompt("Digite o valor das despesas com lazer:"));

// calcula o total de gastos e percentuais por categoria
let totalGastos = aluguel + luz + agua + alimentacao + internet + passagem + pensao + dentista + dividaCartao + dividaMoto + lazer;
let percentualEssenciais = (aluguel + luz + agua + alimentacao + internet + passagem + pensao + dentista) / totalGastos * 100;
let percentualFinanceiras = (dividaCartao + dividaMoto) / totalGastos * 100;
let percentualEstiloVida = lazer / totalGastos * 100;

// calcula a renda mensal necessária para arcar com os gastos
let rendaNecessaria = totalGastos;

// exibe os resultados ao usuário
alert("Total de gastos: R$ " + totalGastos.toFixed(2) +
"\nPercentual de gastos essenciais: " + percentualEssenciais.toFixed(2) + "%" +
"\nPercentual de gastos financeiros: " + percentualFinanceiras.toFixed(2) + "%" +
"\nPercentual de gastos com estilo de vida: " + percentualEstiloVida.toFixed(2) + "%" +
"\nRenda mensal necessária: R$ " + rendaNecessaria.toFixed(2));


/*otimizado em 10 linhas

let gastosEssenciais = ["aluguel", "luz", "água", "alimentação", "internet", "passagem", "pensão dentista"];
let gastosFinanceiros = ["dívida no cartão", "dívida da moto"];
let gastosEstiloVida = ["lazer"];
let totalGastos = gastosEssenciais.reduce((total, gasto) => total + parseFloat
(prompt(`Digite o valor de ${gasto}:`)), 0) + gastosFinanceiros.reduce((total, gasto) => total + parseFloat(prompt(`Digite o valor da ${gasto}:`)), 0)
 + gastosEstiloVida.reduce((total, gasto) => total + parseFloat(prompt(`Digite o valor das despesas com ${gasto}:`)), 0);
let percentualEssenciais = gastosEssenciais.reduce((total, gasto) => total + parseFloat(prompt(`Digite o valor de ${gasto}:`)), 0) / totalGastos * 100;
let percentualFinanceiros = gastosFinanceiros.reduce((total, gasto) => total + parseFloat(prompt(`Digite o valor da ${gasto}:`)), 0) / totalGastos * 100;
let percentualEstiloVida = gastosEstiloVida.reduce((total, gasto) => total + parseFloat(prompt(`Digite o valor das despesas com ${gasto}:`)), 0) / totalGastos * 100;
let rendaNecessaria = totalGastos;
alert(`Total de gastos: R$ ${totalGastos.toFixed(2)}\nPercentual de gastos essenciais: ${percentualEssenciais.toFixed(2)}%\nPercentual de gastos financeiros:
 ${percentualFinanceiros.toFixed(2)}%\nPercentual de gastos com estilo de vida: ${percentualEstiloVida.toFixed(2)}%\nRenda mensal necessária:
  R$ ${rendaNecessaria.toFixed(2)}`);
                                */