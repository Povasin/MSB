const katalog__filter = document.querySelector(".katalog__filter")
const katalog__price = document.querySelectorAll(".katalog__price")
const katalogStar = document.querySelector(".katalog-star")
const katalogSize = document.querySelector(".katalog-size")
const sliderOne = document.getElementById("slider-1");
const sliderTwo = document.getElementById("slider-2");
const sliderTrack = document.querySelector(".slider-track");
const sliderMaxValue = document.getElementById("slider-1").max;
const katalog__Checkbox = document.querySelectorAll(".katalog__Checkbox")
const clear = document.getElementById("clear")
const firstFilter = document.getElementById("firstFilter")
const kolOnPage = document.getElementById("kolOnPage")
document.querySelector(".filter__open").addEventListener("click", () => { katalog__filter.style.right = 0 + "%" })
document.querySelector(".filter__close").addEventListener("click", () => { katalog__filter.style.right = -90 + "%" })
let minGap = 0;

window.addEventListener('mouseup', (e) => {
    if (e.target.id === "slider-1" || e.target.id === "slider-2") {
        renderKatalog(cubinsMass)
    }
})
const starsChecked = {
    "★★★★★": false,
    "★★★★☆": false,
    "★★★☆☆": false,
    "★★☆☆☆": false
}
const sizeChecked = {
    "6х2,4х2,50м": false,
    "2,5х2,5х3,0м": false,
    "6х2,4х2,4м": false
}
katalogStar.addEventListener("click", (e)=>{
    if (e.target.className == "katalog__Checkbox" ) {
        starsChecked[e.target.value]=e.target.checked
    }
    renderKatalog(cubinsMass)
})
katalogSize.addEventListener("click", (e)=>{
    if (e.target.className == "katalog__Checkbox") {
        sizeChecked[e.target.value]=e.target.checked
    }
    renderKatalog(cubinsMass)
})
function allCheckboxFalse(object) {
    let flag = true;
    Object.values(object).forEach(x=>{
        if (x) {
            flag = false
        }
    })
    return flag
}

function renderKatalog(mass) {
    console.log(mass);
    const filterMass = filter(mass)
    console.log(filterMass);
    katalogLine.innerHTML = ''
    filterMass.forEach(item => {
        katalogLine.insertAdjacentHTML("beforeend", `  <div class="card">
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
            ${item.active ? `<input type="image"  class="card__bag card__bagActive" data-id="${item.name}" src="../header/bag.svg"  alt="${item.name}"/>` :  `<input type="image"  class="card__bag" data-id="${item.name}" src="../main/bag.svg" alt="${item.name}" />` }
        </div> 
    </div>`)
    });
    kolOnPage.innerText = filterMass.length
}
renderKatalog(cubinsMass)
// TODO: понять почему не работает (проблема в фильтрации массива)
katalog__Checkbox[0].addEventListener("click", ()=>renderKatalog(cubinsForDress))
katalog__Checkbox[1].addEventListener("click", ()=>renderKatalog(cubinsForLive))
katalog__Checkbox[2].addEventListener("click", ()=>renderKatalog(cubinsForbath))
katalog__Checkbox[3].addEventListener("click", ()=>renderKatalog(cubinsForWareHouse))
katalog__Checkbox[4].addEventListener("click", ()=>renderKatalog(cubinsForWork))
// TODO: сделать очистку
clear.addEventListener("click", ()=>{
    katalog__price[0].value = 1000
    katalog__price[1].value = 10000
    sliderOne.value = katalog__price[0].value
    sliderTwo.value = katalog__price[1].value
    katalog__price[2].value = 1
    katalog__price[3].value = 10
    for (let i = 0; i < katalog__Checkbox.length; i++) {
        katalog__Checkbox[i].checked = false
    }
    fillColor()
    renderKatalog(cubinsMass)
})
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

sliderOne.addEventListener("input", () => {
    if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
        sliderOne.value = parseInt(sliderTwo.value) - minGap;
    }
    katalog__price[0].value = sliderOne.value;
    fillColor();
})

sliderTwo.addEventListener("input", ()=>{
    if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
        sliderTwo.value = parseInt(sliderOne.value) + minGap;
    }
    katalog__price[1].value = sliderTwo.value;
    fillColor();
})
fillColor();
    function fillColor() {
    percent1 = (sliderOne.value / sliderMaxValue) * 100;
    percent2 = (sliderTwo.value / sliderMaxValue) * 100;
    sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}% ,#5134c4 ${percent1}% ,#b856d4 ${percent2}%, #dadae5 ${percent2}%)`;
}
function filter(mass) {
    return mass.filter(item => {
        let trueItem = true;
        trueItem = trueItem &&  (katalog__price[0].value <= item.price && katalog__price[1].value >= item.price ? true : false)
        trueItem = trueItem &&  (katalog__price[2].value <= item.content && katalog__price[3].value >= item.content ? true : false)
        if (!allCheckboxFalse(sizeChecked)) {
            trueItem = trueItem &&  (sizeChecked[item.size] ? true : false)  
        }
        if (! allCheckboxFalse(starsChecked)) {
            trueItem =  trueItem && (starsChecked[item.star] ? true : false)
        }
        return trueItem
    })
}

firstFilter.addEventListener("click", () => {
    if (firstFilter.value == "cheap") {
        cubinsMass.sort(function (a, b) {
            return a.price - b.price;
        });
    }
    if (firstFilter.value == "expencive") {
        cubinsMass.sort(function (a, b) {
            return b.price - a.price;
        });
    }
    if (firstFilter.value == "popular") {
        cubinsMass.sort(function (a, b) {
            return a.content - b.content;
        });
    }
    renderKatalog(cubinsMass)
})

