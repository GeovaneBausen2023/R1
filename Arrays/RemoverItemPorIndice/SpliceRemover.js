var vegetais = ["Repolho", "Nabo", "Rabanete", "Cenoura"];
console.log(vegetais);
// ['Repolho', 'Nabo', 'Rabanete', 'Cenoura']

var ApartirDaposicao = 0,
  numeroDeItensAremover = 2;

var itensRemovidos = vegetais.splice(ApartirDaposicao, numeroDeItensAremover);
// Isso é como se faz para remover itens, n define o número de itens a se remover,
// a partir da posição (pos) em direção ao fim da array.

console.log(vegetais);
// ['Repolho', 'Cenoura'] (o array original é alterado)

console.log(itensRemovidos);
// ['Nabo', 'Rabanete']

