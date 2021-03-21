window.addEventListener("DOMContentLoaded", () => {
    const trigger = document.querySelector('.trigger'),
        btnClose = document.querySelector('.header-page .btn'),
        menu = document.querySelector('.header-page__nav');

    trigger.addEventListener('click', () => {
        if (trigger.classList.contains('show')) {
            trigger.classList.remove('show');
            trigger.classList.add('hide');
            menu.style.visibility = 'visible';
        }
    });

    btnClose.addEventListener('click', () => {
            menu.style.visibility = 'hidden';
            trigger.classList.add('show');
            trigger.classList.remove('hide');

    });




})
