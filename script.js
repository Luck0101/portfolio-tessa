const menuHamburger = document.querySelector(".menu-hamburger")
const navLinks = document.querySelector(".nav-links")

menuHamburger.addEventListener('click',()=>{
navLinks.classList.toggle('mobile-menu')
})



let i = 0;
let images = [];
let slideTime = 3000; // 3 seconds

 

images[0] = "img/carousel.png";
images[1] = 'img/carouselimg.png';
images[2] = 'img/carousel3.png';
images[3] = 'img/carouselflou.png';
images[4] = 'img/carousel5.png';

function changePicture() {
    document.getElementById('SLIDE_BG').style.backgroundImage = `url(${images[i]})`;

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }

    setTimeout("changePicture()", slideTime);
}

window.onload = changePicture;