document.querySelector(".menu-btn").addEventListener("click", () => {
  document.querySelector(".nav-menu").classList.toggle("show");
});

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-cards', { delay: 500 });
ScrollReveal().reveal('.cards-banner-one', { delay: 500 });
ScrollReveal().reveal('.cards-banner-two', { delay: 500 });

// Función para cargar y agregar el contenido HTML desde un archivo a un elemento del DOM
function loadHTMLContent(file, elementId) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            document.getElementById(elementId).innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", 'partials/' + file, true); // Agrega 'partials/' a la ruta del archivo
    xhttp.send();
}

// Cargar el encabezado, la barra de navegación y el pie de página desde "partials"
loadHTMLContent('header.html', 'header-container');
loadHTMLContent('nav.html', 'nav-container');
loadHTMLContent('footer.html', 'footer-container');

// Cargar el contenido de news-cards.html desde "partials"
loadHTMLContent('news-cards.html', 'news-cards-container');
// Cargar el contenido de cards-banner-one.html desde "partials"
loadHTMLContent('cards-banner-one.html', 'cards-banner-one-container');

// Cargar el contenido de footer.html desde "partials"
loadHTMLContent('footer.html', 'footer-container');
