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
const cartListFilled = document.querySelector(".cart-list-filled")
const cartListEmpty = document.querySelector(".cart-list-empty")
const cartListCta = document.querySelector(".cart-list-CTA")
const addToCartCta = document.querySelector(".add-to-cart-cta")

let quantity = 0
let price = 0

let frontDisplay = Array.from(document.querySelectorAll(".quantity"))


function modifyQuantity (i) {
        if (i === 0 && quantity !== 0) {
            quantity--
            console.log(quantity)
            frontDisplay.innerHTML = quantity
        } else if (i === 1) {
            quantity++
            console.log("lol2")
            console.log(quantity)
        }
}

function displayCartList () {

    if (quantity >= 1) {
        cartListEmpty.style.display = "none"
        cartListFilled.style.display = "flex"
        cartListCta.style.display = "flex"
        console.log(quantity)
        console.log("if")
    }
    else {
        cartListEmpty.style.display = "flex"
        cartListFilled.style.display = "none"
        cartListCta.style.display = "none"
        console.log(quantity)
        console.log("else")
    }
}


quantitySelector.forEach((selector, index) => {
    selector.addEventListener("click", () => {
        modifyQuantity(index)
        frontDisplay.innerHTML = quantity
        for (const i in frontDisplay) {
            frontDisplay[i].innerHTML = quantity
        }
    })
})


addToCartCta.addEventListener("click", () => {
    displayCartList()
})




