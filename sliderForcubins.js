const bt_minus = document.querySelector(".bt_minus")
const bt_plus = document.querySelector(".bt_plus")
const bt_minusMonth = document.querySelector(".bt_minusMonth")
const bt_plusMonth = document.querySelector(".bt_plusMonth")
const input = document.querySelectorAll(".quantity")
const next= document.querySelector(".next")
const prev = document.querySelector(".prev")
const sliderLine = document.querySelector(".slider-line")
const sliderhtml = document.querySelector(".slider")
const slider__img = document.querySelectorAll(".slider__img")
const main__img = document.querySelector(".main__img")
const more = document.querySelector(".more")
const star = document.querySelector(".star")
const h1 = document.querySelector("h1")
const price = document.querySelector(".price")
const discount = document.querySelector(".discount")
const HrefForJs = document.querySelector(".HrefForJs")
let slider = 0
next.addEventListener('click', ()=>{
    if (document.documentElement.clientWidth > 1024) {
        if (slider < 100 && slider >= 0) {
            slider+= 100
            sliderLine.style.top = -slider + '%' 
            next.classList.remove("active")
            prev.classList.add("active")
    
        } 
    } else {
        if (slider < 200 && slider >= 0) {
            slider+= 100
            sliderLine.style.top = -slider + '%' 
            next.classList.remove("active")
            prev.classList.add("active")
            if (slider == 200) {
                next.classList.remove("active")
                prev.classList.add("active")
            } else if (slider == 100) {
                prev.classList.add("active")
                next.classList.add("active")
            }
        } 
    }

})
prev.addEventListener('click', ()=>{
    if (document.documentElement.clientWidth > 1024) {
        if (slider < 101 && slider > 0 ) {
            slider-=100
            sliderLine.style.top = slider + '%' 
            prev.classList.remove("active")
            next.classList.add("active")
        }
    }  else{
        if (slider < 201 && slider > 0 ) {
            slider-=100
            sliderLine.style.top = -slider + '%' 
            prev.classList.remove("active")
            next.classList.add("active")
            if (furnitureSlider == 0) {
                prev.classList.remove("prev__active")
                next.classList.add("next__active")
            } else if (furnitureSlider == 100) {
                prev.classList.add("prev__active")
                next.classList.add("next__active")
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

function bt_minusFunc(number) {
    input[number].value = +input[number].value - 1 < 1 ? 1 : +input[number].value - 1;
    number == 0 ?  cubinsItem.inputkol = input[number].value : cubinsItem.inputMonth = input[number].value
}
function bt_plusFunc(number) {
    input[number].value = +input[number].value + 1;
    number == 0 ?  cubinsItem.inputkol = input[number].value : cubinsItem.inputMonth = input[number].value
}
bt_minus.addEventListener("click", ()=>bt_minusFunc(0))
bt_plus.addEventListener("click", ()=>bt_plusFunc(0))
bt_minusMonth.addEventListener("click", ()=>bt_minusFunc(1))
bt_plusMonth.addEventListener("click", ()=>bt_plusFunc(1))
let cubinsItem ={
        img: main__img.src,
        name: h1.textContent,
        discount: +discount.textContent,
        price: +price.textContent,
        href: HrefForJs.href,
        inputkol : input[0].value,
        inputMonth : input[1].value,
        active: false
    }

let jsonMass = JSON.parse(localStorage.getItem("bagMass")) || []
JSON.parse(localStorage.getItem("bagMass")).forEach(item=>{
        if (cubinsItem.name == item.name) {
            cubinsItem.active = true
            more.classList.add("moreActive")
            more.innerText = "услуга добавлена"
        }
})


more.addEventListener("click", ()=>{
    if (!cubinsItem.active) {
        jsonMass.push(cubinsItem)
        services__sum[1].innerText  = jsonMass.length
        services__sum[0].innerText  = jsonMass.length
        localStorage.setItem("bagMass", JSON.stringify(jsonMass));
        more.classList.add("moreActive")
        more.innerText = "услуга добавлена"
    }
    cubinsItem.active = true
})

