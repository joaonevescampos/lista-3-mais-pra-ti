const menuElement = document.querySelector('.menu-container')

const closeMenu = document.querySelector('.close-menu')

const openMenu = document.querySelector('.open-menu')

openMenu.addEventListener('click', () => {
    menuElement.style.display = 'block'
})

closeMenu.addEventListener('click', () => {
    menuElement.style.display = 'none'
})

