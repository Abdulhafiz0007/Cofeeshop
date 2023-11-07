let menu = document.querySelector('#menu-btn')
let navbar = document.querySelector('.a-div')

document.querySelector('#menu-btn').onclick = () => {
  navbar.classList.add('active')
}

document.querySelector('#close-btn').onclick = () => {
  navbar.classList.remove('active')
}