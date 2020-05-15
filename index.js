var typed = new Typed('.type', {
    strings: [
        'Diagnoza i szybka pomoc',
        'Likwidacja bólu i leczenie przyczyny',
        'Grupowo, indywidualnie, f2f i online',
        'Doctor - Mentor ludzi korporacji'
    ],
    smartBackspace: true,
    typeSpeed: 100,
    backSpeed: 20,
    backDelay: 1000,
    loop: true
});


$(document).ready(function() {
    $('.slick').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        adaptiveHeight: true,
        dots: true,
        responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });
});