const userContent__name =document.querySelector(".userContent__name")
const userContent__phone =document.querySelector(".userContent__phone")
const userContent__email =document.querySelector(".userContent__email")
const orders__render = document.getElementById('orders__render')
const userHtml = document.querySelector('.userHtml')
document.querySelector('.exit').addEventListener("click", ()=>{
    localStorage.clear() 
    document.location.href = "../index.html";
})
userContent__name.textContent = jsonMass.name
userContent__phone.textContent = jsonMass.phone
userContent__email.textContent = jsonMass.email
if (jsonMass.orderMass !== 0) {
    fetch('/api/overwriteMass', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            data:{
                order: jsonMass.email
            }
        })
    })
    .then(res => res.json())
    .then(res => {
            jsonMass.orderMass = res.doc.orderMass
            localStorage.setItem("user", JSON.stringify(jsonMass));
    })
}
function render() {
    if (jsonMass.orderMass == 0) {
        orders__render.insertAdjacentHTML("beforeend", `<div class="order__clear">
        <h2>заказов пока нет</h2>
        <p>вернитесь на <a href="../index.html">главную страницу</a> и закажите что то</p>
    </div>`)
    } else if (jsonMass.orderMass !== 0){
        orders__render.innerHTML = ''
        jsonMass.orderMass.forEach(item => {
            orders__render.insertAdjacentHTML("beforeend", `<div class="bag__block">
            <div class="block__img"> 
                <img src="${item.mainImg}" alt="закаказ № ${item.number}">
            </div>
            <div class="block__content"> 
            <p class="orderNumber">закаказ № ${item.number}</p>
            ${item.delivery == "самовызов" ? ` <p class="rent">можно забрать: ${item.date == undefined && !item.orderReceived ? `<span>не указано продавцом</span>`: item.orderReceived ? `<span>заказ получен</span>`: `<span>${item.date}</span>`}</p>`: `<p class="rent">срок доставки: ${item.date == undefined && !item.orderReceived? `<span>не указано продавцом</span>`: item.orderReceived ? `<span>заказ получен</span>`: `<span>${item.date}</span>`}</p>` }
            ${!item.orderReceived ? `<a name="track" data-id="${item.number}" class="track" href="#">отслеживать заказ</a>` : `<a name="track" data-id="${item.number}" class="track active" href="#">история заказа</a>`}    
            </div>
        </div>`)
        });
    }
}
render()
orders__render.addEventListener("click", (e)=>{
    if (e.target.className == "track" || e.target.className == 'track active') {
        jsonMass.orderMass.forEach(item =>{
            if (e.target.dataset.id == item.number) {
                userHtml.innerHTML = `
            </div>
            <div class="orders__info">
                <div class="input__price">
                    <p>Итого:</p>
                    <span name="summPriceOrder" id="price">${item.price}</span>
                </div>                    
                <div class="input__discount">
                    <p>Без скидки:</p>
                    <span id="discount">${item.discount}</span>
                </div>
                ${item.delivery == "самовызов" ? ` <div class="input__delivery"><p>можно забрать:</p>${item.date == undefined ? `<span>не указано продавцом</span>` : `<span>${item.date}</span>`}</div>`: `<div class="input__delivery"><p>cрок доставки:</p>${item.date == undefined ? `<span>не указано продавцом</span>` : `<span>${item.date}</span>`}</div>` }
                <h2>Отслеживание заказа</h2>
                <div class="orders__track">
                    <div class="orders__trackInfo">
                        <div class="orders__trackInfoCol">
                            <p>заказ принят</p>
                            ${!item.orderAccepted ? `<p class="date">x</p>` : `<p class="date">${item.orderAccepted}</p>`}
                        </div>
                        <div class="orders__trackInfoCol">
                            <p>заказ собирается</p>
                            ${!item.orderCollect ? `<p class="date">x</p>` : `<p class="date">${item.orderCollect}</p>`}
                        </div>
                        <div class="orders__trackInfoCol">
                            <p>заказ в пути</p>
                            ${!item.orderGo ? `<p class="date">x</p>` : `<p class="date">${item.orderGo}</p>`}
                        </div>
                        <div class="orders__trackInfoCol">
                            <p>заказ получен</p>
                            ${!item.orderReceived ? `<p class="date">x</p>` : `<p class="date">${item.orderReceived}</p>`}
                        </div>
                    </div>
                    <div class="orders__trackRadius">
                    ${!item.orderAccepted ? `<div class="borderRadius1"></div>` : `<div class="borderRadius1 active"><img src="../admin/tick.svg" alt="галочка"></div>`}
                    ${!item.orderAccepted ? ` <div class="border1"></div>` : ` <div class="border1 borderActive"></div>`}
                    ${!item.orderCollect ? ` <div class="borderRadius2"></div>` : ` <div class="borderRadius2 active"><img src="../admin/tick.svg" alt="галочка"></div>`}
                    ${!item.orderCollect ? ` <div class="border2"></div>` : ` <div class="border2 borderActive"></div>`}
                    ${!item.orderGo ? ` <div class="borderRadius3"></div>` : ` <div class="borderRadius3 active"><img src="../admin/tick.svg" alt="галочка"></div>`}
                    ${!item.orderGo ? ` <div class="border3"></div>` : ` <div class="border3 borderActive"></div>`}
                    ${!item.orderReceived ? ` <div class="borderRadius4"></div>` : ` <div class="borderRadius4 active"><img src="../admin/tick.svg" alt="галочка"></div>`}
                    </div>
                    </div>
                    <button class="writeToShop">написать продавцу</button>
            </div>`
                item.jsonBagMass.forEach(block=>{
                    userHtml.insertAdjacentHTML("afterbegin",`<div class="bag__block">
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
