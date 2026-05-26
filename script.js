AOS.init({
  duration: 900,
  easing: 'ease-out-cubic',
  once: true,
  offset: 120
});

const header = document.querySelector('.header');

window.addEventListener('scroll', function () {
  if (window.scrollY > 20) {
    header.classList.add('is-scroll');
  } else {
    header.classList.remove('is-scroll');
  }
});

const mobileMenuButton = document.querySelector(".mobile-menu-btn");
const mobileMenuCloseButton = document.querySelector(".mobile-menu-close");
const mobileMenuDim = document.querySelector(".mobile-menu-dim");
const mobileMenuLinks = document.querySelectorAll(".mobile-menu-list a");

function openMobileMenu() {
  document.body.classList.add("is-mobile-menu-open");
}

function closeMobileMenu() {
  document.body.classList.remove("is-mobile-menu-open");
}

mobileMenuButton?.addEventListener("click", openMobileMenu);
mobileMenuCloseButton?.addEventListener("click", closeMobileMenu);
mobileMenuDim?.addEventListener("click", closeMobileMenu);

mobileMenuLinks.forEach((link) => {
  link.addEventListener("click", closeMobileMenu);
});

const accSwiper = new Swiper(".acc-swiper", {
  loop: true,
  speed: 600,
  slidesPerView: 1,
  spaceBetween: 0,

  pagination: {
    el: ".acc-slide-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".acc-slide-next",
    prevEl: ".acc-slide-prev",
  },
});