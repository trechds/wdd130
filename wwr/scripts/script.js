document.addEventListener('DOMContentLoaded', function() {
    const images = ["images/facil.png", "images/medio.png", "images/dificil.png", "images/perigoso.png"];
    let currentImageIndex = 0;
    const riverImage = document.querySelector('.river-image');
    const prevSlide = document.querySelector('.prev-slide');
    const nextSlide = document.querySelector('.next-slide');
    const indicatorsContainer = document.querySelector('.indicators');

    function showImage(index) {
        riverImage.src = images[index];
        updateIndicators(index);
    }

    function updateIndicators(index) {
        const indicators = document.querySelectorAll('.indicator');
        indicators.forEach((indicator, i) => {
            indicator.classList.toggle('active-indicator', i === index);
        });
    }

    function createIndicators() {
        images.forEach((_, index) => {
            const indicator = document.createElement('span');
            indicator.classList.add('indicator');
            indicator.addEventListener('click', () => {
                showImage(index);
            });
            indicatorsContainer.appendChild(indicator);
        });
        updateIndicators(currentImageIndex);
    }

    showImage(currentImageIndex);
    createIndicators();

    prevSlide.addEventListener('click', function() {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        showImage(currentImageIndex);
    });

    nextSlide.addEventListener('click', function() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        showImage(currentImageIndex);
    });
});
