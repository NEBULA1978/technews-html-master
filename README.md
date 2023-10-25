# Tech News HTML
![](./screenshot.png)

# Recomendations
* Minimize the size of Images
* put a favicon

# Resources
* [Pexels.com](https://www.pexels.com/)
* [HeroPatterns.com](https://www.heropatterns.com/). Death Start is choosen in this project

* HTML y JavaScript proporcionado:

Código HTML:

    <!DOCTYPE html>: Declaración del tipo de documento HTML.

    <html lang="en">: Comienza el documento HTML y establece el idioma en inglés.

    <head>: Contiene metadatos y enlaces a recursos como fuentes y hojas de estilos.

    <meta charset="UTF-8">: Especifica el conjunto de caracteres UTF-8 para el documento.

    <meta name="viewport" content="width=device-width, initial-scale=1.0">: Configura la 
    escala inicial y la visualización en dispositivos móviles.

    <title>TechNews</title>: Establece el título de la página.

    Enlaces a fuentes y Font Awesome: Importa fuentes y estilos de Font Awesome.

    <link rel="stylesheet" href="css/styles.css">: Enlaza la hoja de estilos personalizada.

    <body>: Comienza el cuerpo del documento HTML.

    Contenedores: Define varios contenedores con identificadores como "nav-container," 
    "header-container," "news-cards-container," "cards-banner-one-container," y "footer-container."

    <script>: Incluye los scripts para Scroll Reveal y el archivo "main.js."

Código JavaScript (main.js):

    Event Listener: Agrega un evento de clic a un elemento con la clase "menu-btn"
    para mostrar/ocultar la barra de navegación.

    ScrollReveal: Configura efectos de revelación para elementos con las clases
    "showcase," "news-cards," "cards-banner-one," y "cards-banner-two."

    Función loadHTMLContent: Carga contenido HTML desde archivos externos y lo agrega 
    dinámicamente al DOM en elementos con identificadores específicos.

    Llamadas a loadHTMLContent: Carga y agrega el contenido de "header.html," "nav.html,"
    "footer.html," "news-cards.html," y "cards-banner-one.html" en contenedores correspondientes.

En resumen, el código HTML define la estructura de la página web y enlaza recursos externos.
El código JavaScript se encarga de eventos interactivos, efectos de revelación y la carga dinámica
de contenido HTML desde archivos externos para construir la página. La página se compone de un encabezado, 
una barra de navegación, secciones de noticias, banners y un pie de página.
