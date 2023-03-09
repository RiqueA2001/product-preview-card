const card = document.querySelector('.card')
const btn = document.querySelector('button')
const audio = new Audio('https://www.soundjay.com/buttons/sounds/button-17.mp3')

card.addEventListener('click', e => {
  if (
    e.target != btn &&
    e.target != btn.firstElementChild &&
    e.target != btn.lastElementChild
  ) {
    card.classList.toggle('transform')
  }
})

btn.addEventListener('click', () => {
  audio.play()
})
