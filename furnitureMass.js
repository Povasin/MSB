const furnitureLine = document.querySelector(".furniture-line")
const nextFurniture = document.querySelector(".nextFurniture")
const prevFurniture = document.querySelector(".prevFurniture")
let furnitureSlider = 0
const furnitureMass= [
    {   
        href: "#",
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
        href: "#",
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
        href: "#",
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
        href: "#",
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
        href: "#",
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
        href: "#",
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
        <a href="${item.href}" class="card__arrow">→</a>
        </div>
        <img class="card__img" src="${item.img}" alt="${item.name}">
        <p class="rent">Аренда</p>
        <a href="${item.href}" class="info">${item.name}</a>         
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
furnitureLine.addEventListener("click", (e)=>{
    console.log(1);
    if (e.target.className == "card__bag") {
        const JsonMass = JSON.parse(localStorage.getItem("bagMass")) 
        furnitureMass.forEach((tasks) =>{
            if (tasks.name == e.target.dataset.id) {
                tasks.active = true
                JsonMass.push(tasks)
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



