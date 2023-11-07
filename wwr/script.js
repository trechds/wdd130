document.addEventListener('DOMContentLoaded', function() {
    const images = ["rio1.jpg", "rio2.jpg", "rio3.jpg"]; // Adicione os nomes dos arquivos de imagem do seu slideshow
    let currentImageIndex = 0;
    const riverImage = document.querySelector('.river-image');
    const prevSlide = document.querySelector('.prev-slide');
    const nextSlide = document.querySelector('.next-slide');

    function showImage(index) {
        riverImage.src = `images/${images[index]}`;
        // Atualize outras informações conforme necessário (nome do rio, descrição, etc.)
    }

    showImage(currentImageIndex);

    prevSlide.addEventListener('click', function() {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        showImage(currentImageIndex);
    });

    nextSlide.addEventListener('click', function() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        showImage(currentImageIndex);
    });
});
