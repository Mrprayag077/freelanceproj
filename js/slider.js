// Function to generate a random value from a given array
function randomValue(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Example arrays for size and position
const sArray = [30, 40, 50, 60, 70]; // Sizes of bubbles
const bArray = [0, 100, 200, 300, 400]; // Possible left positions (adjust as necessary)

// Existing initParadoxWay function
function initParadoxWay() {
    "use strict";
   
    if ($(".testimonials-carousel").length > 0) {
        var j2 = new Swiper(".testimonials-carousel .swiper-container", {
            preloadImages: false,
            slidesPerView: 1,
            spaceBetween: 20,
            loop: true,
            grabCursor: true,
            mousewheel: false,
            centeredSlides: true,
            pagination: {
                el: '.tc-pagination',
                clickable: true,
                dynamicBullets: true,
            },
            navigation: {
                nextEl: '.listing-carousel-button-next',
                prevEl: '.listing-carousel-button-prev',
            },
            breakpoints: {
                1024: {
                    slidesPerView: 3,
                },
            }
        });
    }
    
    // bubbles -----------------
    setInterval(function () {
        var size = randomValue(sArray);
        $('.bubbles').append('<div class="individual-bubble" style="left: ' + randomValue(bArray) + 'px; width: ' + size + 'px; height:' + size + 'px;"></div>');
        $('.individual-bubble').animate({
            'bottom': '100%',
            'opacity': '-=0.7'
        }, 4000, function () {
            $(this).remove();
        });
    }, 350);
}

// Init All ------------------
$(document).ready(function () {
    initParadoxWay();
});
