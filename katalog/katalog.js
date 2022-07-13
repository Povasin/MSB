//TODO: доделать фугкцие filter
const katalog__filter = document.querySelector(".katalog__filter")
const katalog__price = document.querySelectorAll(".katalog__price")
const katalogStar = document.querySelector(".katalog-star")
const katalogSize = document.querySelector(".katalog-size")
const katalog__slider = document.querySelector(".katalog__slider")
const sliderOne = document.getElementById("slider-1");
const sliderTwo = document.getElementById("slider-2");
const sliderTrack = document.querySelector(".slider-track");
const sliderMaxValue = document.getElementById("slider-1").max;
const katalog__Checkbox = document.querySelectorAll(".katalog__Checkbox")
const clear = document.getElementById("clear")
const firstFilter = document.getElementById("firstFilter")
let minGap = 0;

window.addEventListener('mouseup', (e) => {
    if (e.target.id === "slider-1" || e.target.id === "slider-2") {
        renderKatalog(cubinsMass)
    }
})

const cubinsMass = [
    {
        href: "",
        img: "/main/cubinsForWork.webp",
        name: "бытовки прорабские1",
        discount: "10000",
        price: 9000,
        star: "★★★★☆",
        size: "6х2,4х2,4м",
        content: 10
    },
    {
        href: "",
        img: "/main/cubinsForWork.webp",
        name: "бытовки прорабские2",
        discount: "10000",
        price: 9000,
        star: "★★★★★",
        size: "6х2,4х2,4м",
        content: 10
    },
    {
        href: "",
        img: "/main/cubinsForDress.webp",
        name: "бытовка раздевалка3",
        discount: "9000",
        price: 8000,
        star: "★★★★☆",
        size: "6х2,4х2,50м",
        content: 8
    },
    {
        href: "",
        img: "/main/cubinsForDress.webp",
        name: "бытовка раздевалка4",
        discount: "9000",
        price: 8000,
        star: "★★★★☆",
        size: "6х2,4х2,50м",
        content: 10
    },
    {
        href: "",
        img: "/main/cubinsForLive.webp",
        name: "бытовка для проживания5",
        discount: "9000",
        price: 7500,
        star: "★★★★★",
        size: "2,5х2,5х3,0м",
        content: 9
    },
    {
        href: "",
        img: "/main/cubinsForLive.webp",
        name: "бытовка для проживания6",
        discount: "9000",
        price: 7500,
        star: "★★★☆☆",
        size: "2,5х2,5х3,0м",
        content: 8
    },
]

const starsChecked = {
    "★★★★★": false,
    "★★★★☆": false,
    "★★★☆☆": false,
    "★★☆☆☆": false,
    "★☆☆☆☆": false
}
katalogStar.addEventListener("click", (e)=>{
    if (e.target.className == "katalog__Checkbox" ) {
        starsChecked[e.target.value]=e.target.checked
    }
    renderKatalog(cubinsMass)
})
function allStarsFalse() {
    let flag = true;
    let massStars = Object.values(starsChecked)
    massStars.forEach(x=>{
        if (x) {
            flag = false
        }
    })
    return flag
}

function renderKatalog(mass) {
    const filterMass = filter(mass)
    katalog__slider.innerHTML = ''
    filterMass.forEach(item => {
        katalog__slider.insertAdjacentHTML("beforeend", ` <a href="${item.href}" class="card">
        <div class="fd-row">
            <p class="star">${item.star}</p>
            <p class="card__arrow">→</p>
        </div>
        <img class="card__img" src="${location.origin + item.img}" alt="${item.name}">
        <p class="rent">Аренда</p>
        <p class="info">${item.name}</p>          
        <div class="card__sale">
            <div class="fd-col">
                <p class="discount">${item.discount}</p>
                <p class="card__price">${item.price}₽</p> 
            </div>
            <button class="card__bag"><img src="../main/bag-_1_-1.webp" alt="корзина"></button>
        </div> 
    </a>`)
    });
}
slideTwo();
renderKatalog(cubinsMass)

document.querySelector(".filter__open").addEventListener("click", () => { katalog__filter.style.right = 0 + "%" })
document.querySelector(".filter__close").addEventListener("click", () => { katalog__filter.style.right = -50 + "%" })

function inputValue() {
    if (parseInt(sliderTwo.value) >= katalog__price[0].value) {
        sliderOne.value = katalog__price[0].value
        fillColor()
    } else {
        sliderOne.value = katalog__price[0].value
        sliderTwo.value = katalog__price[1].value
        katalog__price[1].value = katalog__price[0].value
        fillColor()
    }
    if (parseInt(sliderOne.value) <= katalog__price[1].value) {
        sliderTwo.value = katalog__price[1].value
        fillColor()
    }

}
function noDigits(event) {
    if ("1234567890".indexOf(event.key) == -1)
        event.preventDefault();
    renderKatalog(cubinsMass)
}

sliderOne.addEventListener("input", (e) => {
    if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
        sliderOne.value = parseInt(sliderTwo.value) - minGap;
    }
    katalog__price[0].value = sliderOne.value;
    fillColor();
})

function slideTwo() {
    if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
        sliderTwo.value = parseInt(sliderOne.value) + minGap;
    }
    katalog__price[1].value = sliderTwo.value;
    fillColor();
}
function fillColor() {
    percent1 = (sliderOne.value / sliderMaxValue) * 100;
    percent2 = (sliderTwo.value / sliderMaxValue) * 100;
    sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}% ,#5134c4 ${percent1}% ,#b856d4 ${percent2}%, #dadae5 ${percent2}%)`;
}



function filter(mass) {
    return mass.filter(item => {
        let trueItem = true;
        trueItem = katalog__price[0].value <= item.price && katalog__price[1].value >= item.price ? true : false
        trueItem = katalog__price[2].value <= item.content && katalog__price[3].value >= item.content ? true : false

        // сортировка по звёздам
        trueItem = starsChecked[item.star] || allStarsFalse()

        return trueItem
        // katalogStar.addEventListener("click", (e)=>{
        //     if (e.target.className == "katalog__Checkbox" ) {
        //         e.target.value == item.star ? true : false         
        //     }
        // })
        
        // if (mass == []) {
        //     katalog__slider.insertAdjacentHTML("beforeend", `<p>По вашему запросу ничего не найдено</p>`)
        // }
        // clear.addEventListener("click", ()=>{
        //     katalog__price[0].value = 1000
        //     katalog__price[1].value = 9000
        //     sliderOne.value = katalog__price[0].value
        //     sliderTwo.value = katalog__price[1].value
        //     fillColor()
        //     katalog__price[2].value = 1
        //     katalog__price[3].value = 10
        //     for (let i = 0; i < katalog__Checkbox.length; i++) {
        //         katalog__Checkbox[i].checked = false
        //     }
        // })
    })
}

firstFilter.addEventListener("click", () => {
    if (firstFilter.value == "cheap") {
        cubinsMass.sort(function (a, b) {
            return a.price - b.price;
        });
    }
    if (firstFilter.value == "expencive") {
        cubinsMass.sort()
    }
    if (firstFilter.value == "popular") {
        cubinsMass.sort(function (a, b) {
            return a.name - b.name;
        });
    }
})
