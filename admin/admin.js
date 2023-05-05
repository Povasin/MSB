import { PORT } from "../main.js"
const headerTop = document.querySelector(".headerTop")
const main = document.querySelector("main")
const body = document.querySelector("body")
const searchHTML = document.querySelectorAll(".search")
const search__block = document.querySelectorAll(".search__block")
let search__blockHref = document.querySelectorAll(".search__blockHref")
const services__media = document.querySelector(".services__media")
const search__modal = document.querySelector(".search__modal")
const search__close = document.querySelector(".search__close")
const orders__render = document.getElementById('orders__render')
const orders = document.querySelector('.orders')
const orders__trackObert = document.querySelector(".orders__trackObert")
const borderRadius1 = document.querySelector('.borderRadius1')
const borderRadius2 = document.querySelector('.borderRadius2')
const borderRadius3 = document.querySelector('.borderRadius3')
const borderRadius4 = document.querySelector('.borderRadius4')
const border1 = document.querySelector('.border1')
const border2 = document.querySelector('.border2')
const border3 = document.querySelector('.border3')
const date = document.querySelectorAll('.date')
const saveChanges =  document.querySelector('.saveChanges')
document.querySelector('.exit').addEventListener("click", ()=>{
    localStorage.clear() 
    document.location.href = "../index.html";
})
let jsonBagMass = []
fetch(`${PORT}/overwriteMassAdmin`)
.then(res => res.json())
.then(res => {
        jsonBagMass = res.doc
        if (jsonBagMass == 0) {
            orders__render.insertAdjacentHTML("beforeend", `<div class="order__clear">
            <h2>заказов пока нет</h2>
            <p>вернитесь на <a href="../index.html">главную страницу</a> и закажите что то</p>
        </div>`)
        } else if (jsonBagMass !== 0){
            orders__render.innerHTML = ''
            jsonBagMass.forEach(item => {
                if (item.orderMass != undefined) {     
                    item.orderMass.forEach(itemOrderMass => {
                    orders__render.insertAdjacentHTML("beforeend", `<div class="bag__block">
                    <div class="block__img"> 
                        <img src="${itemOrderMass.mainImg}" alt="закаказ № ${itemOrderMass.number}">
                    </div>
                    <div class="block__content"> 
                    ${!itemOrderMass.orderCollect && !itemOrderMass.orderAccepted && !itemOrderMass.orderGo && !itemOrderMass.orderReceived ? ` <p class="block__orderNew">новый</p>` : itemOrderMass.orderCollect && itemOrderMass.orderAccepted && itemOrderMass.orderGo && itemOrderMass.orderReceived ? `<p class="block__orderTrack">доставлено</p>` : `<p class="block__orderAccept">активен</p>`}
                    <p class="orderNumber">закаказ № ${itemOrderMass.number}</p>
                    ${itemOrderMass.delivery == "самовызов" ? ` <p class="rent">можно забрать: ${itemOrderMass.date == undefined && !itemOrderMass.orderReceived ? `<span>не указано продавцом</span>`: itemOrderMass.orderReceived ? `<span>заказ получен</span>`: `<span>${itemOrderMass.date}</span>`}</p>`: `<p class="rent">срок доставки: ${itemOrderMass.date == undefined && !itemOrderMass.orderReceived? `<span>не указано продавцом</span>`: itemOrderMass.orderReceived ? `<span>заказ получен</span>`: `<span>${itemOrderMass.date}</span>`}</p>` }
                    ${!itemOrderMass.orderReceived ? `<a name="track" data-id="${itemOrderMass.number}" class="track">отслеживать заказ</a>` : `<a name="track" data-id="${itemOrderMass.number}" class="track active">история заказа</a>`}    
                    </div>
                    </div>`)
                    })
                }
            });
        }
})
if ('serviceWorker' in navigator) {
    window.addEventListener('load', ()=>{
      navigator.serviceWorker.register('/sw.js').then(()=>{
        console.log('ServiceWorker registration successful');
      }, function(err) {
        console.log('ServiceWorker registration failed: ', err);
      });
    });
}
window.onscroll = function showServices() {
    if (window.pageYOffset > 80) {
        headerTop.classList.add("headerTop__fixed")
        main.classList.add("main_fixed")
    } else{
        headerTop.classList.remove("headerTop__fixed")
        main.classList.remove("main_fixed")
    }
}
function search(number) {
    search__blockHref.forEach(item=>{
        item.innerHTML.toUpperCase().indexOf(searchHTML[number].value.toUpperCase()) > -1?  item.style.display = "" : item.style.display = "none"
    })
}
orders__render.addEventListener("click", function showtrack(e){
    if (e.target.className == "track" || e.target.className == 'track active') {
        jsonBagMass.forEach(item =>{
            if (item.orderMass != undefined) {
                item.orderMass.forEach(itemOrderMass => {
                    if (e.target.dataset.id == itemOrderMass.number) {
                        orders.innerHTML = `
                    <div class="orders__info">
                        <div class="input__price">
                            <p>Итого:</p>
                            <span name="summPriceOrder" id="price">${itemOrderMass.price}</span>
                        </div>                    
                        <div class="input__discount">
                            <p>Без скидки:</p>
                            <span id="discount">${itemOrderMass.discount}</span>
                        </div>
                        <div class="input__discount">
                            <p>Номер телефона:</p>
                            <span name="summPriceOrder" id="price">${item.phone}</span>
                        </div> 
                        <div class="input__discount">
                            <p>email:</p>
                            <span name="summPriceOrder" id="price">${item.email}</span>
                        </div> 
                        ${itemOrderMass.delivery == "самовызов" ? ` <div class="input__delivery"><p>самовызов:</p>${itemOrderMass.date == undefined ? `<input type="date" class='input__date'>` : `<span>${itemOrderMass.date}</span>`}</div>`: `<div class="input__delivery"><p>доставка по адресу:</p><span>${itemOrderMass.delivery}</span></div>`}
                        ${itemOrderMass.delivery != "самовызов" ? `<div class="input__deliveryDate"><p>дата доставки:</p>${itemOrderMass.date == undefined ? `<input type="date" class='input__date'>` : `<span>${itemOrderMass.date}</span>`}</div>` : ''}
                    </div>`
                    orders__trackObert.style.display = 'flex'
                    if ( document.querySelector('.input__date') != null) {
                        document.querySelector('.input__date').addEventListener("input", ()=>{itemOrderMass.date = document.querySelector('.input__date').value})
                    }
                    if (!itemOrderMass.orderAccepted) {
                        borderRadius1.addEventListener('click',()=>{
                            if (!itemOrderMass.orderAccepted) {
                                itemOrderMass.orderAccepted = `${new Date().getDate()< 10 ? `0${new Date().getDate()}` : new Date().getDate()}.${new Date().getMonth()< 10 ? `0${new Date().getMonth()}` : new Date().getMonth()}.${new Date().getFullYear()} ${new Date().getHours()< 10 ? `0${new Date().getHours()}` : new Date().getHours()}:${new Date().getMinutes() < 10 ? `0${new Date().getMinutes()}` : new Date().getMinutes()}` 
                                date[0].innerText = itemOrderMass.orderAccepted
                                borderRadius1.classList.add('active') 
                                border1.classList.add('borderActive')
                                borderRadius1.innerHTML = '<img src="./tick.svg" alt="галочка">'
                                saveChanges.innerText = 'сохранить изменения'
                                showtrack(e)
                            }
                        })
                    } else if(itemOrderMass.orderAccepted){
                        border1.classList.add('borderActive')
                        borderRadius1.classList.add('active') 
                        borderRadius1.innerHTML = '<img src="./tick.svg" alt="галочка">'
                    }
                    if (!itemOrderMass.orderCollect && itemOrderMass.orderAccepted) {
                        borderRadius2.addEventListener('click',()=>{
                            if (!itemOrderMass.orderCollect) {
                                itemOrderMass.orderCollect = `${new Date().getDate()< 10 ? `0${new Date().getDate()}` : new Date().getDate()}.${new Date().getMonth()< 10 ? `0${new Date().getMonth()}` : new Date().getMonth()}.${new Date().getFullYear()} ${new Date().getHours()< 10 ? `0${new Date().getHours()}` : new Date().getHours()}:${new Date().getMinutes() < 10 ? `0${new Date().getMinutes()}` : new Date().getMinutes()}` 
                                date[1].innerText = itemOrderMass.orderCollect
                                borderRadius2.classList.add('active') 
                                border2.classList.add('borderActive')
                                borderRadius2.innerHTML = '<img src="./tick.svg" alt="галочка">'
                                saveChanges.innerText = 'сохранить изменения'
                                showtrack(e)
                            }
                        })
                    } else if(itemOrderMass.orderCollect){
                        border2.classList.add('borderActive')
                        borderRadius2.classList.add('active') 
                        borderRadius2.innerHTML = '<img src="./tick.svg" alt="галочка">'
                    }
                    if (!itemOrderMass.orderGo && itemOrderMass.orderCollect && itemOrderMass.orderAccepted) {
                        borderRadius3.addEventListener('click',()=>{
                            if (!itemOrderMass.orderGo) {
                                itemOrderMass.orderGo = `${new Date().getDate()< 10 ? `0${new Date().getDate()}` : new Date().getDate()}.${new Date().getMonth()< 10 ? `0${new Date().getMonth()}` : new Date().getMonth()}.${new Date().getFullYear()} ${new Date().getHours()< 10 ? `0${new Date().getHours()}` : new Date().getHours()}:${new Date().getMinutes() < 10 ? `0${new Date().getMinutes()}` : new Date().getMinutes()}` 
                                date[2].innerText = itemOrderMass.orderGo
                                borderRadius3.classList.add('active') 
                                border3.classList.add('borderActive')
                                borderRadius3.innerHTML = '<img src="./tick.svg" alt="галочка">'
                                saveChanges.innerText = 'сохранить изменения'
                                showtrack(e)
                            }
                        })
                    } else if(itemOrderMass.orderGo){
                        border3.classList.add('borderActive')
                        borderRadius3.classList.add('active') 
                        borderRadius3.innerHTML = '<img src="./tick.svg" alt="галочка">'
                    }
                    if (!itemOrderMass.orderReceived && itemOrderMass.orderGo && itemOrderMass.orderCollect && itemOrderMass.orderAccepted) {
                        borderRadius4.addEventListener('click',()=>{
                            if (!itemOrderMass.orderReceived) {
                                itemOrderMass.orderReceived = `${new Date().getDate()< 10 ? `0${new Date().getDate()}` : new Date().getDate()}.${new Date().getMonth()< 10 ? `0${new Date().getMonth()}` : new Date().getMonth()}.${new Date().getFullYear()} ${new Date().getHours()< 10 ? `0${new Date().getHours()}` : new Date().getHours()}:${new Date().getMinutes() < 10 ? `0${new Date().getMinutes()}` : new Date().getMinutes()}` 
                                date[3].innerText = itemOrderMass.orderReceived
                                borderRadius4.classList.add('active') 
                                borderRadius4.innerHTML = '<img src="./tick.svg" alt="галочка">'
                                saveChanges.innerText = 'сохранить изменения'
                                showtrack(e)
                            }
                        })
                    } else if(itemOrderMass.orderReceived){
                        borderRadius4.classList.add('active') 
                        borderRadius4.innerHTML = '<img src="./tick.svg" alt="галочка">'
                    }
                    !itemOrderMass.orderAccepted ? date[0].innerText = 'x' : date[0].innerText = itemOrderMass.orderAccepted
                    !itemOrderMass.orderCollect ? date[1].innerText = 'x' :date[1].innerText = itemOrderMass.orderCollect
                    !itemOrderMass.orderGo ? date[2].innerText = 'x' : date[2].innerText = itemOrderMass.orderGo
                    !itemOrderMass.orderReceived ? date[3].innerText = 'x' : date[3].innerText = itemOrderMass.orderReceived
                    saveChanges.addEventListener("click", ()=>{
                                fetch(`${PORT}/getFullOrderLoginAdmin`, {
                                    method: 'POST',
                                    mode: 'cors',
                                    headers: {
                                        'Content-Type': 'application/json'
                                    },
                                    body: JSON.stringify({
                                        order: item.orderMass,
                                        email: item.email 
                                    })
                                })
                                .then(res => res.json())
                                .then(res => {
                                        saveChanges.innerText = 'сохранено'
                                })
                    })
                    itemOrderMass.jsonBagMass.forEach(block=>{
                        orders.insertAdjacentHTML("afterbegin",`<div class="bag__block">
                            <a href="${block.href}" class="block__imgJS"><img src="${block.img}" alt="${block.name}"></a>
                            <div class="block__content">
                            <p class="rent">Аренда</p>
                            <a class="orderNumber" href="${block.href}"> ${block.name}</a>
                            <div class="block__inputRow">	
                                <div class="block__input">	
                                    <p class="fd-col">количество: <span>${block.inputkol}шт</span></p>		
                                    <p class="fd-col">срок Аренды: <span>${block.inputMonth}мес</span></p>
                                </div>
                                <div class="block-col">
                                    <p class="block__discount">${(block.inputkol*block.discount)*block.inputMonth}</p>
                                    <p class="block__price" name="priceOrder">${(block.inputkol*block.price)*block.inputMonth }₽</p>
                                </div>
                            </div>
                            </div>
                        </div>`)
                        })
                    }
                })
            }
        })
    }
})