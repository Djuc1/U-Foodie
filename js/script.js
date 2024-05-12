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