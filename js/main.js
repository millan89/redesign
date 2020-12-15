$(document).ready(function(){

    // Slick hero
    if ($('.hero').length) {
        $('.hero').slick({
            dots: true
        });
    };

    // Game carousel 
    if ($('.games').length) {
        $('.games').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 4,
        prevArrow: $('#prevv'),
        nextArrow: $('#nextt'),
        responsive: [
            {
            breakpoint: 2601,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 5
            }
            },
            {
            breakpoint: 1601,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 4
            }
            },
            {
            breakpoint: 1337,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
            }
            },
            {
            breakpoint: 1060,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 2
            }
            },
            {
            breakpoint: 700,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '30px',
                slidesToShow: 1
            }
            }
        ]
        });

    }

    // Srecke carousel  
    if ($('.srecke').length) { 
        $('.srecke').slick({
            centerMode: true,
            centerPadding: '60px',
            slidesToShow: 4,
            prevArrow: $('#prevv'),
            nextArrow: $('#nextt'),
            responsive: [
                {
                breakpoint: 1200,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
                },
                {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 2
                }
                },
                {
                breakpoint: 700,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '30px',
                    slidesToShow: 1
                }
                }
            ]
        });
    }

    // Dobitnici carousel  
    if ($('.dobitnici-carousel').length) { 
        $('.dobitnici-carousel').slick({
            centerMode: true,
            centerPadding: '10px',
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow: $('#prevv'),
            nextArrow: $('#nextt'),
            responsive: [
                {
                breakpoint: 1200,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
                },
                {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 2
                }
                },
                {
                breakpoint: 700,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '30px',
                    slidesToShow: 1
                }
                }
            ]
        });
    }


    // COUNTDOWN
    // Set the date we're counting down to
    var countDownDate = new Date("Jan 1, 2021 00:00:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {

        // Get today's date and time
        var now = new Date().getTime();
        
        // Find the distance between now and the count down date
        var distance = countDownDate - now;
        
        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Output the result in an element with id="demo"
        if ($('#countdown').length) {
            document.getElementById("countdown").innerHTML = "<div>" + days + "<br><span>Dana</span></div>" + "<div>" + hours + "<br><span>Sati</span></div>"
            + "<span class='double-dot'>:</span>" + "<div>" + minutes + "<br><span>Min.</span></div>" + "<span class='double-dot'>:</span>" + "<div>" + seconds + "<br><span>Sek.</span></div>";
        }
        
        // If the count down is over, write some text 
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown").innerHTML = "EXPIRED";
        }
    }, 1000);
    // end COUNTDOWN


    // REZULTATI page - adding modifier class on header
    $(".score-tabs__list-tabs #bingo-tab").click(function() {
        $(".score-form").addClass('score-form--bingo');
        $(".score-form").removeClass('score-form--loto');
    });

    $(".score-tabs__list-tabs #loto-tab").click(function() {
        $(".score-form").addClass('score-form--loto');
        $(".score-form").removeClass('score-form--bingo');
    })


    // Enable tooltips
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });

});