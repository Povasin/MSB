import {cubinsForLive, cubinsForWork, cubinsForbath, cubinsForDress, cubinsForWareHouse} from '../cubinsMoreMass.js'
import {services__sum, jsonBagMass } from './main.js'
import {mainInnerHTML} from './mainInnerHtml.js'
export const katalogLine = document.querySelector(".katalog-line")
export const cubinsMass = [
    {
        img: "../main/cubinsForDress.webp",
        name: "Бытовка раздевалка",
        discount: 9000,
        price: 8000,
        star: "★★★★☆",
        size: "6х2,4х2,50м",
        content: 8,
        inputkol : 1,
        inputMonth : 1,
        active: false,
        finishing: 'ДВП, вагонка ПВХ',
        states: 'б/у',
        text: 'Выездные мероприятия и строительные работы сопровождаются массовым скоплением людей, организовать их переодевание в увеселительную или рабочую одежду без специальных сооружений не получиться. Аренда бытовки раздевалки – выход. С ними можно обустроить условия для переодевания и хранения вещей посетителей и персонала в любом месте.'
    },
    {
        img: "../main/cubinsForLive.webp",
        name: "Бытовка для проживания",
        discount: 9000,
        price: 7500,
        star: "★★★☆☆",
        size: "2,5х2,5х3,0м",
        content: 8,
        inputkol : 1,
        inputMonth : 1,
        active: false,
        finishing: 'ДВП, вагонка ПВХ',
        states: 'б/у',
        text: 'Выездные мероприятия и строительные работы сопровождаются массовым скоплением людей, организовать их переодевание в увеселительную или рабочую одежду без специальных сооружений не получиться. Аренда бытовки раздевалки – выход. С ними можно обустроить условия для переодевания и хранения вещей посетителей и персонала в любом месте.'
    },
    {
        img: "../main/cubinsForBath.webp",
        name: "Бытовка c душем",
        discount: 9000,
        price: 7500,
        star: "★★★★★",
        size: "2,5х2,5х3,0м",
        content: 9,
        inputkol : 1,
        inputMonth : 1,
        active: false,
        finishing: 'ДВП, вагонка ПВХ',
        states: 'б/у',
        text: 'Выездные мероприятия и строительные работы сопровождаются массовым скоплением людей, организовать их переодевание в увеселительную или рабочую одежду без специальных сооружений не получиться. Аренда бытовки раздевалки – выход. С ними можно обустроить условия для переодевания и хранения вещей посетителей и персонала в любом месте.'
    },
    {
        img: "../main/cubinsForWork.webp",
        name: "Бытовки прорабские",
        discount: 10000,
        price: 9000,
        star: "★★★★☆",
        size: "6х2,4х2,4м",
        content: 10,
        inputkol : 1,
        inputMonth : 1,
        active: false,
        finishing: 'ДВП, вагонка ПВХ',
        states: 'б/у',
        text: 'Выездные мероприятия и строительные работы сопровождаются массовым скоплением людей, организовать их переодевание в увеселительную или рабочую одежду без специальных сооружений не получиться. Аренда бытовки раздевалки – выход. С ними можно обустроить условия для переодевания и хранения вещей посетителей и персонала в любом месте.'
    },
    {
        img: "../main/cubinsForwareHouse.webp",
        name: "Бытовка под склад",
        discount: 10000,
        price: 9000,
        star: "★★★★★",
        size: "6х2,4х2,4м",
        content: 10,
        inputkol : 1,
        inputMonth : 1,
        active: false,
        finishing: 'ДВП, вагонка ПВХ',
        states: 'б/у',
        text: 'Выездные мероприятия и строительные работы сопровождаются массовым скоплением людей, организовать их переодевание в увеселительную или рабочую одежду без специальных сооружений не получиться. Аренда бытовки раздевалки – выход. С ними можно обустроить условия для переодевания и хранения вещей посетителей и персонала в любом месте.'
        
    },
    {
        img: "../main/cubinsForDress.webp",
        name: "Бытовка пост охраны",
        discount: 9000,
        price: 8000,
        star: "★★★★☆",
        size: "6х2,4х2,50м",
        content: 10,
        inputkol : 1,
        inputMonth : 1,
        active: false,
        finishing: 'ДВП, вагонка ПВХ',
        states: 'б/у',
        text: 'Выездные мероприятия и строительные работы сопровождаются массовым скоплением людей, организовать их переодевание в увеселительную или рабочую одежду без специальных сооружений не получиться. Аренда бытовки раздевалки – выход. С ними можно обустроить условия для переодевания и хранения вещей посетителей и персонала в любом месте.'
    },          
]
function add(e,mass) {
    mass.forEach((tasks) =>{
        if (tasks.name == e.target.dataset.id) {
             e.target.classList.add("card__bagActive")
             e.target.src = "../header/bag.svg"
             jsonBagMass.push(tasks)
             services__sum[1].innerText  = jsonBagMass.length
             services__sum[0].innerText  = jsonBagMass.length
             localStorage.setItem("bagMass", JSON.stringify(jsonBagMass))
        }
    })
}
katalogLine.addEventListener("click", (e)=>{
    if (e.target.className == "card__bag") {
        add(e,cubinsMass)
        add(e,cubinsForDress)
        add(e,cubinsForLive)
        add(e,cubinsForbath)
        add(e,cubinsForWareHouse)
        add(e,cubinsForWareHouse)
    }
})
function showACtive(mass) {
    mass.forEach((item)=>{
        jsonBagMass.forEach(bagItem=>{
            if (item.name == bagItem.name) {
                item.active = true
            }
        })
    })
}
katalogLine.addEventListener('click', (e)=>{
    if (e.target.className == "info" || e.target.className == 'card__img'|| e.target.className == 'card__arrow') {
        mainInnerHTML(e,cubinsMass)
    }
})
showACtive(cubinsForLive)
showACtive(cubinsForWork)
showACtive(cubinsForDress)
showACtive(cubinsForbath)
showACtive(cubinsForWareHouse)
showACtive(cubinsMass)

