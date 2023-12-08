(function ($) {
    "use strict";
    
    // Preloader
    $(window).on('load', function () {
        setTimeout(function () {
            $("#loader").fadeOut(200);
        }, 200);
    });

    // Animations
    var contentWayPoint = function () {
        var i = 0;
        $('.animate-box').waypoint(function (direction) {
            if (direction === 'down' && !$(this.element).hasClass('animated')) {
                i++;
                $(this.element).addClass('item-animate');
                setTimeout(function () {
                    $('body .animate-box.item-animate').each(function (k) {
                        var el = $(this);
                        setTimeout(function () {
                            var effect = el.data('animate-effect');
                            if (effect === 'fadeIn') {
                                el.addClass('fadeIn animated');
                            }
                            else if (effect === 'fadeInLeft') {
                                el.addClass('fadeInLeft animated');
                            }
                            else if (effect === 'fadeInRight') {
                                el.addClass('fadeInRight animated');
                            }
                            else {
                                el.addClass('fadeInUp animated');
                            }
                            el.removeClass('item-animate');
                        }, k * 200, 'easeInOutExpo');
                    });
                }, 100);
            }
        }, {
            offset: '85%'
        });
    };
    $(function () {
        contentWayPoint();
    });
    
    var wind = $(window);
    // scrollIt 
    $.scrollIt({
        upKey: 38,
        downKey: 40,
        easing: 'swing',
        scrollTime: 600,
        activeClass: 'active',
        onPageChange: null,
        topOffset: -70
    });

    // navbar scrolling background 
    wind.on("scroll", function () {
        var bodyScroll = wind.scrollTop(),
            navbar = $(".navbar"),
            logo = $(".navbar:not(.nav-box) .logo> img");
        if (bodyScroll > 100) {
            navbar.addClass("nav-scroll");
            logo.attr('src', 'img/logo-dark.png');
        } else {
            navbar.removeClass("nav-scroll");
            logo.attr('src', 'img/logo-light.png');
        }
    });

    // close navbar-collapse when a clicked
    $(".navbar-nav a").on('click', function () {
        $(".navbar-collapse").removeClass("show");
    });

    // Sections Background Image
    var pageSection = $(".bg-img, section");
    pageSection.each(function (indx) {
        if ($(this).attr("data-background")) {
            $(this).css("background-image", "url(" + $(this).data("background") + ")");
        }
    });

    // ProgressBar
    window.onscroll = function () {
        myFunction()
    };
    function myFunction() {
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;
        document.getElementById("myProgress").style.height = scrolled + "%";
    }
    
    // Team owlCarousel
    $('.sterk-team .owl-carousel').owlCarousel({
        loop: true
        , margin: 30
        , dots: false
        , mouseDrag: true
        , autoplay: true
        , responsiveClass: true
        , responsive: {
            0: {
                items: 1
            }
            , 600: {
                items: 2
            }
            , 1000: {
                items: 3
            }
        }
    });
    
    // Testimonial owlCarousel
    $(".sterk-testimonials .owl-carousel, .blocks .owl-carousel, .sterk-testimonial-item .owl-carousel").owlCarousel({
        items: 1
        , loop: true
        , dots: false
        , mouseDrag: false
        , autoplay: true
        , smartSpeed: 500
    });
    
    // Blog owlCarousel
    $('.sterk-blog .owl-carousel').owlCarousel({
        loop: true
        , margin: 30
        , mouseDrag: true
        , autoplay: false
        , dots: true
        , responsiveClass: true
        , responsive: {
            0: {
                items: 1
            , }
            , 600: {
                items: 1
            }
            , 1000: {
                items: 2
            }
        }
    });
    
        // Smooth Scrolling
$('a[href*="#"]')
  // Remove links that don't actually link to anything
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
    // On-page links
    if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
    if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
        scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
        var $target = $(target);
        $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
        } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
        };
        });
    }
    }
});
    
    
    // Button
    var buttons = document.querySelectorAll(".sterk-btn .sterk-btn2");
    for (var i = 0; i < buttons.length; i++) {
        var button = buttons[i];
        button.addEventListener("click", function () {
            if (!button.classList.contains("active")) button.classList.add("active");
            else button.classList.remove("active");
        });
    }

    // $(function () {
    //     var randomCoverImg = Math.floor(Math.random() * 5) + 1;
    //     var coverImg = document.querySelector("#coverImg");
    //     coverImg.setAttribute('data-background', 'assets/img/cover/' + randomCoverImg + '.jpg');
    // });
    
})(jQuery);
