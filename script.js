const burgerMenu = document.querySelector(".container-icons-mobile")
const burgerMenuOpen = document.querySelector(".icon-burger")
const burgerMenuClose = document.querySelector(".icon-close")
const menuMobile = document.querySelector(".container-menu-mobile")
const cart = document.querySelector(".container-cart")
const iconCart = document.getElementById("cart")

console.log(menuMobile)

burgerMenu.addEventListener("click", () => {
        burgerMenuOpen.classList.toggle("off")
        burgerMenuClose.classList.toggle("on")
        menuMobile.classList.toggle("on")
})

iconCart.addEventListener("click", () => {
        cart.classList.toggle("off")
        cart.classList.toggle("on")
})

// Manage image selection


const secondaryImages = document.querySelectorAll(".thumbnail")
const contentImage = document.querySelector(".product-image")
const links = ["images/image-product-1.jpg", "images/image-product-2.jpg", "images/image-product-3.jpg", "images/image-product-4.jpg"]

function activeImage () {
    secondaryImages.forEach(item => {
        item.classList.remove("image-active")
        item.classList.remove("selected")
    })
}

function showProductContent (i = 0) {
    contentImage.src = links[i]
    secondaryImages[i].classList.add("image-active")
    secondaryImages[i].classList.add("selected")
}

secondaryImages.forEach((image, index) => {
    image.addEventListener("click", () => {
        activeImage()
        showProductContent(index)
    })
})

// Add items cart

const quantitySelector = Array.from(document.querySelectorAll(".quantity-selector"))
let quantity = 0
let frontDisplay = document.querySelector(".quantity")

function modifyQuantity (i) {
        if (i === 0) {
            quantity--
        }
        else {
            quantity++
        }
}



quantitySelector.forEach((selector, index) => {
    selector.addEventListener("click", () => {
        modifyQuantity(index)
        frontDisplay.innerHTML = quantity
    })
})




