document.addEventListener("DOMContentLoaded", function () {
    const slideshowImages = document.querySelectorAll(".slide-image");
    const buttons = document.querySelectorAll(".service-button");
    const serviceInfoBox = document.querySelector(".service-info-box");

    // Textos correspondentes aos serviços corretivo e preventivo
    const serviceTexts = [
        "AR TEC Electrical Solutions specializes in a wide range of electrical services, providing comprehensive solutions to meet residential and commercial needs. Our services include electrical installations, ensuring efficient and safe distribution of power in any environment. Additionally, we emphasize our expertise in corrective maintenance, addressing issues promptly to ensure the continuous and reliable operation of electrical systems. Our commitment is to deliver high-quality services tailored to your specific requirements.",
        "At AR TEC, we prioritize corrective electrical services, swiftly addressing and resolving issues in residential, commercial, and industrial environments. Our team of experts is dedicated to ensuring the optimal functioning of electrical systems and the safety of your spaces. With a focus on customer satisfaction, we strive to exceed expectations in every project.",
        "Explore preventive electrical services at AR TEC. Our team is committed to proactively maintaining and safeguarding your electrical systems. From routine inspections to preventative measures, we focus on minimizing risks and ensuring the long-term reliability of your electrical infrastructure. Partner with us for proactive solutions that enhance the performance and longevity of your electrical systems."
    ];

    function updateSlide(index) {
        slideshowImages.forEach((image, i) => {
            if (i === index) {
                image.style.display = "block";
            } else {
                image.style.display = "none";
            }
        });

        // Atualiza o texto no service-info-box
        serviceInfoBox.innerHTML = `<p>${serviceTexts[index]}</p>`;
    }

    buttons.forEach((button, index) => {
        button.addEventListener("click", function () {       
            buttons.forEach((btn) => btn.classList.remove("selected"));         
            button.classList.add("selected");
            updateSlide(index);
        });
    });

    // Adiciona a caixa retangular ao fundo de service-info-box
    const backgroundBox = document.createElement("div");
    backgroundBox.classList.add("background-box");
    document.body.appendChild(backgroundBox);

    // Função para esconder a caixa retangular quando um botão é clicado
    function hideBackgroundBox() {
        backgroundBox.style.display = "none";
    }

    buttons.forEach((button) => {
        button.addEventListener("click", hideBackgroundBox);
    });

    // Inicialmente, mostra a primeira imagem e destaca o primeiro botão
    updateSlide(0);
    buttons[0].classList.add("selected");
});
