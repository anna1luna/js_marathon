//set activeSlide = 0 to select a specific slide to be default slide

function slidesPlugin (activeSlide =0) {
const slides = document.querySelectorAll('.slide')

/* to choose a specific slide to be the opener */
slides[activeSlide].classList.add('active')

for (const slide of slides) {
  slide.addEventListener('click', () => {
    clearActiveClasses()
    slide.classList.add('active')
  });
};

function clearActiveClasses() {
  slides.forEach((slide) => {
    slide.classList.remove('active')
  });
}
};
// call for specific slide
slidesPlugin()