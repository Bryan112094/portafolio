(function ($) {
    "use strict";

    // Typed Initiate
    if ($('.typed-text-output').length == 1) {
        var typed_strings = $('.typed-text').text();
        var typed = new Typed('.typed-text-output', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }
    $(window).scroll( function(){ posicionarMenu();} );

    //Habilitar los tooltip
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms).forEach(function (form) {
        form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }
            form.classList.add('was-validated')
        }, false)
    })

})(jQuery);

//Configurar menú
const menu = document.querySelector(".menu");
const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");

function toggleMenu(){
    menu.classList.toggle('menu_opened');
}

openMenu.addEventListener("click", toggleMenu);
closeMenu.addEventListener("click", toggleMenu);

const menuLinks = document.querySelectorAll('.nav a[href^="#"]');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const id = entry.target.getAttribute("id");
        const menuLink = document.querySelector(`.nav a[href="#${id}"]`)

        if(entry.isIntersecting){
            document.querySelector(".nav a.active").classList.remove("active");
            menuLink.classList.add("active");
        }
    })
}, {rootMargin: '-40% 0px -60% 0px'})

menuLinks.forEach(menuLink =>{
    menuLink.addEventListener("click", function() {
        menu.classList.remove("menu_opened");
    })

    const hash = menuLink.getAttribute("href");
    const target = document.querySelector(hash);
    if (target) {
        observer.observe(target)
    }
})

function posicionarMenu(){
    var altura_T = 90;
    if($(window).scrollTop()>altura_T) $('header').addClass('flota');
    else $('header').removeClass('flota');
}