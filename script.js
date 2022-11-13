const burgerMenu = document.querySelector(".container-icons-mobile")
const burgerMenuOpen = document.querySelector(".icon-burger")
const burgerMenuClose = document.querySelector(".icon-close")
const menuMobile = document.querySelector(".container-menu-mobile")

console.log(menuMobile)

burgerMenu.addEventListener("click", () => {
        burgerMenuOpen.classList.toggle("off")
        burgerMenuClose.classList.toggle("on")
        menuMobile.classList.toggle("on")
})

