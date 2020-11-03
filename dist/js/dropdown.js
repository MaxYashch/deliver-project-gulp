// header language
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.addEventListener("click", function (event) {
    if (!event.target.matches('.langDropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[ i ];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
});

document.addEventListener('keyup', (e) => {
    if (e.keyCode == 27) { document.querySelector('.header-top-item__item-list').classList.remove('show') }
})


function Country() {
    document.getElementById("myDropdownCountry").classList.toggle("show");
}

window.addEventListener("click", function (event) {
    if (!event.target.matches('.Countrybtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content-country");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[ i ];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
});

document.addEventListener('keyup', (e) => {
    if (e.keyCode == 27) { document.querySelector('.js-header-country-top-item__item-list').classList.remove('show') }
})



// worldwide dropdown
document.querySelector('.item-worldwide__select').onclick = worldwideDropdown;

function worldwideDropdown() {
    let c = document.querySelector('.item-worldwide__select-item-list');
    c.classList.toggle('wwDropdown');
}

document.addEventListener('keyup', (e) => {
    if (e.keyCode == 27) { document.querySelector('.item-worldwide__select-item-list').classList.remove('wwDropdown') }
})

let initAccordeons = () => {
    $('.js-accordeon-item__head').on('click', function () {
        let t = $(this);
        let item = t.closest('.js-accordeon-list__item');
        let body = item.find('.js-accordeon-item__body');
        let accordeon = t.closest('.js-accordeon-list');

        if (item.hasClass('open')) {
            item.removeClass('open');
            body.show().slideUp(500);
        } else {
            item.addClass('open');
            body.hide().slideDown(500);
        }

        accordeon.find('.js-accordeon-list__item.open')
            .not(item)
            .removeClass('open')
            .find('.js-accordeon-item__body')
            .show()
            .slideUp(500);
    })
}

$(document).ready(() => {

    initAccordeons()
})
