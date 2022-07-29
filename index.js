const choose__img = document.querySelector(".choose__img")
const choose__more = document.querySelectorAll(".choose__more")
const next= document.querySelector(".next")
const prev = document.querySelector(".prev")
const one__card = document.querySelector(".one__card")
let katalogSlider = 0;
next.addEventListener("click", ()=>{
    if (document.documentElement.clientWidth > 851) {
        if (katalogSlider < 100 ) {
            katalogSlider+=100
            next.style.background = "#cacaca"
            katalogLine.style.left = -katalogSlider + '%' 
            prev.style.background = "#5134c4"
        }
    } else if (document.documentElement.clientWidth < 851 && document.documentElement.clientWidth > 440) {
        if (katalogSlider < 200 ) {
            katalogSlider+=100
            katalogLine.style.left = -katalogSlider + '%' 
            if (katalogSlider == 200) {
                next.style.background = "#cacaca"
                prev.style.background = "#5134c4"
            }else if (katalogSlider == 100) {
                prev.style.background = "#5134c4"
                next.style.background = "#5134c4"
            }
        }
    } else if (document.documentElement.clientWidth < 440) {
        if (katalogSlider < 500 ) {
            katalogSlider+=100
            katalogLine.style.left = -katalogSlider + '%' 
            if (katalogSlider == 500) {
                next.style.background = "#cacaca"
                prev.style.background = "#5134c4"
            }else if (katalogSlider == 100 || katalogSlider == 200 || katalogSlider == 300 || katalogSlider == 400 || katalogSlider == 500) {
                prev.style.background = "#5134c4"
                next.style.background = "#5134c4"
            }
        } 
    }        
})
prev.addEventListener("click", ()=>{
    if (document.documentElement.clientWidth > 851) {
        if (katalogSlider < 101 && katalogSlider > 0) {
            katalogSlider-=100
            prev.style.background = "#cacaca"
            katalogLine.style.left = -katalogSlider + '%' 
            next.style.background = "#5134c4"
        }
    } else if (document.documentElement.clientWidth < 851 && document.documentElement.clientWidth > 440) {
        if (katalogSlider < 200 ) {
            katalogSlider-=100
            katalogLine.style.left = -katalogSlider + '%' 
            if (katalogSlider == 200) {
                prev.style.background = "#cacaca"
                next.style.background = "#5134c4"
            }else if (katalogSlider == 100) {
                prev.style.background = "#5134c4"
                next.style.background = "#5134c4"
            }
        }
    } else if (document.documentElement.clientWidth < 440) {
        if (katalogSlider < 500 ) {
            katalogSlider-=100
            katalogLine.style.left = -katalogSlider + '%' 
            if (katalogSlider == 500) {
                prev.style.background = "#cacaca"
                next.style.background = "#5134c4"
            }else if (katalogSlider == 100 || katalogSlider == 200 || katalogSlider == 300 || katalogSlider == 400 || katalogSlider == 500) {
                prev.style.background = "#5134c4"
                next.style.background = "#5134c4"
            }
        } 
    }        
})

function render(mass) {
    mass.forEach((item, index) => {
        if (index == 0) {
            one__card.insertAdjacentHTML("beforeend", ` <div class="card">
            <div class="fd-row">
            <p class="star">${item.star}</p>
            <a href="${item.href}" class="card__arrow">→</a>
            </div>
            <a href="${item.href}"><img class="card__img" src="${item.img}" alt="${item.name}"></a>
            <p class="rent">Аренда</p>
            <a href="${item.href}" class="info">${item.name}</a>          
            <div class="card__sale">
            <div class="fd-col">
            <p class="discount">${item.discount}</p>
            <p class="card__price">${item.price}₽</p> 
            </div>
            ${item.active ? `<input type="image" class="card__bag card__bagActive" data-id="${item.name}" alt="${item.name}"src="../header/bag.svg" />` :  `<input type="image"  class="card__bag" data-id="${item.name}" alt="${item.name}" src="../main/bag.svg" />` }
            </div> 
            </div> `)
        }
        katalogLine.insertAdjacentHTML("beforeend", ` <div class="card">
        <div class="fd-row">
        <p class="star">${item.star}</p>
        <a href="${item.href}" class="card__arrow">→</a>
        </div>
        <a href="${item.href}"><img class="card__img" src="${item.img}" alt="${item.name}"></a>
        <p class="rent">Аренда</p>
        <a href="${item.href}" class="info">${item.name}</a>          
        <div class="card__sale">
        <div class="fd-col">
        <p class="discount">${item.discount}</p>
        <p class="card__price">${item.price}₽</p> 
        </div>
        ${item.active ? `<input type="image"  class="card__bag card__bagActive" data-id="${item.name}" alt="${item.name}" src="../header/bag.svg" />` :  `<input type="image"  class="card__bag" alt="${item.name}" data-id="${item.name}" src="../main/bag.svg" />` }
        </div> 
        </div> `)
    });
}
render(cubinsMass)
document.documentElement.clientWidth > 850 ? choose__more[1].addEventListener("click", ()=>{
    choose__img.innerHTML  = `<img class="choose__img" src="${choose__more[1].value}">`;
}) : choose__more[0].addEventListener("click", ()=>{
    choose__img.innerHTML  = `<img class="choose__img" src="${choose__more[0].value}">`;
})