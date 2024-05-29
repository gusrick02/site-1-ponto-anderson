const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');

let currentIndex = 0;
const totalImages = images.length;
const slideWidth = images[0].clientWidth;

function showNextImage() {
    currentIndex++;
    if (currentIndex >= totalImages) {
        currentIndex = 0;
    }
    slides.style.transform = `translateX(${-slideWidth * currentIndex}px)`;
}

function showPrevImage() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = totalImages - 1;
    }
    slides.style.transform = `translateX(${-slideWidth * currentIndex}px)`;
}
