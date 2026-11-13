<<<<<<< HEAD
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
    el: '.swiper-pagination',
    clickable: true,
  },
  grabCursor: true,
});

new Swiper('.review-slider', {
  rewind: true,
  centeredSlides: true,
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
=======
var menu = document.getElementById('#menu-bars');
var navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fas');
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}


let section = document.querySelector('section');
let navLinks = document.querySelector('header .navbar a');


window.onscroll = () =>{
	menu.classList.remove('fa-times');
	navbar.classList.remove('active');

    section.foreEach(sec => {

        let top = window.scrollY;
        let height = sec.offsetHeight;
        let offset = sec.offsetTop - 150;
        let id = sec.getAttribute('id');

        if(top => offset && top < + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header .navbar a[href*='+id+']').classList.add('active');

            });
        };
    });
};

// window.onscroll = () => {
//     menu.classList.remove('fa-times');
//     navbar.classList.remove('active');

//     sections.forEach(sec => {
//         let top = window.scrollY;
//         let height = sec.offsetHeight;
//         let offset = sec.offsetTop - 150;
//         let id = sec.getAttribute('id');

//         if (top >= offset && top < offset + height) {
//             navLinks.forEach(link => {
//                 link.classList.remove('active');
//             });
//             document.querySelector('header .navbar a[href*=' + id + ']').classList.add('active');
//         }
//     });
// };


document.getElementById('#search-icon').onclick = () => {
    document.getElementById('#search-form').classList.toggle('active');
}

document.getElementById('#close').onclick = () => {
    document.getElementById('#search-form').classList.remove('active');
}

  var swiper = new Swiper(".home-slider", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 7500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      loop:true,
    });

  var swiper = new Swiper(".review-slider", {
      spaceBetween: 20,
      centeredSlides: true,
      autoplay: {
        delay: 7500,
        disableOnInteraction: false,
      },
      loop:true,
      Breakpoints: {
        0:{
            slidesPreview: 1,
        },
        640:{
            slidesPreview: 2,
        },
        740:{
            slidesPreview: 3,
        },
        1024:{
            slidesPreview: 4,
        },
      },
    });


function loader(argument) {
    document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
    setInterval(loader, 1000);
}

window.onload = fadeOut;
>>>>>>> eb1d79a1e47973af39d5b2c57f5410761fe77a13
