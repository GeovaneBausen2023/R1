// Obtém o nome da página atual
var currentPage = window.location.pathname.split('/').pop();

// Obtém o elemento do menu ativo com base na página atual
var menuActive = document.getElementById('menu-' + currentPage);

// Adiciona a classe "active" ao item do menu ativo
if (menuActive) {
  menuActive.classList.add('active');
}