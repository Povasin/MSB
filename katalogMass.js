const katalogLine = document.querySelector(".katalog-line")
const cubinsMass = [
    {
        href: "../cubinsfordress/cubinsfordress.html",
        img: "../main/cubinsForDress.webp",
        name: "бытовка раздевалка",
        discount: "9000",
        price: 8000,
        star: "★★★★☆",
        size: "6х2,4х2,50м",
        content: 8,
        inputkol : 1,
        inputMonth : 1
    },
    {
        href: "../cubinsForlive/cubinsForlive.html",
        img: "../main/cubinsForLive.webp",
        name: "бытовка для проживания",
        discount: "9000",
        price: 7500,
        star: "★★★☆☆",
        size: "2,5х2,5х3,0м",
        content: 8,
        inputkol : 1,
        inputMonth : 1
    },
    {
        href: "../cubinsForbath/cubinsForbath.html",
        img: "../main/cubinsForBath.webp",
        name: "бытовка c душем",
        discount: "9000",
        price: 7500,
        star: "★★★★★",
        size: "2,5х2,5х3,0м",
        content: 9,
        inputkol : 1,
        inputMonth : 1
    },
    {
        href: "../cubinsForwork/cubinsForwork.html",
        img: "../main/cubinsForWork.webp",
        name: "бытовки прорабские",
        discount: "10000",
        price: 9000,
        star: "★★★★☆",
        size: "6х2,4х2,4м",
        content: 10,
        inputkol : 1,
        inputMonth : 1
    },
    {
        href: "../cubinsForwarehouse/cubinsForwarehouse.html",
        img: "../main/cubinsForwareHouse.webp",
        name: "бытовка под склад",
        discount: "10000",
        price: 9000,
        star: "★★★★★",
        size: "6х2,4х2,4м",
        content: 10,
        inputkol : 1,
        inputMonth : 1
    },
    {
        href: "../cubinsfordress/cubinsfordress.html",
        img: "../main/cubinsForDress.webp",
        name: "бытовка пост охраны",
        discount: "9000",
        price: 8000,
        star: "★★★★☆",
        size: "6х2,4х2,50м",
        content: 10,
        inputkol : 1,
        inputMonth : 1
    },
]
katalogLine.addEventListener("click", (e)=>{
    if (e.target.className == "card__bag" || e.target.className == "card__bagImg") {
        const JsonMass = JSON.parse(localStorage.getItem("bagMass")) 
        cubinsMass.forEach((tasks) =>{
           if (tasks.name == e.target.dataset.id) {
                JsonMass.push(tasks)
                localStorage.setItem("bagMass", JSON.stringify(JsonMass))
           }
       })
    }
})
