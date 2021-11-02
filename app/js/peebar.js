let peebar = document.querySelector('.peebar');
let peebarLocation = document.querySelector('.peebar-location');
let pepedone = document.querySelector('.pepedone');
let pepedoneText = document.querySelector('.peebar__text');

let green = document.querySelector('.peebar__wrap__green');
let yellow = document.querySelector('.peebar__wrap__yellow');
let red = document.querySelector('.peebar__wrap__red');

let screenHeight = document.documentElement.clientHeight;

window.addEventListener('pageUpdate', function() {
    peebar.remove(); // animation
})

window.addEventListener('scroll', function () {

    if (peebarLocation.getBoundingClientRect().top < screenHeight - (screenHeight / 4)) {
        green.style.width = 49 + "%"
    } else {
        green.style.width = 0 + "%"
    }

    if (peebarLocation.getBoundingClientRect().top < screenHeight / 2) {
        yellow.style.width = 33 + '%';
        yellow.classList.add('blick');

    } else {
        yellow.classList.remove('blick');
        yellow.style.width = 0 + '%';
    }

    if (peebarLocation.getBoundingClientRect().top < 10) {
        peebar.classList.add('fixed');
    } else if (peebarLocation.getBoundingClientRect().top >= peebar.getBoundingClientRect().top) {
        peebar.classList.remove('fixed');
    }


    if (pepedone.getBoundingClientRect().top < screenHeight) {
        yellow.classList.remove('blick');
        red.style.width = 18 + '%';
        red.classList.add('blick-2');
    } else {
        yellow.classList.add('blick');
        red.style.width = 0 + '%';
        red.classList.remove('blick-2');
    }

    if (pepedone.getBoundingClientRect().top < screenHeight / 12) {
        pepedoneText.classList.add('done');
        red.style.width = 0 + '%';
        yellow.style.width = 0 + '%';
        green.style.width = 0 + '%';
    } else {
        pepedoneText.classList.remove('done');
    }

});