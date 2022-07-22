const bag__items = document.querySelector(".bag__items")
const bt_minusMonth = document.querySelector(".bt_minusMonth")
const bt_plusMonth = document.querySelector(".bt_plusMonth")
const input = document.querySelectorAll(".quantity")
const price = document.getElementById("price")
const bagMass = []
if (!JSON.parse(localStorage.getItem("bagMass"))) {
    localStorage.setItem("bagMass", JSON.stringify(bagMass))    
}
function renderBag(mass) {
    // TODO: понять почему не рабтает
    if (JSON.parse(localStorage.getItem("bagMass")) == []) {
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
                        <div class="fd-col">
                            <p>количество</p>
                            <input type="text"  data-id="${item.inputkol}" value="${item.inputkol}" size="2" class="quantity" />
                        </div>
                        <button class="bt_plus">+</button>
                    </div>
                    <div class="quantity_inner">		
                        <button class="bt_minusMonth">-</button>
                        <div class="fd-col">
                            <p>месяцев</p>
                            <input type="text" data-id="${item.inputMonth}" value="${item.inputMonth}" size="2" class="quantity" />
                        </div>
                        <button class="bt_plusMonth">+</button>
                    </div>
                    <div class="block-col">
                        <p class="block__discount">${item.discount}</p>
                        <p class="block__price">${item.price}₽</p>
                    </div>
                </div>
            </div>
        </div>`)
        });
    }
}
renderBag(JSON.parse(localStorage.getItem("bagMass")))
const bt_minus = document.querySelectorAll(".bt_minus")
const bt_plus = document.querySelectorAll(".bt_plus")
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