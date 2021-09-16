'use strict';

window.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.burger__btn');
    menuBtn.addEventListener('click', (e) => {
        console.log(e.target);
        menuBtn.classList.toggle('burger__btn_active');
        setTimeout(() => {
            menuBtn.classList.toggle('burger__btn_rotate');
        }, 500);
    });
});