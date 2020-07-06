// Smooth Scroll

var scroll = new SmoothScroll('a[href*="#"]');


//  Wow js

new WOW().init();


//  Scroll To Top


$(document).ready(function () {


    //  show / hide button

    $(window).scroll(function () {

        if ($(this).scrollTop() > 300) {

            $('.scrollTop').fadeIn();

        } else {

            $('.scrollTop').fadeOut();
        }

    });


});
