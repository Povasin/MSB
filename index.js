const next = document.querySelectorAll(".next")
const prev = document.querySelectorAll(".prev")
const choose__img = document.querySelector(".choose__img")
const choose__more = document.querySelectorAll(".choose__more")
const furniture__slider = document.querySelector(".furniture__slider")
let furnitureSlider = 0;
let katalogSlider = 0;
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

function renderfurniture(mass) {
    mass.forEach(item => {
        furniture__slider.insertAdjacentHTML("beforeend", ` <a href="${item.href}" class="card">
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
    </a>`)
    });
}

renderfurniture(furnitureMass)
next[0].addEventListener('click', ()=>{
    if (document.documentElement.clientWidth > 851) {
        if (furnitureSlider < 100 && furnitureSlider >= 0) {
            furnitureSlider+= 100
            furniture__slider.style.left = -furnitureSlider + '%' 
            next[0].classList.remove("next__active")
            prev[0].classList.add("prev__active")
    
        } 
    } else {
        if (furnitureSlider < 200 && furnitureSlider >= 0) {
            furnitureSlider+= 100
            furniture__slider.style.left = -furnitureSlider + '%' 
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
            furniture__slider.style.left = -furnitureSlider + '%' 
            prev[0].classList.remove("prev__active")
            next[0].classList.add("next__active")
        }
    }  else{
        if (furnitureSlider < 201 && furnitureSlider > 0 ) {
            furnitureSlider-=100
            furniture__slider.style.left = -furnitureSlider + '%' 
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
            katalog__slider.style.left = -katalogSlider + '%' 
            prev[1].style.background = "#5134c4"
        }
    } else if (document.documentElement.clientWidth < 851 && document.documentElement.clientWidth > 440) {
        if (katalogSlider < 200 ) {
            katalogSlider+=100
            katalog__slider.style.left = -katalogSlider + '%' 
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
            katalog__slider.style.left = -katalogSlider + '%' 
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
            katalog__slider.style.left = -katalogSlider + '%' 
            prev[1].style.background = "#cacaca"
        }
    } else if (document.documentElement.clientWidth < 851 && document.documentElement.clientWidth > 440) {
        if (katalogSlider < 201 && katalogSlider > 0 ) {
            katalogSlider-=100
            katalog__slider.style.left = -katalogSlider + '%' 
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
            katalog__slider.style.left = -katalogSlider + '%' 
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


    document.documentElement.clientWidth > 850 ? choose__more[1].addEventListener("click", ()=>{
        choose__img.innerHTML  = `<img class="choose__img" src="${choose__more[1].value}">`;
    }) : choose__more[0].addEventListener("click", ()=>{
        choose__img.innerHTML  = `<img class="choose__img" src="${choose__more[0].value}">`;
    })

    console.log(choose__more);