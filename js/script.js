'use strict';

window.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.burger__btn');
    const menu = document.querySelector('.header-menu');

    menuBtn.addEventListener('click', togleClasses);

    function togleClasses() {
        menuBtn.classList.toggle('burger__btn_active');
        menu.classList.toggle('header-menu_active');
        menuBtn.classList.toggle('burger__btn_rotate');
        // if (menu.classList.contains('header-menu_active')) {
        //     window.addEventListener('click', togleClasses);
        // } else {
        //     window.removeEventListener('click', togleClasses);
        // }
    }

    function clickOverflow(e) {
        const target = e.target;
        if (isOverflow(target)) {
            console.log('here');
        }
    }

    function isOverflow(element) {
        if (!(element.classList.contains('burger__btn') && element.classList.contains('burger__line') &&
        element.classList.contains('header-menu__list'))) {
            return false;
        }
        return true;
    }
    window.addEventListener('click', clickOverflow);
});