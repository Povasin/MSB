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
const blockOrder = document.querySelector(".blockOrder")
const promocode = document.querySelector(".promocode")
const accept = document.querySelector(".accept")
const acceptPromocode = document.getElementById("acceptPromocode")
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
            <a href="${item.href}" class="block__img">
                <img src="${item.img}" alt="${item.name}">
            </a>
            <div class="block__content">
                <p class="block__close" data-id="${item.name}">x</p>
                <p class="rent">Аренда</p>
                <a name="NameOrder" href="${item.href}"> ${item.name}</a>
                <div class="block__input">
                    <div class="quantity_inner">		
                        <div class="bt_minus">-</div>
                        <label class="fd-col">количество<input type="text" name="kolOrder"  data-id="${item.inputkol}" value="${item.inputkol}" size="2" class="quantity"/></label>
                        <div class="bt_plus">+</div>
                    </div>
                    <div class="quantity_inner">		
                        <div class="bt_minusMonth">-</div>
                        <label class="fd-col">месяцев<input type="text" name="monthOrder" data-id="${item.inputMonth}" value="${item.inputMonth}" size="2" class="quantity" /></label>
                        <div class="bt_plusMonth">+</div>
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
function promokod() {

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
        adress.style.display = "flex"
        map__yandex.style.display = "none"
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
        map__yandex.style.display = "flex"
        input__checkboxAdress.checked = false
        input__checkboxMap.required = true
        input__checkboxAdress.required = false
    } else{
        map__yandex.style.display = "none"
    }
})

const bt_minus = document.querySelectorAll(".bt_minus")
const bt_plus = document.querySelectorAll(".bt_plus")
function showBtnPrev(e) {
    const JsonMass = JSON.parse(localStorage.getItem("bagMass")) 
    JsonMass.forEach((tasks) =>{
        // TODO: e.target.dataset.id undefind
        console.log(e.target.dataset.id);
        if (tasks.inputkol == e.target.dataset.id) {
            e.target.dataset.id.value = +e.target.dataset.id.value - 1 < 1 ? 1 : +e.target.dataset.id.value - 1
            localStorage.setItem("bagMass", JSON.stringify(JsonMass))
            renderBag(JSON.parse(localStorage.getItem("bagMass")))
        }
    })
}
function showBtnNext(e) {
    const JsonMass = JSON.parse(localStorage.getItem("bagMass")) 
    JsonMass.forEach((tasks) =>{
        if (tasks.inputkol == e.target.dataset.id) {
            e.target.dataset.id.value = +e.target.dataset.id.value + 1
            localStorage.setItem("bagMass", JSON.stringify(JsonMass))
            renderBag(JSON.parse(localStorage.getItem("bagMass")))
        }
    })
}

bag__items.addEventListener("click", (e)=>{
    if (e.target.className =="bt_minus") {
        showBtnPrev(e)
    } else if (e.target.className =="bt_plus"){
        showBtnNext(e)
    }    
    if (e.target.className =="bt_minusMonth") {
        showBtnPrev(e)
    } else if (e.target.className =="bt_plusMonth"){
        showBtnNext(e)
    }
})
if (jsonMass != {}) {
    blockOrder.innerHTML = ``
}
