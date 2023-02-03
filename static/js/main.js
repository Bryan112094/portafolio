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

})(jQuery);

function posicionarMenu(){
    var altura_T = 90;
    if($(window).scrollTop()>altura_T) $('header').addClass('flota');
    else $('header').removeClass('flota');
}
