const menuTrigger = document.querySelector('.open_nav_link')
const menuWindow = document.querySelector('.open_nav')

menuTrigger.addEventListener('click', (e) => {
    console.log(e);
    menuWindow.classList.toggle('active')
})