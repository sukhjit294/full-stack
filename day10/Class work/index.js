let data = [
    {
        "id": 1,
        "name": "Wireless Bluetooth Headphones",
        "category": "Electronics",
        "price": 49.99,
        "rating": 4.5,
        "image": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQI2yaBrsOhg60x5FPzVUiINeZVKQdCQn58PkSVcFW-htMNxKHmDlWa2sHDc814ubs5q8zKmxyxZDaJv9EfY2zUeIZTfe2NLXxmpz3xKDLa3oUoybYwyZbD"
    },
    {
        "id": 2,
        "name": "Gaming Mouse",
        "category": "Electronics",
        "price": 29.99,
        "rating": 4.2,
        "image": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTdeYUxNZtGDEGOk6UWww1m60ZKYwb9UcLbe-6Wc4sq6a5rMK5es6xPtksq6Eb2KrsxFJk9vI-2BQyW4QPOyGXaG6bZ-wXZjfqKhiMJVRGCmOKoXzzwQHslBQ"
    },
    {
        "id": 3,
        "name": "Mechanical Keyboard",
        "category": "Electronics",
        "price": 79.99,
        "rating": 4.7,
        "image": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQd3CcNlyz7VcYXI76DnDqd8VFFZVosP2X-R_bT67iN2OrtS5uQPjju96dTtF_FOhaotYqYSkoCOgS5SqTLrd0CISCtvyMZ2dViDe6cAY7ESGZbpW70As2WKDE"
    },
    {
        "id": 4,
        "name": "Smartwatch",
        "category": "Wearable",
        "price": 199.99,
        "rating": 4.8,
        "image": "https://m.media-amazon.com/images/I/71JU-bUt-sL.jpg"
    },
    {
        "id": 5,
        "name": "Running Shoes",
        "category": "Fashion",
        "price": 59.99,
        "rating": 4.3,
        "image": "https://assets.adidas.com/images/w_600,f_auto,q_auto/8db7a22fd8a14673a4d95c38624139ca_9366/Galaxy_7_Running_Shoes_Black_ID8765_HM1.jpg"
    },
    {
        "id": 6,
        "name": "Leather Wallet",
        "category": "Fashion",
        "price": 19.99,
        "rating": 4.0,
        "image": "https://m.media-amazon.com/images/I/81WIcyHQ7oL.AC_UY1100.jpg"
    },
    {
        "id": 7,
        "name": "Digital Camera",
        "category": "Electronics",
        "price": 349.99,
        "rating": 4.6,
        "image": "https://cdn.cinemacenter.in/image/cache/catalog/images/0021038_sony-zv-1-digital-camera_500-500x500.jpeg.webp"
    },
    {
        "id": 8,
        "name": "Backpack",
        "category": "Accessories",
        "price": 39.99,
        "rating": 4.4,
        "image": "https://m.media-amazon.com/images/I/71qpXciYP1L.jpg"
    },
    {
        "id": 9,
        "name": "Sunglasses",
        "category": "Fashion",
        "price": 24.99,
        "rating": 4.1,
        "image": "https://d3995ea24pmi7m.cloudfront.net/media/catalog/product/M/8/M8022BR1V_1_lar.jpg"
    },
    {
        "id": 10,
        "name": "Water Bottle",
        "category": "Home & Kitchen",
        "price": 14.99,
        "rating": 4.2,
        "image": "https://rukminim2.flixcart.com/image/850/1000/l4bn5ow0/bottle/6/c/9/1000-bpa-free-drinking-water-bottle-with-time-marker-straw-for-original-imagf8npfztmb3qg.jpeg?q=20&crop=false"
    },
    {
        "id": 11,
        "name": "Bluetooth Speaker",
        "category": "Electronics",
        "price": 59.99,
        "rating": 4.5,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuAvU3-uz13LNVhjc6HCKGVREFiseFmVfRHA&s"
    },
    {
        "id": 12,
        "name": "Electric Kettle",
        "category": "Home & Kitchen",
        "price": 34.99,
        "rating": 4.6,
        "image": "https://m.media-amazon.com/images/I/51Q11RNy8dL.AC_UF894,1000_QL80.jpg"
    },
    {
        "id": 13,
        "name": "Portable Power Bank",
        "category": "Electronics",
        "price": 39.99,
        "rating": 4.3,
        "image": "https://www.ubuy.co.in/productimg/?image=aHR0cHM6Ly9pbWFnZXMtY2RuLnVidXkuY28uaW4vNjVmOTA4NDkyMzFlMDEyMGMzMjViN2UzLXBvcnRhYmxlLWNoYXJnZXItcG93ZXItYmFuay0yNTgwMG1haC5qcGc.jpg"
    },
    {
        "id": 14,
        "name": "Smart LED Bulb",
        "category": "Home & Kitchen",
        "price": 19.99,
        "rating": 4.7,
        "image": "https://m.media-amazon.com/images/I/51yBOvORkPL.jpg"
    },
    {
        "id": 15,
        "name": "Noise Cancelling Earbuds",
        "category": "Electronics",
        "price": 89.99,
        "rating": 4.8,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2QL_OWaxEwuyQMUrYgVwoV9eTsv_hlzcWrg&s"
    },
    {
        "id": 16,
        "name": "Travel Pillow",
        "category": "Accessories",
        "price": 22.99,
        "rating": 4.2,
        "image": "https://rukminim2.flixcart.com/image/850/1000/kgjqefk0/neck-pillow-eye-shade/z/b/b/travel-neck-pillow-unisex-u-shaped-micro-fibre-soft-cushions-original-imafwr8agyk7dt8c.jpeg?q=90&crop=false"
    },
    {
        "id": 17,
        "name": "Yoga Mat",
        "category": "Fitness",
        "price": 29.99,
        "rating": 4.5,
        "image": "https://www.niviasports.com/cdn/shop/files/1_f74628ac-df66-4c71-b112-fd8253ce175a.jpg?v=1716799881"
    },
    {
        "id": 18,
        "name": "Men's Wrist Watch",
        "category": "Fashion",
        "price": 129.99,
        "rating": 4.6,
        "image": "https://lorenzindia.com/cdn/shop/files/MK-1065A_1-PhotoRoom.png?v=1695797189"
    },
    {
        "id": 19,
        "name": "Wireless Charger",
        "category": "Electronics",
        "price": 27.99,
        "rating": 4.3,
        "image": "https://m.media-amazon.com/images/I/61oIAKY9s1L.jpg"
    },
    {
        "id": 20,
        "name": "Graphic T-Shirt",
        "category": "Fashion",
        "price": 19.99,
        "rating": 4.1,
        "image": "https://www.hijibizi.in/cdn/shop/products/WhatsAppImage2022-11-02at22.20.19_1.jpg?v=1667718907&width=1445"
    }
];

let searchInput = document.getElementById("search");
let sortSelect = document.getElementById("sort");
let filterSelect = document.getElementById("filter");
let productsContainer = document.getElementById("products");
let cart = JSON.parse(localStorage.getItem("CartData")) || [];

let debounceTimer;


function renderProducts(arr) {
    productsContainer.innerHTML = "";
    document.querySelector(".loader-container").style.display = "none"

    arr.forEach((el, index) => {
        let productBox = document.createElement("div");
        productBox.className = "product-box";

        let heading = document.createElement("h3");
        heading.innerText = el.category;

        let img = document.createElement("img");
        img.src = el.image;

        let name = document.createElement("p");
        name.innerText = el.name;

        let price = document.createElement("p");
        price.innerText = `Price: $${el.price}`;

        let rating = document.createElement("p");
        rating.innerText = `Rating: ${el.rating}`;

        let button = document.createElement("button");
        button.innerText = "Add to Cart";
        button.addEventListener("click", () => {
            addToCart(el);
        });

        productBox.append(heading, img, name, price, rating, button);
        productsContainer.append(productBox);
    });
}

function handleSearch() {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
        let searchTerm = searchInput.value.toLowerCase();
        let filteredProducts = data.filter(product => {
            return product.name.toLowerCase().includes(searchTerm);
        });
        renderProducts(filteredProducts);
    }, 3000);
}

function handleSort() {
    let sortedProducts = [...data];
    let sortBy = sortSelect.value;

    if (sortBy === "priceLowHigh") {
        sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortBy === "priceHighLow") {
        sortedProducts.sort((a, b) => b.price - a.price);
    } else if (sortBy === "ratingHighLow") {
        sortedProducts.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "ratingLowHigh") {
        sortedProducts.sort((a, b) => a.rating - b.rating);
    }

    renderProducts(sortedProducts);
}


function handleFilter() {
    let selectedCategory = filterSelect.value;
    let filteredProducts = selectedCategory === "all"
        ? data
        : data.filter(product => product.category === selectedCategory);

    selectedCategory == "all" ? data : data.filter(product => product.category === selectedCategory);


    renderProducts(filteredProducts);
}

function addToCart(product) {
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].id == product.id) {
            return alert(`${cart[i].name} is already added in cart`);
        }
    }
    cart.push(product);
    localStorage.setItem("CartData", JSON.stringify(cart));
    alert(`${product.name} added to cart!`);
    console.log("Cart:", cart);
}

searchInput.addEventListener("input", handleSearch);
sortSelect.addEventListener("change", handleSort);
filterSelect.addEventListener("change", handleFilter);

// Initial render
setTimeout(() => {
    renderProducts(data);
}, 5000)

function cartPage() {
    window.location.href = "cart.html";
}