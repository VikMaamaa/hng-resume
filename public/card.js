/*eslint-disable*/
import { register } from './register.js';



const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)
console.log(screen.width)
checkBoxes()

const registerForm = document.querySelector('.form--send')
const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
    label.innerHTML = label.innerText.split('').map((letter, idx) => `<span style="transition-delay: ${idx * 50}ms">${letter}</span>`).join('')
})



function checkBoxes() {

    if (screen.width < 1100) {
        var triggerBottom = (window.innerHeight / 2 * 2)
    } else {
        triggerBottom = (window.innerHeight / 6 * 4)
    }


    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top


        if (boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}


if (registerForm) {
    registerForm.addEventListener('submit', e => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        register(name, email, message);
    })
}



$(document).ready(function() {


    document.querySelector('.about').style.display = "none"
    document.querySelector('.education').style.display = "none"
    document.getElementById('contact').style.display = "none"
    document.querySelector('.education1').style.display = "none"
    document.getElementById('project').style.display = "none"
    document.getElementById('blogs').style.display = "none"
    $(window).scroll(function() {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function() {
        $('html').animate({ scrollTop: 0 });
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function() {
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Software Engineer", "Developer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });


});


var znav = $("nav")
var menu = $("nav ul")
var toggle = $("nav ul .menu")

toggle.on("click", function() {
    if (menu.hasClass("active")) {
        // menu.css("z-index", '10')
        // menu.removeClass("zh")
//         console.log("remove ", menu)
        znav.removeClass("zh")
        menu.removeClass("active")

    } else {
        // menu.css("z-index", '25')
        // menu.addClass("zh")
//         console.log("add ", menu)
        znav.addClass("zh")
        menu.addClass("active zh")

    }
})

$(".nli").on("click", function() {
    if (menu.hasClass("active")) {
        // menu.css("z-index", '10')
        // menu.removeClass("zh")
//         console.log("remove ", menu)
        znav.removeClass("zh")
        menu.removeClass("active zh")

    } else {
        // menu.css("z-index", '25')
        // menu.addClass("zh")
//         console.log("add ", menu)
        znav.addClass("zh")
        menu.addClass("active zh")

    }
})
