let furnitureSlider = 0 
let katalogSlider = 0
const sliderLine = document.querySelectorAll(".slider-line")
const next = document.querySelectorAll(".next")
const prev = document.querySelectorAll(".prev")
const services = document.querySelector(".services")
const main = document.querySelector("main")
const answer__question = document.querySelectorAll(".answer__question")
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
        img: "./main/cubinsForWorkKatalog.webp",
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
        img: "./main/cubinsForWorkKatalog.webp",
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
                <img src="./main/fiveStars.webp" alt="">
                <p class="card__arrow">→</p>
            </div>
            <img class="card__img" src="${item.img}">
            <p class="rent">Аренда</p>
            <p class="info">${item.name}</p>
            <p class="discount">${item.discount}</p>
            <p class="card__price">${item.price}</p> 
            <button class="card__bag">+</button>
        </a>`) :
            sliderLine[sliderNumber].insertAdjacentHTML("beforeend", ` <a href="${item.href}" class="card">
            <div class="fd-row">
                <img class="stars" src="./main/fiveStars.webp" alt="">
                <p class="card__arrow">→</p>
            </div>
            <img class="card__img" src="${item.img}">
            <p class="rent">Аренда</p>
            <p class="info">${item.name}</p>
            <p class="discount">${item.discount}</p>
            <div class="fd-row">
                <p class="card__price">${item.price}</p>
                <button class="card__bag"><img src="./main/bag-_1_-1.webp"></button>
            </div> 
        </a>`)


    });
}
render(furnitureMass, 0)
render(cubinsMass, 1)
next[0].addEventListener('click', ()=>{
    if (furnitureSlider < 100 && furnitureSlider >= 0) {
        furnitureSlider+= 100
        sliderLine[0].style.left = -furnitureSlider + '%' 
        next[0].style.border = "1.5px solid gray"
        next[0].style.borderImageSource = "none;"
        next[0].style.webkitTextFillColor = "gray";
        prev[0].style.border = "1.5px solid"
        prev[0].style.borderImageSource = "linear-gradient(90deg, #5134c4,#773cbc,#b856d4);"
        prev[0].style.webkitTextFillColor = "transparent";

    } 
})
prev[0].addEventListener('click', ()=>{
    if (furnitureSlider < 101 && furnitureSlider > 0 ) {
        furnitureSlider-=100
        sliderLine[0].style.left = -furnitureSlider + '%' 
        prev[0].style.border = "1.5px solid gray"
        prev[0].style.borderImageSource = "none;"
        prev[0].style.webkitTextFillColor = "gray";
        next[0].style.border = "1.5px solid"
        next[0].style.borderImageSource = "linear-gradient(90deg, #5134c4,#773cbc,#b856d4);"
        next[0].style.webkitTextFillColor = "transparent";
    }
})

next[1].addEventListener("click", ()=>{
    if (katalogSlider < 100 ) {
        katalogSlider+=100
        next[1].style.background = "#cacaca"
        sliderLine[1].style.left = -katalogSlider + '%' 
        prev[1].style.background = "linear-gradient(90deg, #5134c4,#773cbc,#b856d4);"
    }
})
prev[1].addEventListener("click", ()=>{
    if (katalogSlider < 101 && katalogSlider > 0 ) {
        katalogSlider-=100
        prev[1].style.background = "#cacaca"
        sliderLine[1].style.left = -katalogSlider + 'px' 
        next[1].style.background = "linear-gradient(90deg, #5134c4,#773cbc,#b856d4);"
    }
})

window.onscroll = function showServices() {
    if (window.pageYOffset > 103) {
        services.classList.add("services__fixed")
        main.classList.add("main_fixed")
    } else{
        services.classList.remove("services__fixed")
        main.classList.remove("main_fixed")
    }
}

answer__question.forEach(item=>{
    item.addEventListener("click", (e)=>{
        let content = item.nextElementSibling
        if (e.target.className == "answer__open") {
            if (content.classList.contains("active")) {
                e.target.style.transform = 'rotate(' + 0 + 'deg)'
                content.classList.remove("active")
            } else{
                e.target.style.transform = 'rotate(' + 180 + 'deg)'
                content.classList.add("active")
            }
        }
    })
})
  