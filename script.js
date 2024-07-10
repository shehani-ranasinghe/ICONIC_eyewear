let currentIndex = 0;
const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.slider img');
const totalImages = images.length;

document.querySelector('.next-handle').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalImages;
    updateSlider();
});

document.querySelector('.prev-handle').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    updateSlider();
});

function updateSlider() {
    const offset = -currentIndex * 100;
    slider.style.transform = `translateX(${offset}%)`;
}
