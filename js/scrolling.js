"use strict"

let navbar = document.querySelector('.top-nav');
let escudo = document.querySelector('.navbar-brand img');
let txtBrand = document.querySelector('.text-brand');
let txtBrandMobile = document.querySelector('.text-brand-mobile');
let txtCity = document.querySelector('.text-city');
var lastScrollTop = 0;

window.addEventListener("scroll", function () {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;

    // Vista desktop
    if (windowWidth > 720) {
        if (scrollTop > lastScrollTop) {
            // Scrolling hacia abajo
            if (scrollTop > 200) {
                navbar.style.backgroundColor = "rgba(208,211,167,1)";
                escudo.style.top = "-60px";
                escudo.style.transform = "scale(.75)";
                txtBrand.style.left = "40px";
                txtCity.style.left = "210px";
            }
        } else {
            // Scrolling hacia arriba
            if (scrollTop <= 200) {
                navbar.style.backgroundColor = "rgba(208,211,167,0.72)";
                escudo.style.top = "-30px";
                escudo.style.transform = "scale(1)";
                txtBrand.style.left = "24px";
                txtCity.style.left = "228px";
            }
        }
        lastScrollTop = scrollTop;
    
    // Vista mobile
    } else if (windowWidth < 720) {
        if (scrollTop > lastScrollTop) {
            // Scrolling hacia abajo
            if (scrollTop > 400) {
                escudo.style.width = "7% !important";
                escudo.style.top = "-6px";
                escudo.style.transform = "scale(.70)";
                txtBrandMobile.style.left = "73px";
            }
        } else {
            // Scrolling hacia arriba
            if (scrollTop <= 400) {
                escudo.style.top = "5px";
                escudo.style.transform = "scale(1)";
                txtBrandMobile.style.left = "80px";
                txtBrandMobile
            }
        }
    }
});
