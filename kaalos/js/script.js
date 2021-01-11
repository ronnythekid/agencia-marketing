/*eslint-env jquery*/
//La solucion de arriba para el error del simbolo dolar como no definido , la obtuve de stack overflow

/* ===================================
            Preloader
====================================*/

$(window).on('load', function () { //asegura que todo el sitio esta cargado
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});


/* ===================================
            Team
====================================*/

$(document).ready(function () {
    $("#team-members").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1
            },
            // breakpoint from 480 up
            480: {
                items: 2
            }
        }
    });
});


/* ===================================
            Progress Bars
====================================*/
$(function () {

    $("#progress-elements").waypoint(function () {

        $(".progress-bar").each(function () {

            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 2000);

        });
        this.destroy();
    }, {
        offset: 'bottom-in-view'
    });
});



/* ===================================
            Responsive Tabs
====================================*/


$(function () {
    $("#services-tabs").responsiveTabs({
        animation: 'slide'
    });
});


/* ===================================
            Projects
====================================*/


$(window).on('load', function () {
    //Initialize isotope
    $("#isotope-container").isotope({

    });

    // filter items on button click
    $("#isotope-filters").on('click', 'button', function () {
        //obtener el valor del filtro
        var filterValue = $(this).attr('data-filter');

        //filter projects
        $("#isotope-container").isotope({
            filter: filterValue
        });

        //active button
        $("#isotope-filters").find('.active').removeClass('active');
        $(this).addClass('active');
    });
});

/* ===================================
            Magnifier
====================================*/

$(function () {
    $("#projects-wrapper").magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        // other options
        gallery: {
            enabled: true
        }
    });
});




/* ===================================
            Clientes
====================================*/


$(function () {
    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 2
            },
            // breakpoint from 480 up
            480: {
                items: 3
            },
            // breakpoint from 768 up
            768: {
                items: 6
            }
        }
    });
});




/* ===================================
           Google Map
====================================*/

$(window).on('load', function () {

    //Map Variables
    var addressString = 'Avinguda Diagonal, 605, 08028 Barcelona';
    var myLatlng = {
        lat: 41.388305,
        lng: 2.129781
    };

    //1. Render Google Map, se muestra tambien el zoom del mapa 
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: myLatlng
    });

    // 2. Add Marker
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: "Click To See Address"
    });

    // 3. Add Info Window
    var infowindow = new google.maps.InfoWindow({
        content: addressString
    });

    //Show info window when user clicks marker
    marker.addListener('click', function () {
        infowindow.open(map, marker);
    });

});




/* ===================================
           Navigation
====================================*/

/* Show & Hide White Navegation */
$(function () {




    //Show/hide White nav on page load
    showHideNav();


    $(window).scroll(function () {

        // show/hide nav on window's scroll
        showHideNav();

    });

    function showHideNav() {
        //alert("Haz hecho scroll")
        if ($(window).scrollTop() > 50) {
            //Show white nav
            $("nav").addClass("white-nav-top");

            //Show dark logo
            $(".navbar-brand img").attr("src", "img/logo/logo-dark.png");

            //Show back to top button
            $("#back-to-top").fadeIn();

        } else {

            //Hide white nav
            $("nav").removeClass("white-nav-top");

            //Show normal logo
            $(".navbar-brand img").attr("src", "img/logo/logo.png");

            //Hide back to top button
            $("#back-to-top").fadeOut();
        }
    }

});


/*Scrollspy*/


$('body').scrollspy({
    target: '.navbar'
})




// Smooth Scrolling 

$(function () {

    //var headingHeight = $('nav').outerHeight();

    $("a.smooth-scroll").click(function (event) {

        //Evito que el elemento habra el link 
        event.preventDefault();

        //get section id like #about , #services, #work, # team and etc. 
        var section_id = $(this).attr("href");

        //+ 39 si no funciona el scrollspy debo añadir esto a la var scrollTop
        $("html, body").animate({
            scrollTop: $(section_id).offset().top - 69
        }, 1250, "easeInOutExpo");

    });


});




/* ===================================
           Mobile Menu
====================================*/


$(function () {

    //Show Mobile navigation
    $("#mobile-nav-open-btn").click(function () {
        $("#mobile-nav").css("height", "100%");
    });

    //Show Mobile navigation
    $("#mobile-nav-close-btn, #mobile-nav a").click(function () {
        $("#mobile-nav").css("height", "0%");
    });

});




/* ===================================
           Animation
====================================*/
// animate on scroll
$(function () {
    new WOW().init();
});


//El codigo de adentro se ejecutara cuando la pagina este completamente cargada
//Home animation on page load
$(window).on('load', function () {
    $("#home-heading-1").addClass("animated fadeInDown");
    $("#home-heading-2").addClass("animated fadeInLeft");
    $("#home-text").addClass("animated zoomIn");
    $("#home-btn").addClass("animated zoomIn");
    $("#arrow-down i").addClass("animated fadeInDown infinite");
});