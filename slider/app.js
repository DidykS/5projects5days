const upBtn = document.querySelector(".up-button")
const downBtn = document.querySelector(".down-button")
const sidebar = document.querySelector(".sidebar")
const mainSlide = document.querySelector(".main-slide")
const container = document.querySelector(".container")

const slides = mainSlide.querySelectorAll("div").length
sidebar.style.top = `-${(slides - 1) * 100}vh`

upBtn.addEventListener("click", () => {
  changeSlide("up")
})

downBtn.addEventListener("click", () => {
  changeSlide("down")
})

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp") {
    changeSlide("up")
  } else if (e.key === "ArrowDown") {
    changeSlide("down")
  }
})

let activeSlide = 0

function changeSlide(direction) {
  if (direction === "up") {
    activeSlide++
    if (activeSlide === slides) {
      activeSlide = 0
    }
  } else if (direction === "down") {
    activeSlide--
    if (activeSlide < 0) {
      activeSlide = slides - 1
    }
  }

  const height = container.clientHeight

  mainSlide.style.transform = `translateY(-${activeSlide * height}px)`
  sidebar.style.transform = `translateY(${activeSlide * height}px)`
}
