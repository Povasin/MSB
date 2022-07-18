const bt_minus = document.querySelectorAll(".bt_minus")
const bt_plus = document.querySelectorAll(".bt_plus")
const input = document.querySelectorAll(".quantity")
const next= document.querySelectorAll(".next")
const prev = document.querySelectorAll(".prev")
const sliderLine = document.querySelectorAll(".slider-line")
const sliderhtml = document.querySelector(".slider")
const slider__img = document.querySelectorAll(".slider__img")
const main__img = document.querySelector(".main__img")
let furnitureSlider = 0;
let slider = 0
const furnitureMass= [
    {
        img: "../main/chair.webp",
        name: "офисный стул",
        discount: "800",
        price:"500₽",
        star: "★★★★☆"
    },
    {
        img: "../main/table.webp",
        name: "офисный стол",
        discount: "1000",
        price:"700₽",
        star: "★★★☆☆"
    },
    {
        img: "../main/bad.webp",
        name: "кровать",
        discount: "1500",
        price:"1200₽",
        star: "★★★★★"
    },
    {
        img: "../main/chair.webp",
        name: "офисный стул",
        discount: "800",
        price:"500₽",
        star: "★★★★☆"
    },
    {
        img: "../main/table.webp",
        name: "офисный стол",
        discount: "1000",
        price:"700₽",
        star: "★★★☆☆"
    },
    {
        img: "../main/bad.webp",
        name: "кровать",
        discount: "1500",
        price:"1200₽",
        star: "★★★★★"
    }
]
function render() {
    furnitureMass.forEach(item => {
        sliderLine[1].insertAdjacentHTML("beforeend", ` <a href="#" class="card">
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
        </div>
        <button class="card__bag">+</button>
    </a>`)
    })
}
render()
next[0].addEventListener('click', ()=>{
    if (document.documentElement.clientWidth > 1024) {
        if (slider < 100 && slider >= 0) {
            slider+= 100
            sliderLine[0].style.top = -slider + '%' 
            next[0].classList.remove("active")
            prev[0].classList.add("active")
    
        } 
    } else {
        if (slider < 200 && slider >= 0) {
            slider+= 100
            sliderLine[0].style.top = -slider + '%' 
            next[0].classList.remove("active")
            prev[0].classList.add("active")
            if (slider == 200) {
                next[0].classList.remove("active")
                prev[0].classList.add("active")
            } else if (slider == 100) {
                prev[0].classList.add("active")
                next[0].classList.add("active")
            }
        } 
    }

})
prev[0].addEventListener('click', ()=>{
    if (document.documentElement.clientWidth > 1024) {
        if (slider < 101 && slider > 0 ) {
            slider-=100
            sliderLine[0].style.top = slider + '%' 
            prev[0].classList.remove("active")
            next[0].classList.add("active")
        }
    }  else{
        if (slider < 201 && slider > 0 ) {
            slider-=100
            sliderLine[0].style.top = -slider + '%' 
            prev[0].classList.remove("active")
            next[0].classList.add("active")
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
sliderhtml.addEventListener("click", (e)=>{
    if (e.target.className == "slider__img") {
        for (let i = 0; i < slider__img.length; i++) {
            slider__img[i].classList.remove("active")
        }
        e.target.classList.add("active")
        main__img.src = e.target.src
    }   
})
next[1].addEventListener('click', ()=>{
    if (document.documentElement.clientWidth > 851) {
        if (furnitureSlider < 100 && furnitureSlider >= 0) {
            furnitureSlider+= 100
            sliderLine[1].style.left = -furnitureSlider + '%' 
            next[1].classList.remove("next__active")
            prev[1].classList.add("prev__active")
    
        } 
    } else {
        if (furnitureSlider < 200 && furnitureSlider >= 0) {
            furnitureSlider+= 100
            sliderLine[1].style.left = -furnitureSlider + '%' 
            if (furnitureSlider == 200) {
                next[1].classList.remove("next__active")
                prev[1].classList.add("prev__active")
            } else if (furnitureSlider == 100) {
                prev[1].classList.add("prev__active")
                next[1].classList.add("next__active")
            }
        } 
    }

})
prev[1].addEventListener('click', ()=>{
    if (document.documentElement.clientWidth > 851) {
        if (furnitureSlider < 101 && furnitureSlider > 0 ) {
            furnitureSlider-=100
            sliderLine[1].style.left = -furnitureSlider + '%' 
            prev[1].classList.remove("prev__active")
            next[1].classList.add("next__active")
        }
    }  else{
        if (furnitureSlider < 201 && furnitureSlider > 0 ) {
            furnitureSlider-=100
            sliderLine[1].style.left = -furnitureSlider + '%' 
            if (furnitureSlider == 0) {
                prev[1].classList.remove("prev__active")
                next[1].classList.add("next__active")
            } else if (furnitureSlider == 100) {
                prev[1].classList.add("prev__active")
                next[1].classList.add("next__active")
            }
        }
    }
})
bt_minus[0].addEventListener("click", ()=>{
    input[0].value = +input[0].value - 1 < 1 ? 1 : +input[0].value - 1;
})
bt_plus[0].addEventListener("click", ()=>{
    input[0].value = +input[0].value + 1;;
})
bt_minus[1].addEventListener("click", ()=>{
    input[1].value = +input[1].value - 1 < 1 ? 1 : +input[1].value - 1;
})
bt_plus[1].addEventListener("click", ()=>{
    input[1].value = +input[1].value + 1;;
})