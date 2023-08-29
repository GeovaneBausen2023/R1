var matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

// Criação da tabela
var table = document.createElement("table");
table.id = "data-table";

for (var i = 0; i < matrix.length; i++) {
  var row = document.createElement("tr");

  for (var j = 0; j < matrix[i].length; j++) {
    var cell = document.createElement("td");
    cell.textContent = matrix[i][j];
    row.appendChild(cell);
  }

  table.appendChild(row);
}

// Adicionar a tabela ao corpo da página
document.getElementById("data-table").appendChild(table);

// Exibição do código JavaScript
var jsCode = `
var matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9] 
];

// Criação da tabela
var table = document.createElement("table");
table.id = "data-table";

for (var i = 0; i < matrix.length; i++) {
  var row = document.createElement("tr");

  for (var j = 0; j < matrix[i].length; j++) {
    var cell = document.createElement("td");
    cell.textContent = matrix[i][j];
    row.appendChild(cell);
  }

  table.appendChild(row);
}

// Adicionar a tabela ao corpo da página
document.getElementById("data-table").appendChild(table);
`;

document.getElementById("code-display").textContent = jsCode;