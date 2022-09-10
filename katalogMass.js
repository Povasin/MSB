const katalogLine = document.querySelector(".katalog-line")
const cubinsMass = [
    {
        href: "../cubinsfordress/cubinsfordress.html",
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
        href: "../cubinsForlive/cubinsForlive.html",
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
        href: "../cubinsForbath/cubinsForbath.html",
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
        href: "../cubinsForwork/cubinsForwork.html",
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
        href: "../cubinsForwarehouse/cubinsForwarehouse.html",
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
        href: "../cubinsfordress/cubinsfordress.html",
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
katalogLine.addEventListener("click", (e)=>{
    if (e.target.className == "card__bag") {
        cubinsMass.forEach((tasks) =>{
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
})

cubinsMass.forEach((item)=>{
    JSON.parse(localStorage.getItem("bagMass")).forEach(bagItem=>{
        if (item.name == bagItem.name) {
            item.active = true
        }
    })
})
