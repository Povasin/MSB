const bt_minus = document.querySelector(".bt_minus")
const bt_plus = document.querySelector(".bt_plus")
const input = document.querySelector(".quantity")
const sliderhtml = document.querySelector(".slider")
const next= document.querySelector(".next")
const prev = document.querySelector(".prev")
const sliderLine = document.querySelector(".slider-line")
const slider__img = document.querySelectorAll(".slider__img")
const main__img = document.querySelector(".main__img")
let slider = 0
bt_minus.addEventListener("click", ()=>{
    input.value = +input.value - 1 < 1 ? 1 : +input.value - 1;
})
bt_plus.addEventListener("click", ()=>{
    input.value = +input.value + 1;;
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