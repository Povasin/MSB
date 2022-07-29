const bag__items = document.querySelector(".bag__items")
const bt_minusMonth = document.querySelector(".bt_minusMonth")
const bt_plusMonth = document.querySelector(".bt_plusMonth")
const input = document.querySelectorAll(".quantity")
const price = document.getElementById("price")
const input__checkboxMap = document.querySelector(".input__checkboxMap")
const input__checkboxAdress = document.querySelector(".input__checkboxAdress")
const map__yandex =document.getElementById("map__yandex")
const adress = document.getElementById("adress")
const selfCall = document.getElementById("self-call")
const discount = document.getElementById("discount")
const bagMass = []
if (!JSON.parse(localStorage.getItem("bagMass"))) {
    localStorage.setItem("bagMass", JSON.stringify(bagMass))    
}
function renderBag(mass) {
    if (mass == 0) {
        bag__items.insertAdjacentHTML("afterbegin", `<div class="bag__clear">
        <h2>ваша корзина пока пуста</h2>
        <p>вернитесь на <a href="../index.html">главную страницу</a> и заполните ее</p>
    </div>`)
    } else{
        mass.forEach(item => {
            bag__items.insertAdjacentHTML("afterbegin", `<div class="bag__block">
            <a href="${item.href}" class="block__img">
                <img src="${item.img}" alt="${item.name}">
            </a>
            <div class="block__content">
                <p class="block__close" data-id="${item.name}">x</p>
                <p class="rent">Аренда</p>
                <a href="${item.href}"> ${item.name}</a>
                <div class="block__input">
                    <div class="quantity_inner">		
                        <button class="bt_minus">-</button>
                        <label class="fd-col">количество<input type="text"  data-id="${item.inputkol}" value="${item.inputkol}" size="2" class="quantity"/></label>
                        <button class="bt_plus">+</button>
                    </div>
                    <div class="quantity_inner">		
                        <button class="bt_minusMonth">-</button>
                        <label class="fd-col">месяцев<input type="text" data-id="${item.inputMonth}" value="${item.inputMonth}" size="2" class="quantity" /></label>
                        <button class="bt_plusMonth">+</button>
                    </div>
                    <div class="block-col">
                        <p class="block__discount">${(item.inputkol*item.discount)*item.inputMonth}</p>
                        <p class="block__price">${(item.inputkol*item.price)*item.inputMonth }₽</p>
                    </div>
                </div>
            </div>
            </div>`)
        });
    }
}
function sum (mass){
    let s = 0;
    mass.forEach(item=>{
        s+= (item.inputkol*item.price)*item.inputMonth 
    })
    price.innerText = s + "₽"
    selfCall.innerText = s + "₽"
    return s
}
function sumDiscount (mass){
    let s = 0;
    mass.forEach(item=>{
        s+= (item.inputkol*item.discount)*item.inputMonth 
    })
    discount.innerText =  + s + "₽"
    return s
}
sum(JSON.parse(localStorage.getItem("bagMass")))
sumDiscount(JSON.parse(localStorage.getItem("bagMass")))
//TODO: удаление карточки срабатвает после обнавлоение страницы
bag__items.addEventListener("click", (e)=>{
    if (e.target.className == "block__close") {
        const JsonMass = JSON.parse(localStorage.getItem("bagMass")) 
        JsonMass.forEach((tasks, index) =>{
           if (tasks.name == e.target.dataset.id) {
                JsonMass.splice(index , 1)
                localStorage.setItem("bagMass", JSON.stringify(JsonMass))
                renderBag(JSON.parse(localStorage.getItem("bagMass")))
           }
       })
    }
})
renderBag(JSON.parse(localStorage.getItem("bagMass")))
input__checkboxAdress.addEventListener("click", ()=>{
    if (input__checkboxAdress.checked) {
        adress.style.display = "flex"
        map__yandex.style.display = "none"
        input__checkboxMap.checked = false
    } else{
        adress.style.display = "none"
    }
})
input__checkboxMap.addEventListener("click", ()=>{
    if (input__checkboxMap.checked) {
        adress.style.display = "none"
        map__yandex.style.display = "flex"
        input__checkboxAdress.checked = false
    } else{
        map__yandex.style.display = "none"
    }
})

const bt_minus = document.querySelectorAll(".bt_minus")
const bt_plus = document.querySelectorAll(".bt_plus")
// function showBtnPrev(e) {
//     const JsonMass = JSON.parse(localStorage.getItem("bagMass")) 
//     JsonMass.forEach((tasks) =>{
//         // TODO: e.target.dataset.id undefind
//         console.log(e.target.dataset.id);
//         if (tasks.inputkol == e.target.dataset.id) {
//             e.target.dataset.id.value = +e.target.dataset.id.value - 1 < 1 ? 1 : +e.target.dataset.id.value - 1
//             localStorage.setItem("bagMass", JSON.stringify(JsonMass))
//             renderBag(JSON.parse(localStorage.getItem("bagMass")))
//         }
//     })
// }
// function showBtnNext(e) {
//     const JsonMass = JSON.parse(localStorage.getItem("bagMass")) 
//     JsonMass.forEach((tasks) =>{
//         if (tasks.inputkol == e.target.dataset.id) {
//             e.target.dataset.id.value = +e.target.dataset.id.value + 1
//             localStorage.setItem("bagMass", JSON.stringify(JsonMass))
//             renderBag(JSON.parse(localStorage.getItem("bagMass")))
//         }
//     })
// }

// bag__items.addEventListener("click", (e)=>{
//     if (e.target.className =="bt_minus") {
//         showBtnPrev(e)
//     } else if (e.target.className =="bt_plus"){
//         showBtnNext(e)
//     }    
//     if (e.target.className =="bt_minusMonth") {
//         showBtnPrev(e)
//     } else if (e.target.className =="bt_plusMonth"){
//         showBtnNext(e)
//     }
// })
