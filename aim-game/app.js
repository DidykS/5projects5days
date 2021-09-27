const startBtn = document.querySelector("#start")
const screens = document.querySelectorAll(".screen")
const timelist = document.querySelector("#time-list")
const timeEl = document.querySelector("#time")
const board = document.querySelector("#board")
const restartBtn = document.querySelector("#restartBtn")

let time = 0
let score = 0

startBtn.addEventListener("click", (e) => {
  e.preventDefault()
  screens[0].classList.add("up")
})

timelist.addEventListener("click", (e) => {
  if (e.target.classList.contains("time-btn")) {
    time = +e.target.getAttribute("data-time")
    screens[1].classList.add("up")
    startGame()
  }
})

board.addEventListener("click", (e) => {
  if (e.target.classList.contains("circle")) {
    score++
    e.target.remove()
    createRandomCircle()
  }
})

restartBtn.addEventListener("click", () => {
  window.location.reload()
})

function startGame() {
  setInterval(decreaseTime, 1000)
  createRandomCircle()
  setTime(time)
}

function decreaseTime() {
  if (time == 0) {
    finishGame()
  } else {
    let curr = --time
    if (curr < 10) {
      curr = `0${curr}`
    }
    setTime(curr)
  }
}

function setTime(val) {
  timeEl.innerHTML = `00:${val}`
}

function finishGame() {
  restartBtn.classList.remove("display")
  board.innerHTML = `
  <h1>Score: <span class="primary">${score}</span></h1>`
  timeEl.parentNode.classList.add("hide")
}

function createRandomCircle() {
  const circle = document.createElement("div")

  const size = getRandomNumber(10, 60)
  const { width, height } = board.getBoundingClientRect()
  const x = getRandomNumber(0, width - size)
  const y = getRandomNumber(0, height - size)
  const color = getRandomColor()

  circle.classList.add("circle")
  circle.style.width = `${size}px`
  circle.style.height = `${size}px`
  circle.style.top = `${y}px`
  circle.style.left = `${x}px`
  circle.style.background = `#${color}`
  circle.style.boxShadow = `0px 0px 5px 1px #${color}`

  board.append(circle)
}

function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min)
}

function getRandomColor() {
  return Math.floor(Math.random() * 16777216).toString(16)
}
