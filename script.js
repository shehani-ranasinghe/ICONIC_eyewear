document.addEventListener('DOMContentLoaded', function () {
    // Seleziona tutte le immagini e i contenitori di prodotto
    var images = document.querySelectorAll('img');
    var products = document.querySelectorAll('.prodotto');

    // Funzione per applicare l'effetto zoom
    function addZoomEffect(element, scale, boxShadow) {
        element.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
        element.addEventListener('mouseover', function () {
            element.style.transform = 'scale(' + scale + ')';
            element.style.boxShadow = boxShadow;
        });
        element.addEventListener('mouseout', function () {
            element.style.transform = 'scale(1)';
            element.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
        });
    }

    // Applica l'effetto zoom a tutte le immagini
    images.forEach(function (image) {
        addZoomEffect(image, 1.02, '0 8px 16px rgba(0, 0, 0, 0.3)');
    });

    // Applica l'effetto zoom a tutti i contenitori di prodotto
    products.forEach(function (product) {
        addZoomEffect(product, 1.05, '0 8px 16px rgba(0, 0, 0, 0.3)');
    });
});
