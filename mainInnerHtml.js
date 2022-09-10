function mainInnerHTML(e, mass) {
    mass.forEach(item=>{
        if (e.target.dataset.id == item.name) {
            main.innerHTML = `        <div class="transportation_wrapper">
            <span><a href="../index.html">главная </a>/<a href="../katalog/katalog.html"> каталог</a>/<a href="#">${item.name}</a></span>      
            <div class="transportation">
                <div class="transportation__block">
                    <div class="slider-wrapper">
                        <p class="prev"><</p>
                        <div class="slider">
                            <div class="slider-line">
                                <img class="slider__img active" src="${item.img}" alt="бытовка с душем">
                                <img class="slider__img" src="${item.img}" alt="бытовка с душем">
                                <img class="slider__img" src="${item.img}" alt="бытовка с душем">
                                <img class="slider__img" src="${item.img}" alt="бытовка с душем">
                                <img class="slider__img" src="${item.img}" alt="бытовка с душем">
                            </div>
                        </div>
                        <p class="next active">></p>
                    </div>
                    <div class="transportation__img">
                        <div class="star">★★★★☆</div>
                        <img class="main__img"  src="${item.img}" alt="бытовка с душем">
                        <a href="../gallary/gallary.html" class="chooseMore">выбрать формат</a>
                    </div>
                </div>
                <div class="transportation__contant">
                    <h1>Бытовка с тамбуром</h1>
                    <p>вместимость: <span>${item.content} человек</span></p>
                    <p>Габариты: <span>${item.size}</span></p>
                    <p>Внутренняя отделка: <span>${item.finishing}</span></p>
                    <p>Состояние:<span>${item.states}</span></p>
                    <p class="transportation__all">Все характеристки</p>
                    <div class="transportation__row">
                        <p class="price">${item.discount}</p> 
                        <p class="discount">${item.price}</p>
                    </div>
                    <div class="fd-row">
                        <div class="fd-row">
                            <div class="quantity_inner">		
                                <button class="bt_minus">-</button>
                                <label class="fd-col">количество<input type="text" value="1" size="2" class="quantity" /></label>
                                <button class="bt_plus">+</button>
                            </div>
                            <div class="quantity_inner">		
                                <button class="bt_minusMonth">-</button>
                                <label class="fd-col">месяцев<input type="text" value="1" size="2" class="quantity" /></label>
                                <button class="bt_plusMonth">+</button>
                            </div>
                        </div>
                    </div>
                    <button class="more">добавить услугу</button>
                </div>
            </div>
            <div class="transportation__info">
                <h2>О товаре</h2>
                <h3>описание</h3>
                <p>${item.text}</p>
                <h3>Преимущества хранения и перевозки от нашей компании:</h3>
                <ul>
                    <li>быстрая установка;</li>
                    <li>окно и двери герметизированы, утепление по всему периметру;</li>
                    <li>усиленная конструкция;</li>
                    <li>высокая мобильность;</li>
                    <li>долговечность;</li>
                    <li>удобство.</li>
                </ul>
            </div>
        </div>

        <div class="furniture">
            <div class="content">
                <h2>выберети мебель и оборудывание</h2>
                <p>для создание комплекта вам нужно выбрать мебель</p>
                <div class="fd-row">
                    <button class="prevFurniture">←</button>
                    <button class="nextFurniture next__active">→</button>
                </div>
            </div>
            <div class="slider">
                <div class="furniture-line">
                </div>
            </div>
        </div>`
      
        }
    })
    const furnitureLine = document.querySelector(".furniture-line")
    const nextFurniture = document.querySelector(".nextFurniture")
    const prevFurniture = document.querySelector(".prevFurniture")
    let furnitureSlider = 0
    const furnitureMass= [
        {   
            hreF: "#",
            img: "../main/chair.webp",
            name: "офисный стул",
            discount: 800,
            price:500,
            star: "★★★★☆",
            inputkol : 1,
            inputMonth : 1,
            active: false
        },
        {   
            hreF: "#",  
            img: "../main/table.webp",
            name: "офисный стол",
            discount: 1000,
            price:700,
            star: "★★★☆☆",
            inputkol : 1,
            inputMonth : 1,
            active: false
        },
        {   
            hreF: "#",
            img: "../main/bad.webp",
            name: "кровать",
            discount: 1500,
            price:1200,
            star: "★★★★★",
            inputkol : 1,
            inputMonth : 1,
            active: false
        },
        {   
            hreF: "#",
            img: "../main/chair.webp",
            name: "вешалка",
            discount: 800,
            price:500,
            star: "★★★★☆",
            inputkol : 1,
            inputMonth : 1,
            active: false
        },
        {   
            hreF: "#",
            img: "../main/table.webp",
            name: "доп свет",
            discount: 1000,
            price:700,
            star: "★★★☆☆",
            inputkol : 1,
            inputMonth : 1,
            active: false
        },
        {   
            hreF: "#",
            img: "../main/bad.webp",
            name: "доп обарудывание",
            discount: 1500,
            price: 1200,
            star: "★★★★★",
            inputkol : 1,
            inputMonth : 1,
            active: false
        }
    ]
    
    function render() {
        furnitureLine.innerHTML = ""
        furnitureMass.forEach(item => {
            furnitureLine.insertAdjacentHTML("beforeend", ` <div class="card">
            <div class="fd-row">
            <p class="star">${item.star}</p>
            <p class="card__arrow">→</p>
            </div>
            <img class="card__img" src="${item.img}" alt="${item.name}">
            <p class="rent">Аренда</p>
            <p class="info">${item.name}</p>         
            <div class="card__sale">
                <div class="fd-col">
                    <p class="discount">${item.discount}</p>
                    <p class="card__price">${item.price}₽</p> 
                </div>
                ${item.active ? `<div class="furniture__CardActive"><p>добавлено</p> <button data-id="${item.name}" class="furniture__bagActive">+</button></div> ` :  ` <button data-id="${item.name}" class="card__bag">+</button>` }
                </div> 
            </div>`)
        })
    }
    
    furnitureMass.forEach((item)=>{
        JSON.parse(localStorage.getItem("bagMass")).forEach(bagItem=>{
            if (item.name == bagItem.name) {
                item.active = true
            }
        })
    })
    furnitureLine.addEventListener("click", (e)=>{
        if (e.target.className == "card__bag") {
            const JsonMass = JSON.parse(localStorage.getItem("bagMass")) 
            furnitureMass.forEach((tasks) =>{
                if (tasks.name == e.target.dataset.id) {
                    tasks.active = true
                    JsonMass.push(tasks)
                    services__sum[1].innerText  = JsonMass.length
                    services__sum[0].innerText  = JsonMass.length
                    localStorage.setItem("bagMass", JSON.stringify(JsonMass))
                }
            })
        }
        render()
    }) 
    render()
    function sliderNext() {
        if (document.documentElement.clientWidth > 851) {
            if (furnitureSlider < 100 && furnitureSlider >= 0) {
                furnitureSlider+= 100
                furnitureLine.style.left = -furnitureSlider + '%' 
                nextFurniture.classList.remove("next__active")
               prevFurniture.classList.add("prev__active")
            } 
        } else {
            if (furnitureSlider < 200 && furnitureSlider >= 0) {
                furnitureSlider+= 100
                furnitureLine.style.left = -furnitureSlider + '%' 
                if (furnitureSlider == 200) {
                    nextFurniture.classList.remove("next__active")
                   prevFurniture.classList.add("prev__active")
                } else if (furnitureSlider == 100) {
                   prevFurniture.classList.add("prev__active")
                    nextFurniture.classList.add("next__active")
                }
            } 
        }
    }
    function sliderPrev() {
        if (document.documentElement.clientWidth > 851) {
            if (furnitureSlider < 101 && furnitureSlider > 0 ) {
                furnitureSlider-=100
                furnitureLine.style.left = -furnitureSlider + '%' 
               prevFurniture.classList.remove("prev__active")
                nextFurniture.classList.add("next__active")
            }
        }  else{
            if (furnitureSlider < 201 && furnitureSlider > 0 ) {
                furnitureSlider-=100
                furnitureLine.style.left = -furnitureSlider + '%' 
                if (furnitureSlider == 0) {
                   prevFurniture.classList.remove("prev__active")
                    nextFurniture.classList.add("next__active")
                }
            }
        }
    }
    nextFurniture.addEventListener('click', ()=>sliderNext())
    prevFurniture.addEventListener('click', ()=>sliderPrev())    
    const bt_minus = document.querySelector(".bt_minus")
    const bt_plus = document.querySelector(".bt_plus")
    const bt_minusMonth = document.querySelector(".bt_minusMonth")
    const bt_plusMonth = document.querySelector(".bt_plusMonth")
    const input = document.querySelectorAll(".quantity")
    const next= document.querySelector(".next")
    const prev = document.querySelector(".prev")
    const sliderLine = document.querySelector(".slider-line")
    const sliderhtml = document.querySelector(".slider")
    const slider__img = document.querySelectorAll(".slider__img")
    const main__img = document.querySelector(".main__img")
    const more = document.querySelector(".more")
    let slider = 0
    next.addEventListener('click', ()=>{
        if (document.documentElement.clientWidth > 1024) {
            if (slider < 100 && slider >= 0) {
                slider+= 100
                sliderLine.style.top = -slider + '%' 
                next.classList.remove("active")
                prev.classList.add("active")
        
            } 
        } else {
            if (slider < 200 && slider >= 0) {
                slider+= 100
                sliderLine.style.top = -slider + '%' 
                next.classList.remove("active")
                prev.classList.add("active")
                if (slider == 200) {
                    next.classList.remove("active")
                    prev.classList.add("active")
                } else if (slider == 100) {
                    prev.classList.add("active")
                    next.classList.add("active")
                }
            } 
        }

    })
    prev.addEventListener('click', ()=>{
        if (document.documentElement.clientWidth > 1024) {
            if (slider < 101 && slider > 0 ) {
                slider-=100
                sliderLine.style.top = slider + '%' 
                prev.classList.remove("active")
                next.classList.add("active")
            }
        }  else{
            if (slider < 201 && slider > 0 ) {
                slider-=100
                sliderLine.style.top = -slider + '%' 
                prev.classList.remove("active")
                next.classList.add("active")
                if (furnitureSlider == 0) {
                    prev.classList.remove("prev__active")
                    next.classList.add("next__active")
                } else if (furnitureSlider == 100) {
                    prev.classList.add("prev__active")
                    next.classList.add("next__active")
                }
            }
        }
    })
    sliderhtml.addEventListener("click", (e)=>{
        if (e.target.className == "slider__img") {
            for (let i = 0; i < slider__img.length; i++) {
                slider__img[i].classList.remove("active")
            }
            e.target.classList.add("active")
            main__img.src = e.target.src
        }   
    })

    function bt_minusFunc(number) {
        input[number].value = +input[number].value - 1 < 1 ? 1 : +input[number].value - 1;
        number == 0 ?  cubinsItem.inputkol = input[number].value : cubinsItem.inputMonth = input[number].value
    }
    function bt_plusFunc(number) {
        input[number].value = +input[number].value + 1;
        number == 0 ?  cubinsItem.inputkol = input[number].value : cubinsItem.inputMonth = input[number].value
    }
    bt_minus.addEventListener("click", ()=>bt_minusFunc(0))
    bt_plus.addEventListener("click", ()=>bt_plusFunc(0))
    bt_minusMonth.addEventListener("click", ()=>bt_minusFunc(1))
    bt_plusMonth.addEventListener("click", ()=>bt_plusFunc(1))
    let cubinsItem = {}
    mass.forEach(item=>{if (e.target.dataset.id == item.name) {cubinsItem = item}})
    JSON.parse(localStorage.getItem("bagMass")).forEach(item=>{
            if (cubinsItem.name == item.name) {
                cubinsItem.active = true
                more.classList.add("moreActive")
                more.innerText = "услуга добавлена"
            }
    })


    more.addEventListener("click", ()=>{
        if (!cubinsItem.active) {
            jsonBagMass.push(cubinsItem)
            services__sum[1].innerText  = jsonBagMass.length
            services__sum[0].innerText  = jsonBagMass.length
            localStorage.setItem("bagMass", JSON.stringify(jsonBagMass));
            more.classList.add("moreActive")
            more.innerText = "услуга добавлена"
        }
        cubinsItem.active = true
    })
}