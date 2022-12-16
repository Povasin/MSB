import {services__sum, jsonBagMass, jsonMass} from '../main.js'
import { PORT } from "../main"
const bag__items = document.querySelector(".bag__items")
const price = document.getElementById("price")
const input__checkboxMap = document.querySelector(".input__checkboxMap")
const input__checkboxAdress = document.querySelector(".input__checkboxAdress")
const adress = document.getElementById("adress")
const selfCall = document.getElementById("self-call")
const discount = document.getElementById("discount")
const promocode = document.querySelector(".promocode")
const accept = document.querySelector(".accept")
const acceptPromocode = document.getElementById("acceptPromocode")
const order = document.getElementById("order")
const error = document.getElementById("error")
function renderBag(mass) {
    bag__items.innerHTML = ''
    sum(mass);
    sumDiscount(mass)
    if (mass == 0) {
        bag__items.insertAdjacentHTML("afterbegin", `<div class="bag__clear">
        <h2>ваша корзина пока пуста</h2>
        <p>вернитесь на <a href="../index.html">главную страницу</a> и заполните ее</p>
    </div>`)
    } else{
        mass.forEach(item => {
            bag__items.insertAdjacentHTML("afterbegin", `<div class="bag__block">
                <img src="${item.img}"data-id="${item.name}" class="block__img"alt="${item.name}">
            <div class="block__content">
                <p class="block__close" data-id="${item.name}">x</p>
                <p class="rent">Аренда</p>
                <p class="info"data-id="${item.name}">${item.name}</p>
                <div class="block__input">
                    <div class="quantity_inner">		
                        <p data-id="${item.name}" class="bt_minus">-</p>
                        <label class="fd-col">количество<p class="quantity">${item.inputkol}</p></label>
                        <p class="bt_plus" data-id="${item.name}">+</p>
                    </div>
                    <div class="quantity_inner">		
                        <p data-id="${item.name}" class="bt_minusMonth">-</p>
                        <label class="fd-col">месяцев<p class="quantity">${item.inputMonth}</p></label>
                        <p data-id="${item.name}" class="bt_plusMonth">+</p>
                    </div>
                    <div class="block-col">
                        <p class="block__discount">${(item.inputkol*item.discount)*item.inputMonth}</p>
                        <p class="block__price" name="priceOrder">${(item.inputkol*item.price)*item.inputMonth }₽</p>
                    </div>
                </div>
            </div>
            </div>`)
        });
    }
}
let promocodeShow = false
acceptPromocode.addEventListener("click", ()=>{
    promocodeShow = true
    sum(JSON.parse(localStorage.getItem("bagMass")))
})
function sum (mass){
    let s = 0;
    mass.forEach(item=>{
        s+= (item.inputkol*item.price)*item.inputMonth 
    })
    price.innerText = s + "₽"
    selfCall.innerText = s + "₽"
    if (promocode.value == "pivasin" && promocodeShow) {
        accept.innerText = "промокод успешно применен"
        price.innerText = s/ 100 * 90 + "₽"
        selfCall.innerText = s / 100 * 90 + "₽"
        return s / 100 * 90
    }
    else if(promocode.value != "pivasin" && promocodeShow){
        accept.innerText = "такого промокода не существует"
    }
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
bag__items.addEventListener("click", (e)=>{
    if (e.target.className == "block__close") {
        const JsonMass = JSON.parse(localStorage.getItem("bagMass")) 
        JsonMass.forEach((tasks, index) =>{
           if (tasks.name == e.target.dataset.id) {
                JsonMass.splice(index, 1)
                services__sum[1].innerText  = JsonMass.length
                services__sum[0].innerText  = JsonMass.length
                localStorage.setItem("bagMass", JSON.stringify(JsonMass))
                renderBag(JSON.parse(localStorage.getItem("bagMass")))
           }
       })
    }
})
renderBag(JSON.parse(localStorage.getItem("bagMass")))
input__checkboxAdress.addEventListener("click", ()=>{
    if (input__checkboxAdress.checked) {
        console.log(1);
        adress.style.display = "flex"
        input__checkboxMap.checked = false
        input__checkboxMap.required = false
        input__checkboxAdress.required = true
    } else{
        adress.style.display = "none"
    }
})
input__checkboxMap.addEventListener("click", ()=>{
    if (input__checkboxMap.checked) {
        adress.style.display = "none"
        input__checkboxAdress.checked = false
        input__checkboxMap.required = true
        input__checkboxAdress.required = false
    }
})
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
const orderObj = {
    price: price.textContent,
    discount: discount.textContent,
    number: getRandomInt(10000000),
    orderAccepted:false,
    orderCollect:false,
    orderGo:false,
    orderReceived:false,
    mainImg: jsonBagMass[0].img,
    jsonBagMass
}
function saveOrderLogin() {
    if (input__checkboxMap.checked && jsonBagMass != 0) {
        orderObj.delivery = "самовызов"
        jsonMass.orderMass.push(orderObj)
        return true
    } else if (input__checkboxAdress.checked && adress.value != ''  && jsonBagMass != 0) {
        orderObj.delivery = adress.value
        jsonMass.orderMass.push(orderObj)
        return true
    } else if (jsonBagMass == 0){
        error.textContent = "ваша корзина пуста"
    } else if (adress.value == '' || !input__checkboxAdress.checked || !input__checkboxMap.checked ) {
        error.textContent = 'заполните даные о заказе'
    }
}
order.addEventListener("click", ()=>{
    if (jsonMass.name != undefined) {
        if (saveOrderLogin()) {
            fetch(`${PORT}/bag`, {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({...jsonMass})
            })
            .then(res => res.json())
            .then(res => {
                    localStorage.setItem("user", JSON.stringify(jsonMass));
                    localStorage.setItem("bagMass", JSON.stringify([]));
                    document.location.href = "../user/user.html";
            })
        }
    } else if (jsonMass.name == undefined) {
        error.textContent = "для успешной отправки заказа вам нужно зарегестроваться"
    }
})

bag__items.addEventListener("click", (e)=>{
    if (e.target.className == "bt_plus" || e.target.className == "bt_plusMonth" ) {
        const JsonMass = JSON.parse(localStorage.getItem("bagMass")) 
        JsonMass.forEach((tasks) =>{
            if (tasks.name == e.target.dataset.id) { 
                e.target.className == "bt_plusMonth" ? tasks.inputMonth += 1 : tasks.inputkol += 1
                localStorage.setItem("bagMass", JSON.stringify(JsonMass))
                renderBag(JSON.parse(localStorage.getItem("bagMass")))
            }
        })
    } else if (e.target.className == "bt_minus" || e.target.className == "bt_minusMonth") {
        const JsonMass = JSON.parse(localStorage.getItem("bagMass")) 
        JsonMass.forEach((tasks) =>{
            if (tasks.name == e.target.dataset.id) { 
                console.log(1);
                e.target.className == "bt_minusMonth" ? tasks.inputMonth = +tasks.inputMonth - 1 < 1 ? 1 : +tasks.inputMonth - 1 : tasks.inputkol = +tasks.inputkol - 1 < 1 ? 1 : +tasks.inputkol - 1
                localStorage.setItem("bagMass", JSON.stringify(JsonMass))
                renderBag(JSON.parse(localStorage.getItem("bagMass")))
            }
        })
    }
})