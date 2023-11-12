document.addEventListener('DOMContentLoaded', function () {
    const images = ["images/facil.png", "images/medio.png", "images/dificil.png", "images/perigoso.png"];

    const riverImage = document.querySelector('.river-image');
    const prevSlide = document.querySelector('.prev-slide');
    const nextSlide = document.querySelector('.next-slide');
    const indicatorsContainer = document.querySelector('.indicators');
    const riverName = document.querySelector('.river-name');
    const iconBox = document.querySelector('.icon-box');
    const difficultyLevel = document.querySelector('#difficulty');
    const riverDescription = document.querySelector('#river-description');
    const riverInfo = document.querySelector('#river-info');
    const chooseBtn = document.querySelector('.choose-btn');
    const modal = document.getElementById("modal");
    const closeModalBtn = document.querySelector('.close');

    const riverInfoData = [
        {
            name: "Crystal Serenity",
            icon: "images/easy-river.png",
            difficulty: "Easy",
            description: "Enjoy a relaxing ride down the Crystal Serenity. Perfect for beginners and those looking for a calm experience.",
            info: "Embark on a serene journey down the Crystal Serenity, where the gentle flow of the river whispers tales of tranquility. As you drift along, surrounded by lush landscapes and soothing sounds, you'll encounter stretches of crystal-clear waters that reflect the beauty of nature. This easygoing adventure is not just a rafting experience; it's a soul-soothing exploration of nature's wonders."
        },
        {
            name: "Thrill Cascade",
            icon: "images/moderate-river.png",
            difficulty: "Moderate",
            description: "Experience the thrill of the Thrill Cascade. A balance of excitement and manageable challenges for intermediate rafters.",
            info: "Immerse yourself in the heart-pounding excitement of Thrill Cascade, a river that weaves a tapestry of adventure and discovery. The Thrill Cascade offers an exhilarating journey through a dynamic landscape, where each turn reveals a new challenge and a breathtaking vista. Navigate through the twists and turns, and feel the rush of adrenaline as you conquer rapids, creating memories that will last a lifetime."
        },
        {
            name: "Vortex Fury",
            icon: "images/challenging-river.png",
            difficulty: "Challenging",
            description: "Conquer the rapids of the Vortex Fury. Suitable for experienced rafters seeking an adrenaline-pumping adventure.",
            info: "Brace yourself for the ultimate challenge on the Vortex Fury, a river that beckons the daring and experienced. The Vortex Fury lives up to its name with powerful rapids that demand not just skill, but a spirit of determination. As you navigate through the surges and drops, you'll experience an adrenaline-pumping adventure that pushes your limits and rewards your courage with an unmatched sense of accomplishment."
        },
        {
            name: "Abyssal Tempest",
            icon: "images/dangerous-river.png",
            difficulty: "Hard",
            description: "Embark on an extreme journey down the Abyssal Tempest. Only for the bravest and most skilled rafters.",
            info: "Prepare to face the abyss on the Abyssal Tempest, a daring expedition reserved for the bravest and most skilled rafters. As you plunge into the heart of the Abyssal Tempest, you'll encounter an awe-inspiring display of nature's raw power. Towering cliffs surround you as you navigate through the dangerous rapids, creating an extreme and unforgettable experience that separates the true adventurers from the rest."
        }
    ];
    
    let currentImageIndex = 0;

    function showImage(index) {
        riverImage.src = images[index];
        currentImageIndex = index;
        updateIndicators(index);
        updateRiverInfo(index);
    }

    function updateIndicators(index) {
        const indicators = document.querySelectorAll('.indicator');
        indicators.forEach((indicator, i) => {
            indicator.classList.toggle('active-indicator', i === index);
        });
    }

    function setDifficultyStyle(difficulty) {
        difficultyLevel.textContent = difficulty;
        difficultyLevel.style.fontWeight = 'bold';

        switch (difficulty) {
            case 'Easy':
                difficultyLevel.style.color = 'green'; 
                break;
            case 'Moderate':
                difficultyLevel.style.color = '#8B7500'; // Dark Yellow
                break;
            case 'Challenging':
                difficultyLevel.style.color = 'orange';
                break;
            case 'Hard':
                difficultyLevel.style.color = 'red';
                break;
            default:
                difficultyLevel.style.color = 'black';
        }
    }

    function updateRiverInfo(index) {
        riverName.textContent = riverInfoData[index].name;
        document.getElementById('river-name').textContent = riverInfoData[index].name;

        iconBox.innerHTML = '';
        const iconImg = document.createElement('img');
        iconImg.src = riverInfoData[index].icon;
        iconImg.style.width = '100%';
        iconImg.style.height = 'auto';
        iconBox.appendChild(iconImg);

        setDifficultyStyle(riverInfoData[index].difficulty);
        riverDescription.textContent = riverInfoData[index].description;
        riverInfo.textContent = riverInfoData[index].info;
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
        updateRiverInfo(currentImageIndex);
    }

    showImage(currentImageIndex);
    createIndicators();

    prevSlide.addEventListener('click', function () {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        showImage(currentImageIndex);
    });

    nextSlide.addEventListener('click', function () {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        showImage(currentImageIndex);
    });

    function openModal() {
        modal.style.display = "flex";
    }

    function closeModal() {
        modal.style.display = "none";
    }

    function scheduleAppointment() {
        // Lógica para agendamento - pode ser ajustada conforme necessário
        alert("Appointment Scheduled!");
        closeModal();
    }

    chooseBtn.addEventListener("click", openModal);
    closeModalBtn.addEventListener('click', closeModal);
});
