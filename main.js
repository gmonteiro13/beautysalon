const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show') // on off
  })
}

/* when clicking a menu item, hide the menu */
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* change the page header when scrolling */
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function () {
  if (window.scrollY >= navHeight) {
    // scroll is bigger than the header height
    header.classList.add('scroll')
  } else {
    // scroll is smaller than the header height
    header.classList.remove('scroll')
  }
})
