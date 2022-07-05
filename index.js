const next = document.querySelectorAll(".next")
const prev = document.querySelectorAll(".prev")
const choose__img = document.querySelector(".choose__img")
const choose__more = document.querySelector(".choose__more")
let furnitureSlider = 0;
let katalogSlider = 0;
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
choose__more.addEventListener("click", ()=>{
    choose__img.innerHTML  = `<img class="choose__img" src="${choose__more.value}">`;
})