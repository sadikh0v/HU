/* HUReacts Theme Scripts */

(function ($) {
    "use strict";

    $(window).on("load", function () {
        $("body").addClass("loaded");
    });

    /*=========================================================================
      Sticky Header
  =========================================================================*/

    $(function () {
        var header = $("#header"),
            yOffset = 0,
            triggerPoint = 80;
        $(window).on("scroll", function () {
            yOffset = $(window).scrollTop();

            if (yOffset >= triggerPoint) {
                header.addClass("navbar-fixed-top");
            } else {
                header.removeClass("navbar-fixed-top");
            }
        });
    });

    /*=========================================================================
          Mobile Menu
  =========================================================================*/

    $(".menu-wrap ul.nav").slicknav({
        prependTo: ".header-section .navbar",
        label: "",
        allowParentLinks: true,
    });
})(jQuery);

/*=========================================================================
  Scroll To Top
=========================================================================*/

const scrollTop = document.querySelector('.scrollTop')
window.addEventListener('scroll', checkHeight)

function checkHeight() {
    if (window.scrollY > 200) {
        scrollTop.style.display = 'flex'
    } else {
        scrollTop.style.display = 'none'
    }
}

scrollTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"

    })
})


/*=========================================================================
  Example
=========================================================================*/

const links = document.querySelectorAll('#example-link1, #example-link2, #example-link3, #example-link4');
const circles = document.querySelectorAll('#circle1,#circle2,#circle3')
const circles2 = document.querySelectorAll('#circle4,#circle5,#circle6')
const circles3 = document.querySelectorAll('#circle7,#circle8,#circle9')
const circles4 = document.querySelectorAll('#circle10,#circle11,#circle12')
const circles5 = document.querySelectorAll('#circle13,#circle14,#circle15')
const circles6 = document.querySelectorAll('#circle16,#circle17,#circle18')

function changeItem() {
    circles.forEach((circle, index) => {
        circle.style.transform = 'scale(1.2)'
    });
}

function reChangeItem() {
    circles.forEach(circle => {
        circle.style.transform = 'scale(1)';
    });
}

function changeItem2() {
    circles2.forEach(circle => {
        circle.style.transform = 'scale(1.2)'
    })
}

function reChangeItem2() {
    circles2.forEach(circle => {
        circle.style.transform = 'scale(1)';
    })
}

function changeItem3() {
    circles3.forEach(circle => {
        circle.style.transform = 'scale(1.2)'
    })
}

function reChangeItem3() {
    circles3.forEach(circle => {
        circle.style.transform = 'scale(1)';
    })
}

function changeItem4() {
    circles4.forEach(circle => {
        circle.style.transform = 'scale(1.2)'
    })
}

function reChangeItem4() {
    circles4.forEach(circle => {
        circle.style.transform = 'scale(1)';
    })
}

function changeItem5() {
    circles5.forEach(circle => {
        circle.style.transform = 'scale(1.2)'
    })
}

function reChangeItem5() {
    circles5.forEach(circle => {
        circle.style.transform = 'scale(1)';
    })
}

function changeItem6() {
    circles6.forEach(circle => {
        circle.style.transform = 'scale(1.2)'
    })
}

function reChangeItem6() {
    circles6.forEach(circle => {
        circle.style.transform = 'scale(1)';
    })
}