/*var numero;
 numero = Number(prompt("Informe um numero:"));
 
alert("Antecessor: " + (numero-1) + " sucesor: " + (numero+1)+ " anos!" );


Implemente um programa para uma pizzaria, o qual leia o valor total 
de uma conta e quantos clientes vão pagá-la. Calcule e informe o valor a ser pago por cada cliente.

Exemplo:

Valor da Conta R$: 90,00

Número de Clientes: 3

Valor por cliente R$: 30.00--->*/

var totalDaConta;
var NumeroDeClinetes;
var valorPorCliente;

total = Number(prompt("Informe o valor da conta:"));
NumeroDeClinetes = Number(prompt("Informe o numero de clientes:"));
alert("Total: " + total + " ,conta individual por cliente: " + total/NumeroDeClinetes);


