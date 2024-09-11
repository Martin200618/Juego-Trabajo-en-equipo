let currentSlide = 0;
const slides = document.querySelectorAll('.story-slide');
const totalSlides = slides.length;
const nextBtn = document.getElementById('next-btn');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

// Evento del botón "Siguiente"
nextBtn.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
});
