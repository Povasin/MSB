const sliderLine = document.querySelectorAll(".slider-line")
const furnitureMass= [
    {
        href: "",
        img: "./main/chair.webp",
        name: "офисный стул",
        discount: "800",
        price:"500₽"
    },
    {
        href: "",
        img: "./main/table.webp",
        name: "офисный стол",
        discount: "1000",
        price:"700₽"
    },
    {
        href: "",
        img: "./main/bad.webp",
        name: "кровать",
        discount: "1500",
        price:"1200₽"
    },
    {
        href: "",
        img: "./main/chair.webp",
        name: "офисный стул",
        discount: "800",
        price:"500₽"
    },
    {
        href: "",
        img: "./main/table.webp",
        name: "офисный стол",
        discount: "1000",
        price:"700₽"
    },
    {
        href: "",
        img: "./main/bad.webp",
        name: "кровать",
        discount: "1500",
        price:"1200₽"
    }
]
const cubinsMass = [
    {
        href: "",
        img: "./main/cubinsForDress.webp",
        name: "бытовка раздевалка",
        discount: "9000",
        price:"8000₽"
    },
    {
        href: "",
        img: "./main/cubinsForLive.webp",
        name: "бытовка для проживания",
        discount: "9000",
        price:"7500₽"
    },
    {
        href: "",
        img: "./main/cubinsForWork.webp",
        name: "бытовки прорабские",
        discount: "10000",
        price:"9000₽"
    },
    {
        href: "",
        img: "./main/cubinsForDress.webp",
        name: "бытовка раздевалка",
        discount: "9000",
        price:"8000₽"
    },
    {
        href: "",
        img: "./main/cubinsForLive.webp",
        name: "бытовка для проживания",
        discount: "9000",
        price:"7500₽"
    },
    {
        href: "",
        img: "./main/cubinsForWork.webp",
        name: "бытовки прорабские",
        discount: "10000",
        price:"9000₽"
    },
]

function render(mass, sliderNumber) {
    mass.forEach(item => {
            sliderNumber == 0 ?
            sliderLine[sliderNumber].insertAdjacentHTML("beforeend", ` <a href="${item.href}" class="card">
            <div class="fd-row">
                <p class="star">★★★★☆</p>
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
            </div>
            <button class="card__bag">+</button>
        </a>`) :
            sliderLine[sliderNumber].insertAdjacentHTML("beforeend", ` <a href="${item.href}" class="card">
            <div class="fd-row">
                <p class="star">★★★★☆</p>
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
render(furnitureMass, 0)
render(cubinsMass, 1)