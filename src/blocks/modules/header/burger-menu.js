import $ from "jquery";


function burgerMenu(selector) {
    let menu = $(selector);
    let button = menu.find('.burger-menu_button', '.burger-menu_lines');
    let links = menu.find('.burger-menu_link');
    let body = document.querySelector('body');
    let header = document.querySelector('header');


    button.on('click', (e) => {
        e.preventDefault();
        toggleMenu();
    });

    links.on('click', () => toggleMenu());
    // overlay.on('click', () => toggleMenu());

    function toggleMenu() {
        menu.toggleClass('burger-menu_active');

        if (menu.hasClass('burger-menu_active')) {
            body.style.overflow = 'hidden';
            header.classList.toggle('burger-menu_active');
        } else {
            body.style.overflow = 'visible';
            header.classList.remove('burger-menu_active');
        }
    }
}

burgerMenu('.burger-menu');