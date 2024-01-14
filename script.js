const list = document.querySelector("ul")
const showAllButton = document.querySelector(".show-all")
const discountButton = document.querySelector(".discount")

function formatValues(value) {

    const newValue = value.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    })

    return newValue
}

function showAll(products) {

    let myLi = ""

    products.forEach(item => {

        myLi = myLi +
            `
            <li>
                <img src=${item.src} alt="${item.alt}">
                <p class="name">${item.name}</p>
                <p class="price">${formatValues(item.price)}</p>
            </li>
        `
    })

    list.innerHTML = myLi
}

function applyDiscount() {

    const newPrice = productsList.map((product) => ({
        ...product,
        price: formatValues(product.price) + " ➜ " + formatValues(product.price * 0.9) // dar 10% de desconto
    }))

    showAll(newPrice)
}


showAllButton.addEventListener("click", () => showAll(productsList))
discountButton.addEventListener("click", applyDiscount)