$(document).ready(function(){

    // Slick hero
    if ($('.hero').length) {
        $('.hero').slick({
            dots: true,
            prevArrow: false,
            nextArrow: false
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
                    centerPadding: '10px',
                    slidesToShow: 2
                }
                },
                {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '10px',
                    slidesToShow: 1
                }
                },
                {
                breakpoint: 700,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 1
                }
                }
            ]
        });
    }

    // Partners  
    if ($('.partners').length) { 
        $('.partners').slick({
            infinite: true,
            centerPadding: '20px',
            slidesToShow: 5,
            prevArrow: $('#par-prevv'),
            nextArrow: $('#par-nextt'),
            responsive: [
                {
                breakpoint: 700,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 2
                }
                }
            ]
        });
    };


    // COUNTDOWN
    // Set the date we're counting down to
    var countDownDate = new Date("May 1, 2021 00:00:00").getTime();

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

    // Add/remove active state in modal
    $('.ticket-modal span').click(function(){
        $(this).toggleClass('active');
    })

    // Delete row
    $('.ticket-close').click(function(){
        $(this).closest('.ticket-card__row').remove();
    })

    // Reveal payment slip
    $('.payment-btn').click(function(){
        event.preventDefault();
        $('.payment-slip').removeClass('d-none');
    })


    if ($('#fin').length) {
        $('#fin').DataTable({
            "scrollX": true,
            "dom": '<fr>tip',
            "searching": true,
            "lengthChange": false,
            "pageLength": 10,
            "language": {
                "paginate": {
                    "next": "Sledeća",
                    "previous": "Prethodna"
                },
                "info": "_END_ od ukupno _TOTAL_ rezultata",
                "lengthMenu": "Prikaži _MENU_ rezultata po strani",
                "search": ""
            }
        });
        $(".sorting-table--docs #fin_filter input").addClass('form-control form-control--search mb-5');
        $(".sorting-table--docs #fin_filter input").attr("placeholder", "Pronađi dokument");
    };

    if ($('#sluzL').length) {
        $('#sluzL').DataTable({
        "scrollX": true,
        "dom": '<fr>tip',
            "searching": true,
            "lengthChange": false,
            "pageLength": 10,
            "language": {
            "paginate": {
            "next": "Sledeća",
            "previous": "Prethodna"
            },
            "info": "_END_ od ukupno _TOTAL_ rezultata",
            "lengthMenu": "Prikaži _MENU_ rezultata po strani",
            "search": ""
            }
            });
        $(".sorting-table--docs #sluzL_filter input").addClass('form-control form-control--search mb-5');
        $(".sorting-table--docs #sluzL_filter input").attr("placeholder", "Pronađi dokument");
    }

    if ($('#sluzB').length) {
        $('#sluzB').DataTable({
        "scrollX": true,
        "dom": '<fr>tip',
            "searching": true,
            "lengthChange": false,
            "pageLength": 10,
            "language": {
            "paginate": {
            "next": "Sledeća",
            "previous": "Prethodna"
            },
            "info": "_END_ od ukupno _TOTAL_ rezultata",
            "lengthMenu": "Prikaži _MENU_ rezultata po strani",
            "search": ""
            }
            });
        $(".sorting-table--docs #sluzB_filter input").addClass('form-control form-control--search mb-5');
        $(".sorting-table--docs #sluzB_filter input").attr("placeholder", "Pronađi dokument");
    }

    if ($('#jav').length) {
        $('#jav').DataTable({
        "scrollX": true,
        "dom": '<fr>tip',
            "searching": true,
            "lengthChange": false,
            "pageLength": 10,
            "language": {
            "paginate": {
            "next": "Sledeća",
            "previous": "Prethodna"
            },
            "info": "_END_ od ukupno _TOTAL_ rezultata",
            "lengthMenu": "Prikaži _MENU_ rezultata po strani",
            "search": ""
            }
            });
        $(".sorting-table--docs #jav_filter input").addClass('form-control form-control--search mb-5');
        $(".sorting-table--docs #jav_filter input").attr("placeholder", "Pronađi dokument");
    }

    if ($('#pravila').length) {
        $('#pravila').DataTable({
        "scrollX": true,
        "dom": '<fr>tip',
            "searching": true,
            "lengthChange": false,
            "pageLength": 10,
            "language": {
            "paginate": {
            "next": "Sledeća",
            "previous": "Prethodna"
            },
            "info": "_END_ od ukupno _TOTAL_ rezultata",
            "lengthMenu": "Prikaži _MENU_ rezultata po strani",
            "search": ""
            }
        });
        $(".sorting-table--docs #pravila_filter input").addClass('form-control form-control--search mb-5');
        $(".sorting-table--docs #pravila_filter input").attr("placeholder", "Pronađi dokument");
    }

    if ($('#ostala').length) {
        $('#ostala').DataTable({
        "scrollX": true,
        "dom": '<fr>tip',
            "searching": true,
            "lengthChange": false,
            "pageLength": 10,
            "language": {
            "paginate": {
            "next": "Sledeća",
            "previous": "Prethodna"
            },
            "info": "_END_ od ukupno _TOTAL_ rezultata",
            "lengthMenu": "Prikaži _MENU_ rezultata po strani",
            "search": ""
            }
        });
        $(".sorting-table--docs #ostala_filter input").addClass('form-control form-control--search mb-5');
        $(".sorting-table--docs #ostala_filter input").attr("placeholder", "Pronađi dokument");
    }

    if ($('#nab').length) {
        $('#nab').DataTable({
        "scrollX": true,
        "dom": '<fr>tip',
            "searching": true,
            "lengthChange": false,
            "pageLength": 10,
            "language": {
            "paginate": {
            "next": "Sledeća",
            "previous": "Prethodna"
            },
            "info": "_END_ od ukupno _TOTAL_ rezultata",
            "lengthMenu": "Prikaži _MENU_ rezultata po strani",
            "search": ""
            }
            });
        $(".sorting-table--docs #nab_filter input").addClass('form-control form-control--search mb-5');
        $(".sorting-table--docs #nab_filter input").attr("placeholder", "Pronađi dokument");
    }

    if ($('.uplata-isplata').length) {
        $('.uplata-isplata').DataTable( {
            "scrollX": true,
            "dom": '<<"toolbar">lfr>tip',
            "searching": true,
            "lengthChange": true,
            "pageLength": 5,
            "language": {
                "paginate": {
                    "next": "Sledeća",
                    "previous": "Prethodna"
                },
                "info": "_END_ od ukupno _TOTAL_ rezultata",
                "lengthMenu": "Prikaži _MENU_ rezultata po strani",
                "search": ""
            }
        } );
        $("#pregled-uplata_wrapper .toolbar").html('<h4 class="font-weight-bold m-0">Pregled svih vaših uplata</h4>');
        $("#pregled-isplata_wrapper .toolbar").html('<h4 class="font-weight-bold m-0">Pregled svih vaših isplata</h4>');
    }


    if ($('#blokada').length) {
        $('#blokada').DataTable({
            "scrollX": true,
            "dom": '<"d-flex justify-content-between"lfr>tip',
            "searching": true,
            "lengthChange": true,
            "pageLength": 5,
            "autoWidth": true,
            "language": {
                "paginate": {
                    "next": "Sledeća",
                    "previous": "Prethodna"
                },
                "info": "_END_ od ukupno _TOTAL_ rezultata",
                "lengthMenu": "Prikaži _MENU_ rezultata po strani",
                "search": ""
            }
        });
    }

    if ($('#istorija-t').length) {
        $('#istorija-t').DataTable({
            "scrollX": true,
            "dom": '<"d-flex justify-content-between"lfr>tip',
            "searching": true,
            "lengthChange": true,
            "pageLength": 5,
            "language": {
            "paginate": {
            "next": "Sledeća",
            "previous": "Prethodna"
            },
            "info": "_END_ od ukupno _TOTAL_ rezultata",
            "lengthMenu": "Prikaži _MENU_ rezultata po strani",
            "search": ""
            }
        });
    }

    if ($('.favorite').length) {
        $('.favorite').DataTable({
            "scrollX": false,
            "dom": '<"d-flex justify-content-center mt-4 mb-4"lfr>t<"d-flex justify-content-center mt-4 mb-2"p>',
            "searching": false,
            "lengthChange": true,
            "pageLength": 3,
            "language": {
            "paginate": {
            "next": "Sledeća",
            "previous": "Prethodna"
            },
            "lengthMenu": "Prikaži _MENU_ rezultata po strani",
            "search": ""
            }
        });
    }

    if ($('#primljene').length) {
        $('#primljene').DataTable({
        "scrollX": true,
        "dom": '<"d-flex justify-content-end-lg mb-4"lfr>t<"d-flex justify-content-between mt-4 mb-2"ip>',
                "searching": true,
                "lengthChange": true,
                "pageLength": 5,
                "language": {
                "paginate": {
                "next": "Sledeća",
                "previous": "Prethodna"
                },
                "info": "_END_ od ukupno _TOTAL_ rezultata",
                "lengthMenu": "Prikaži _MENU_ rezultata po strani",
                "search": ""
            }
        });
    }

    if ($('#poslate').length) {
        $('#poslate').DataTable({
        "scrollX": true,
        "dom": '<"d-flex justify-content-end-lg mb-4"lfr>t<"d-flex justify-content-between mt-4 mb-2"ip>',
                "searching": true,
                "lengthChange": true,
                "pageLength": 5,
                "language": {
                "paginate": {
                "next": "Sledeća",
                "previous": "Prethodna"
                },
                "info": "_END_ od ukupno _TOTAL_ rezultata",
                "lengthMenu": "Prikaži _MENU_ rezultata po strani",
                "search": ""
            }
        });
    }

    $(".sorting-table select").addClass('custom-select');
    $(".sorting-table input[type='search']").addClass('form-control form-control--light');
    $(".sorting-table input[type='search']").attr("placeholder", "Pretrazi");

    // Adjust column widths
    $(function(){
        $('.list-group button').on('shown.bs.tab', function (e) {
            var tables = $('.sorting-table .datatable').DataTable();
            tables.columns.adjust().draw();
        })
    })

    // Adjust column widths
    $(function(){
        $('#list-tab a').on('shown.bs.tab', function (e) {
            var tables = $('.sorting-table .datatable').DataTable();
        tables.columns.adjust().draw();
        })
        $('.izvestaj .list-group-item').click(function(){
            $('#text-doc').text($(this).text());
        })
    });

});

$('#login_name').keydown(function(){
    if( $(this).val().length >= 2) {
        $('.login_btn').addClass('btn-success');
    } else {
        $('.login_btn').removeClass('btn-success');
    }
});

// Enable tooltips
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});

$(".sorting-table").click(function(){
    $(this).removeClass("anim");
})