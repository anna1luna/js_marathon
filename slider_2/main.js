var down = document.querySelector('.down-button')
var up = document.querySelector('.up-button')
var sideBar = document.querySelector('.sidebar')
var mainSlide = document.querySelector('.main-slide')
var slidesCount = mainSlide.querySelectorAll('div').length
var container = document.querySelector('.container')
let activeSlideIndex = 0

sideBar.style.top = `-${(slidesCount - 1) * 100}vh`



up.addEventListener('click', () => {
  changeSlide('up')
})

down.addEventListener('click', () => {
  changeSlide('down')
})

document.addEventListener('keydown', event => {
    if (event.key === 'ArrowUp')
    {
      changeSlide('up')
    }
    else if (event.key === 'ArrowDown')
    {
      changeSlide('down')
      }
})
  
function changeSlide(direction) {
  if (direction === 'up') {
    activeSlideIndex++
    if (activeSlideIndex === slidesCount) {
      activeSlideIndex = 0
    }
  } else if (direction === 'down') {
    activeSlideIndex--
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesCount - 1
    }
  }


  var height = container.clientHeight
  mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`
  sideBar.style.transform = `translateY(${activeSlideIndex*height}px)`

};