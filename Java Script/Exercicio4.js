/*
4) Desenvolva uma aplicação para uma loja, a qual leia o preço
de um produto e informe as opções de pagamento da loja
(a vista ou parcelado em 3 vezes no cartão)
Calcule e informe ao usuario o valor do pagamento à vista com 10% de desconto
e o valor das parcelas para pagamento em 3  vezes no cartão.

Exemplo:
Preço do produto:R$60.00
Pagamento À vista :R$54.00
Pagamento no cartão em 3 parcelas de $20.00
*/

// Lê o preço do produto
let preco = parseFloat(prompt("Digite o preço do produto:"));

// Calcula o valor do pagamento à vista com desconto de 10%
let valorAVista = preco * 0.9;

// Calcula o valor de cada parcela para pagamento em 3 vezes no cartão
let valorParcela = preco / 3;

// Exibe os resultados para o usuário
alert(`Preço do produto: R$${preco.toFixed(2)}
Pagamento à vista: R$${valorAVista.toFixed(2)}
Pagamento no cartão em 3 parcelas de R$${valorParcela.toFixed(2)}`);

/*
Neste código, usei a função parseFloat para converter o preço do produto inserido pelo usuário de uma string para um número decimal. 
Em seguida,
fiz o calculo do pagamento à vista com desconto de 10% 
multiplicando o preço do produto por 0.9.

E também o valor de cada parcela para pagamento em 3 vezes no cartão
 dividindo o preço do produto por 3.
  Finalmente,
usamos a função toFixed para arredondar os resultados para 2 casas decimais e exibimos os resultados em uma janela de alerta.
Isso ocorre porque 100% do valor original menos 90% de desconto resultam em 10% do valor original, ou seja, 0.9. 
Então, ao multiplicar o preço original por 0.9, obtemos o valor com desconto de 10%.
*/