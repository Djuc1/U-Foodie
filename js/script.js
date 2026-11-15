const menu = document.getElementById('menu-bars');
const navbar = document.querySelector('.navbar');
const searchIcon = document.getElementById('search-icons');
const searchForm = document.getElementById('search-form');
const closeSearch = document.getElementById('close');
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('header .navbar a');

if (menu) {
  menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
  });
}

if (searchIcon && searchForm) {
  searchIcon.addEventListener('click', () => {
    searchForm.classList.toggle('active');
  });
}

if (closeSearch && searchForm) {
  closeSearch.addEventListener('click', () => {
    searchForm.classList.remove('active');
  });
}

function updateActiveNav() {
  const top = window.scrollY;

  sections.forEach((section) => {
    const height = section.offsetHeight;
    const offset = section.offsetTop - 150;
    const id = section.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove('active');
      });

      const activeLink = document.querySelector(`header .navbar a[href*="${id}"]`);
      if (activeLink) {
        activeLink.classList.add('active');
      }
    }
  });
}

window.addEventListener('scroll', updateActiveNav);

new Swiper('.home-slider', {
  loop: true,
  centeredSlides: true,
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.home-slider .swiper-pagination',
    clickable: true,
  },
  grabCursor: true,
});

new Swiper('.review-slider', {
  loop: true,
  spaceBetween: 25,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 2,
    },
  },
  pagination: {
    el: '.review-slider .swiper-pagination',
    clickable: true,
  },
  grabCursor: true,
});

function hideLoader() {
  const loader = document.querySelector('.loader-container');
  if (loader) {
    loader.classList.add('fade-out');
  }
}

window.addEventListener('load', () => {
  setTimeout(hideLoader, 800);
});
