/* =========================
   ACC hero AOS setting
========================= */

if (window.innerWidth > 768) {
  const accHeroTitle = document.querySelector(".acc-hero-title");

  if (accHeroTitle) {
    accHeroTitle.setAttribute("data-aos", "fade-up");
    accHeroTitle.setAttribute("data-aos-delay", "300");
    accHeroTitle.setAttribute("data-aos-duration", "800");
  }
}

/* =========================
   AOS
========================= */

if (typeof AOS !== "undefined") {
  AOS.init({
    duration: 900,
    easing: "ease-out-cubic",
    once: true,
    offset: 120,
  });
}

/* =========================
   Header scroll
========================= */

const header = document.querySelector(".header");

if (header) {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 20) {
      header.classList.add("is-scroll");
    } else {
      header.classList.remove("is-scroll");
    }
  });
}

/* =========================
   Mobile menu
========================= */

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

/* =========================
   ACC swiper
========================= */

if (typeof Swiper !== "undefined" && document.querySelector(".acc-swiper")) {
  const accSwiper = new Swiper(".acc-swiper", {
    loop: true,
    speed: 700,
    slidesPerView: 1,
    spaceBetween: 0,

    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },

    pagination: {
      el: ".acc-slide-pagination",
      clickable: true,
    },

    navigation: {
      nextEl: ".acc-slide-next",
      prevEl: ".acc-slide-prev",
    },

    observer: true,
    observeParents: true,
  });
}

/* =========================
   Dish image swiper
========================= */

if (typeof Swiper !== "undefined" && document.querySelector(".dish-image-swiper")) {
  const dishImageSwiper = new Swiper(".dish-image-swiper", {
    loop: true,
    speed: 800,
    slidesPerView: "auto",
    spaceBetween: 16,
    centeredSlides: false,
    watchOverflow: false,

    autoplay: {
      delay: 2200,
      disableOnInteraction: false,
      pauseOnMouseEnter: false,
    },

    navigation: {
      nextEl: ".dish-slide-next",
      prevEl: ".dish-slide-prev",
    },
  });
}