// menu.js
function loadMenu() {
    // Obtém o nome do arquivo atual (ex.: 'index.html', 'inner-page-datalakeaws.html')
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    // Gera o HTML do menu com a classe 'active' aplicada condicionalmente
    const navbar = document.getElementById('navbar');
    navbar.innerHTML = `
        <ul>
            <li><a href="index.html#hero" class="nav-link scrollto ${currentPage === 'index.html' ? 'active' : ''}"><i class="bx bx-home"></i> <span>Início</span></a></li>
            <li><a href="index.html#about" class="nav-link scrollto ${currentPage === 'index.html' ? 'active' : ''}"><i class="bx bx-user"></i> <span>Sobre</span></a></li>
            <li><a href="index.html#resume" class="nav-link scrollto ${currentPage === 'index.html' ? 'active' : ''}"><i class="bx bx-file-blank"></i> <span>Currículo</span></a></li>
            <li class="dropdown"><a href="index.html#portfolio" ${currentPage === 'index.html' ? 'active' : ''}><i class="bx bx-book-open navicon"></i> <span>Portfólio</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
                <ul>
                    <li><a href="inner-page-datalakeaws-varejo.html" ${currentPage === 'inner-page-datalakeaws-varejo.html' ? 'class="active"' : ''}>Data Lake Varejo</a></li>
                    <li><a href="inner-page-datalakeaws.html" ${currentPage === 'inner-page-datalakeaws.html' ? 'class="active"' : ''}>Data Lake Acidentes</a></li>
                    <li><a href="inner-page-dashboardscrum.html" ${currentPage === 'inner-page-dashboardscrum.html' ? 'class="active"' : ''}>Dashboard Scrum</a></li>
                    <li><a href="inner-page-pyspark.html" ${currentPage === 'inner-page-pyspark.html' ? 'class="active"' : ''}>PySpark</a></li>
                </ul>
            </li>
            <li><a href="index.html#services" class="nav-link scrollto ${currentPage === 'index.html' ? 'active' : ''}"><i class="bx bx-search-alt"></i> <span>Serviços</span></a></li>
            <li><a href="index.html#contact" class="nav-link scrollto ${currentPage === 'index.html' ? 'active' : ''}"><i class="bx bx-envelope"></i> <span>Contato</span></a></li>
        </ul>
    `;

    // Reaplica os eventos do dropdown do iPortfolio
    document.querySelectorAll('.nav-menu .toggle-dropdown').forEach(navmenu => {
        navmenu.addEventListener('click', function(e) {
          e.preventDefault();
          this.parentNode.classList.toggle('active');
          this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
          e.stopImmediatePropagation();
        });
      });
}


// Executa a função quando a página carrega
document.addEventListener('DOMContentLoaded', loadMenu);