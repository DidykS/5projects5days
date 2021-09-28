const board = document.querySelector('#board')
const colors = [
  '#e74c3c',
  '#8e44ad',
  '#3498db',
  '#e67e22',
  '#2ecc71',
  '#D602B4',
  '#CC9E02',
  '#D6FFF7',
  '#52D1FF',
  '#D10002',
]
const startBtn = document.querySelector('.start__btn')
const inputNum = document.querySelector('.input__num')
const reset = document.querySelector('.reset')

startBtn.addEventListener('click', () => {
  const NUMBER_SQUARES = inputNum.value

  startBtn.style.display = 'none'
  inputNum.style.display = 'none'
  reset.style.display = 'flex'

  for (let i = 0; i < NUMBER_SQUARES; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => {
      setColor(square)
    })

    square.addEventListener('mouseleave', () => {
      removeColor(square)
    })

    board.append(square)
  }
})

reset.addEventListener('click', () => {
  inputNum.value = '500'
  document.querySelector('.space').innerHTML = ''

  startBtn.style.display = 'flex'
  inputNum.style.display = 'flex'
  reset.style.display = 'none'
})

function setColor(elem) {
  const color = getRandomColor()
  elem.style.backgroundColor = color
  elem.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(elem) {
  elem.style.backgroundColor = '#1d1d1d'
  elem.style.boxShadow = '0 0 2px #000'
}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length)
  return colors[index]
}
