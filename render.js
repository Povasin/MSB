const katalog__slider = document.querySelector(".katalog__slider")
const cubinsMass = [
    {
        href: "",
        img: "./main/cubinsForDress.webp",
        name: "бытовка раздевалка",
        discount: "9000",
        price:"8000₽",
        star: "★★★★☆"
    },
    {
        href: "",
        img: "./main/cubinsForLive.webp",
        name: "бытовка для проживания",
        discount: "9000",
        price:"7500₽",
        star: "★★★★★"
    },
    {
        href: "",
        img: "./main/cubinsForWork.webp",
        name: "бытовки прорабские",
        discount: "10000",
        price:"9000₽",
        star: "★★★★☆"
    },
    {
        href: "",
        img: "./main/cubinsForDress.webp",
        name: "бытовка раздевалка",
        discount: "9000",
        price:"8000₽",
        star: "★★★★☆"
    },
    {
        href: "",
        img: "./main/cubinsForLive.webp",
        name: "бытовка для проживания",
        discount: "9000",
        price:"7500₽",
        star: "★★★☆☆"
    },
    {
        href: "",
        img: "./main/cubinsForWork.webp",
        name: "бытовки прорабские",
        discount: "10000",
        price:"9000₽",
        star: "★★★★★"
    },
]

function renderKatalog(mass) {
    mass.forEach(item => {
        katalog__slider.insertAdjacentHTML("beforeend", ` <a href="${item.href}" class="card">
        <div class="fd-row">
            <p class="star">${item.star}</p>
            <p class="card__arrow">→</p>
        </div>
        <img class="card__img" src="${item.img}" alt="${item.name}">
        <p class="rent">Аренда</p>
        <p class="info">${item.name}</p>          
        <div class="card__sale">
            <div class="fd-col">
                <p class="discount">${item.discount}</p>
                <p class="card__price">${item.price}</p> 
            </div>
            <button class="card__bag"><img src="./main/bag-_1_-1.webp" alt="корзина"></button>
        </div> 
    </a>`)
    });
}
renderKatalog(cubinsMass)