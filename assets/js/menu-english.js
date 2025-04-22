// menu.js
function loadMenu() {
    // Obtém o nome do arquivo atual (ex.: 'index.html', 'inner-page-datalakeaws.html')
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    // Gera o HTML do menu com a classe 'active' aplicada condicionalmente
    const navbar = document.getElementById('navbar');
    navbar.innerHTML = `
        <ul>
            <li><a href="#hero" class="nav-link scrollto ${currentPage === 'english-index.html' ? 'active' : ''}"><i class="bx bx-home"></i> <span>Home</span></a></li>
            <li><a href="#about" class="nav-link scrollto ${currentPage === 'english-index.html' ? 'active' : ''}"><i class="bx bx-user"></i> <span>About</span></a></li>
            <li><a href="#resume" class="nav-link scrollto ${currentPage === 'english-index.html' ? 'active' : ''}"><i class="bx bx-file-blank"></i> <span>Resume</span></a></li>
            <li class="dropdown"><a href="#portfolio"><i class="bx bx-book-open navicon"></i> <span>Portfolio</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
                <ul>
                    <li><a href="inner-page-datalakeaws-varejo-english.html" ${currentPage === 'inner-page-datalakeaws-varejo-english.html' ? 'class="active"' : ''}>Data Lake Retail</a></li>
                    <li><a href="inner-page-datalakeaws-english.html" ${currentPage === 'inner-page-datalakeaws.html' ? 'class="active"' : ''}>Data Lake Accidents</a></li>
                    <li><a href="inner-page-dashboardscrum-english.html" ${currentPage === 'inner-page-dashboardscrum.html' ? 'class="active"' : ''}>Dashboard Scrum</a></li>
                    <li><a href="inner-page-pyspark-english.html" ${currentPage === 'inner-page-pyspark.html' ? 'class="active"' : ''}>PySpark</a></li>
                </ul>
            </li>
            <li><a href="#services" class="nav-link scrollto ${currentPage === 'english-index.html' ? 'active' : ''}"><i class="bx bx-search-alt"></i> <span>Services</span></a></li>
            <li><a href="#contact" class="nav-link scrollto ${currentPage === 'english-index.html' ? 'active' : ''}"><i class="bx bx-envelope"></i> <span>Contact</span></a></li>
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