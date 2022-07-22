
/* Dropdown
======================================================================= */

const dropdownLinks = document.querySelectorAll('.dropdown');
const dropdowns = document.querySelectorAll('.navbar__list__item__dropdown');

dropdownLinks.forEach((dropdown, index) => {
    dropdown.addEventListener('click', function() {
        this.classList.toggle('active');
        dropdowns[index].classList.toggle('active');
        let icon = this.querySelector('.arrow-icon');
        if (this.classList.contains('active')) {
            icon.src = 'images/icon-arrow-down.svg';
        } else {
            icon.src = 'images/icon-arrow-up.svg';

        }
    });
});

/* Dropdown / End
======================================================================= */

/* MenuMoba
======================================================================= */

const btn = document.querySelector("#mobilemenu");
const mobilenav = document.querySelector(".navbar-list ");
const menuClose = document.getElementById('moobilemenu__close');



btn.addEventListener('click', function(){
    mobilenav.classList.toggle('active');
    menuClose.classList.toggle('active');

    if (menuClose.classList.contains('active')) {
        btn.src = 'images/icon-close.svg';
    } else {
        btn.src = 'images/icon-hamburger.svg';
    }
})

/* MenuMoba / End
======================================================================= */