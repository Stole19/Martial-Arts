
//  Loading


$(document).ready(function () {

    let counter = 0;
    let c = 0;
    let i = setInterval(function () {

        $('.loading-page .counter h1').html(c);
        $('.loading-page').css('width', c + '%');

        counter++;
        c++;

        if (counter === 101) {

            clearInterval(i);
            window.location.replace("boxing.html");

        }
    }, 50);
})