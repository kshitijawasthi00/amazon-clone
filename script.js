const slider = document.querySelector('.slider');
const slides = Array.from(slider.children);
const slideCount = slides.length;
let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');

    if (i === index) {
      slide.classList.add('active');
    }
  });
}

function nextSlide() {
  currentIndex++;
  if (currentIndex >= slideCount) {
    currentIndex = 0;
  }
  showSlide(currentIndex);
}

showSlide(currentIndex);
setInterval(nextSlide, 5000); /* Change the interval as needed (in milliseconds) */