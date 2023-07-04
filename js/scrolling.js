"use strict"

let navbar = document.querySelector('.top-nav');
let escudo = document.querySelector('.navbar-brand img');
let txtBrand = document.querySelector('.text-brand');
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
                txtBrand.style.left = "47px";
                txtCity.style.left = "219px";
            }
        } else {
            // Scrolling hacia arriba
            if (scrollTop <= 200) {
                navbar.style.backgroundColor = "rgba(208,211,167,0.72)";
                escudo.style.top = "-30px";
                escudo.style.transform = "scale(1)";
                txtBrand.style.left = "35px";
                txtCity.style.left = "233px";
            }
        }
        lastScrollTop = scrollTop;
    
    // Vista mobile
    } else if (windowWidth < 720) {
        if (scrollTop > lastScrollTop) {
            // Scrolling hacia abajo
            if (scrollTop > 400) {
                escudo.style.width = "7% !important";
                escudo.style.top = "-19px";
                escudo.style.transform = "scale(.50)";
            }
        } else {
            // Scrolling hacia arriba
            if (scrollTop <= 400) {
                escudo.style.top = "5px";
                escudo.style.transform = "scale(1)";
            }
        }
    }
});
