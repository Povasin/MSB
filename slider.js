let offset = 0 
const sliderLine = document.querySelector(".slider-line")
const content__next = document.getElementById("content__next")
const content__prev = document.getElementById("content__prev")

content__next.addEventListener('click', ()=>{
    if (offset < 671 && offset >= 0) {
        offset+=671
        sliderLine.style.left = -offset + 'px' 
        content__next.style.border = "1.5px solid gray"
        content__next.style.borderImageSource = "none;"
        content__next.style.webkitTextFillColor = "gray";
        content__prev.style.border = "1.5px solid"
        content__prev.style.borderImageSource = "linear-gradient(90deg, #5134c4,#773cbc,#b856d4);"
        content__prev.style.webkitTextFillColor = "transparent";

    } 
})
content__prev.addEventListener('click', ()=>{
    if (offset < 672 && offset > 0 ) {
        offset-=671
        sliderLine.style.left = -offset + 'px' 
        content__prev.style.border = "1.5px solid gray"
        content__prev.style.borderImageSource = "none;"
        content__prev.style.webkitTextFillColor = "gray";
        content__next.style.border = "1.5px solid"
        content__next.style.borderImageSource = "linear-gradient(90deg, #5134c4,#773cbc,#b856d4);"
        content__next.style.webkitTextFillColor = "transparent";
    }
})

