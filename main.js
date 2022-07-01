let furnitureSlider = 0 
let katalogSlider = 0
const sliderLine = document.querySelectorAll(".slider-line")
const next = document.querySelectorAll(".next")
const prev = document.querySelectorAll(".prev")
const services = document.querySelector(".services")
const main = document.querySelector("main")
const answer__question = document.querySelectorAll(".answer__question")
const sidebar__open = document.querySelector(".sidebar__open")
const sidebar__close = document.querySelector(".sidebar__close")
const sidebar = document.querySelector(".sidebar")
const choose__img = document.querySelector(".choose__img")
const choose__more = document.querySelector(".choose__more")
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
                <img src="./main/fiveStars.webp" alt="">
                <p class="card__arrow">→</p>
            </div>
            <img class="card__img" src="${item.img}">
            <p class="rent">Аренда</p>
            <p class="info">${item.name}</p>
            <div class="fd-row">
                <div class="fd-col">
                    <p class="discount">${item.discount}</p>
                    <p class="card__price">${item.price}</p> 
                </div>
            </div>
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
            <div class="fd-row">
                <div class="fd-col">
                    <p class="discount">${item.discount}</p>
                    <p class="card__price">${item.price}</p> 
                </div>
                <button class="card__bag"><img src="./main/bag-_1_-1.webp"></button>
            </div> 
        </a>`)


    });
}
render(furnitureMass, 0)
render(cubinsMass, 1)
sidebar__open.addEventListener("click",()=>{ sidebar.style.right = 0 + "%"})
sidebar__close.addEventListener("click", ()=>{ sidebar.style.right = -50 + "%"})
next[0].addEventListener('click', ()=>{
    if (document.documentElement.clientWidth > 851) {
        if (furnitureSlider < 100 && furnitureSlider >= 0) {
            furnitureSlider+= 100
            sliderLine[0].style.left = -furnitureSlider + '%' 
            next[0].classList.remove("next__active")
            prev[0].classList.add("prev__active")
    
        } 
    } else {
        if (furnitureSlider < 200 && furnitureSlider >= 0) {
            furnitureSlider+= 100
            sliderLine[0].style.left = -furnitureSlider + '%' 
            if (furnitureSlider == 200) {
                next[0].classList.remove("next__active")
                prev[0].classList.add("prev__active")
            } else if (furnitureSlider == 100) {
                prev[0].classList.add("prev__active")
                next[0].classList.add("next__active")
            }
        } 
    }

})
prev[0].addEventListener('click', ()=>{
    if (document.documentElement.clientWidth > 851) {
        if (furnitureSlider < 101 && furnitureSlider > 0 ) {
            furnitureSlider-=100
            sliderLine[0].style.left = -furnitureSlider + '%' 
            prev[0].classList.remove("prev__active")
            next[0].classList.add("next__active")
        }
    }  else{
        if (furnitureSlider < 201 && furnitureSlider > 0 ) {
            furnitureSlider-=100
            sliderLine[0].style.left = -furnitureSlider + '%' 
            if (furnitureSlider == 0) {
                prev[0].classList.remove("prev__active")
                next[0].classList.add("next__active")
            } else if (furnitureSlider == 100) {
                prev[0].classList.add("prev__active")
                next[0].classList.add("next__active")
            }
        }
    }
})

next[1].addEventListener("click", ()=>{
    if (document.documentElement.clientWidth > 851) {
        if (katalogSlider < 100 ) {
            katalogSlider+=100
            next[1].style.background = "#cacaca"
            sliderLine[1].style.left = -katalogSlider + '%' 
            prev[1].style.background = "#5134c4"
        }
    } else if (document.documentElement.clientWidth < 851 && document.documentElement.clientWidth > 440) {
        if (katalogSlider < 200 ) {
            katalogSlider+=100
            sliderLine[1].style.left = -katalogSlider + '%' 
            if (katalogSlider == 200) {
                next[1].style.background = "#cacaca"
                prev[1].style.background = "#5134c4"
            }else if (katalogSlider == 100) {
                prev[1].style.background = "#5134c4"
                next[1].style.background = "#5134c4"
            }
        }
    } else if (document.documentElement.clientWidth < 440) {
        if (katalogSlider < 500 ) {
            katalogSlider+=100
            sliderLine[1].style.left = -katalogSlider + '%' 
            if (katalogSlider == 500) {
                next[1].style.background = "#cacaca"
                prev[1].style.background = "#5134c4"
            }else if (katalogSlider == 100 || katalogSlider == 200 || katalogSlider == 300 || katalogSlider == 400 || katalogSlider == 500) {
                prev[1].style.background = "#5134c4"
                next[1].style.background = "#5134c4"
            }
        } 
    }        
})
prev[1].addEventListener("click", ()=>{
    if (document.documentElement.clientWidth > 851) {
        if (katalogSlider < 101 && katalogSlider > 0 ) {
            katalogSlider-=100
            next[1].style.background = "#5134c4"
            sliderLine[1].style.left = -katalogSlider + '%' 
            prev[1].style.background = "#cacaca"
        }
    } else if (document.documentElement.clientWidth < 851 && document.documentElement.clientWidth > 440) {
        if (katalogSlider < 201 && katalogSlider > 0 ) {
            katalogSlider-=100
            sliderLine[1].style.left = -katalogSlider + '%' 
            if (katalogSlider == 0) {
                prev[1].style.background = "#cacaca"
            }else if (katalogSlider == 100) {
                prev[1].style.background = "#5134c4"
                next[1].style.background = "#5134c4"
            }
        }
    } else if (document.documentElement.clientWidth < 440) {
        if (katalogSlider < 501 && katalogSlider > 0) {
            katalogSlider-=100
            sliderLine[1].style.left = -katalogSlider + '%' 
            if (katalogSlider == 0) {
                next[1].style.background = "#5134c4"
                prev[1].style.background = "#cacaca"
            }else if (katalogSlider == 100 || katalogSlider == 200 || katalogSlider == 300 || katalogSlider == 400 || katalogSlider == 500) {
                prev[1].style.background = "#5134c4"
                next[1].style.background = "#5134c4"
            }
        } 
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
choose__more.addEventListener("click", ()=>{
    choose__img.innerHTML  = `<img class="choose__img" src="${choose__more.value}">`;
})
  