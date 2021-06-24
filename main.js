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
function changeHeaderWhenScroll() {
  const header = document.querySelector('#header')
  const navHeight = header.offsetHeight

  if (window.scrollY >= navHeight) {
    // scroll is bigger than the header height
    header.classList.add('scroll')
  } else {
    // scroll is smaller than the header height
    header.classList.remove('scroll')
  }
}

/* Testimonials Carousel */
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewhell: true,
  keyboard: true
})

/* Scroll Reveal */
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `
#home .image, #home .text,
#about .image, #about .text,
#services header, #services .card,
#testimonials header, #testimonials .testimonials
#contact .text, #contact .links,
footer .brand, footer .social
`,
  { interval: 100 }
)

/* Back to top */
function backToTop() {
  const backToTopButton = document.querySelector('.back-to-top')

  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

/* When scrolling */
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
})
