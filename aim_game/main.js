const startBtn = document.querySelector('.start')
const screens = document.querySelectorAll('.screen')
const timeList = document.querySelector('#time-list')
let time = 0 
const timeEl = document.querySelector('#time')
const board = document.querySelector('#board')
let score = 0 
const colors = ['#9fb6cd', '#f5d3d3', '#e3dac9', '#ffe599', '#c27ba0', '#b6d7a8', 'white','#5dacf5']

startBtn.addEventListener('click', (event) => {
  event.preventDefault()
  screens[0].classList.add('up')
})

timeList.addEventListener('click', event => {
  if (event.target.classList.contains('time-btn')) {
    time = parseInt(event.target.getAttribute('data-time'))
    screens[1].classList.add('up')
    startGame()
  }
})
board.addEventListener('click', event => {
  if (event.target.classList.contains('circle')) {
    score++
    event.target.remove('')
    createRanCircle()
  }
})

function startGame() {
  setInterval(decreaseTime, 1000)
  createRanCircle()
  setTime(time)
}

function decreaseTime() {
  if (time === 0) {
    finishGame()
  } else {
    let current = --time
  if (current < 10) {
    current = `0${current}`
  }
  setTime(current)
  }
  
}

function setTime(value) {
  timeEl.innerHTML = `00:${value}`
}

function finishGame() {
  timeEl.parentNode.classList.add('hide')
  board.innerHTML = `<h1>Cчет: <span class="primary" >${score}</span> </h1>`
  
}

function createRanCircle() {
  const circle = document.createElement('div')
  const size = getRanNum(10, 60)
  const { width, height } = board.getBoundingClientRect()
  const x = getRanNum(0,width - size) 
  const y = getRanNum(0, height - size)
  const cColor = getRandomColor()
  circle.classList.add('circle')
  circle.style.width = `${size}px`
  circle.style.height = `${size}px`
  circle.style.top = `${y}px`
  circle.style.left = `${x}px`
  circle.style.background = `${cColor}`
  

  board.append(circle)
}

function getRanNum(min, max) {
  return Math.round(Math.random() * (min,max) + min)
}


function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length)
  return colors[index]
}

function setColor(circle) {
  const color = getRandomColor()
  circle.style.backgroundColor = color

}
