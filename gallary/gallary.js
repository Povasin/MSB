const gallary__item = document.querySelectorAll(".gallary__item")

const cubinsForLive = [
    {
        href: "../cubinsForbathWithtambur/cubinsForbathWithtambur.html",
        img: "./image 30.svg",
        name: "бытовка с тамбуром",
        discount: "9000",
        price:"8000₽",
        star: "★★★★☆",
        size: "6х2,4х2,50м"
    },
    {
        href: "../cubinsForbathWithtambur/cubinsForbathWithtambur.html",
        img: "./image 30.svg",
        name: "бытовка с перегародками",
        discount: "9000",
        price:"7500₽",
        star: "★★★★★",
        size: "2,5х2,5х3,0м"
    },
    {
        href: "../cubinsForbathWithtambur/cubinsForbathWithtambur.html",
        img: "./image 30.svg",
        name: "бытовка с прихожей в центре",
        discount: "10000",
        price:"9000₽",
        star: "★★★★☆",
        size: "6х2,4х2,4м"
    }
]
const cubinsForWork = [
    {
        href: "../cubinsForbathWithtambur/cubinsForbathWithtambur.html",
        img: "./image 30.svg",
        name: "бытовка с тамбуром",
        discount: "9000",
        price:"8000₽",
        star: "★★★★☆",
        size: "6х2,4х2,50м"
    },
    {
        href: "../cubinsForbathWithtambur/cubinsForbathWithtambur.html",
        img: "./image 30.svg",
        name: "бытовка с перегародками",
        discount: "9000",
        price:"7500₽",
        star: "★★★★★",
        size: "2,5х2,5х3,0м"
    },
    {
        href: "../cubinsForbathWithtambur/cubinsForbathWithtambur.html",
        img: "./image 30.svg",
        name: "бытовка с прихожей в центре",
        discount: "10000",
        price:"9000₽",
        star: "★★★★☆",
        size: "6х2,4х2,4м"
    }
]
const cubinsForbath = [
    {
        href: "../cubinsForbathWithtambur/cubinsForbathWithtambur.html",
        img: "./image 30.svg",
        name: "бытовка с прихожей в центре",
        discount: "9000",
        price:"8000₽",
        star: "★★★★☆",
        size: "6х2,4х2,50м"
    },
    {
        href: "../cubinsForbathWithtambur/cubinsForbathWithtambur.html",
        img: "./image 30.svg",
        name: "бытовка с перегародками",
        discount: "9000",
        price:"7500₽",
        star: "★★★★★",
        size: "2,5х2,5х3,0м"
    },
    {
        href: "../cubinsForbathWithtambur/cubinsForbathWithtambur.html",
        img: "./image 30.svg",
        name: "бытовка с прихожей в центре",
        discount: "10000",
        price:"9000₽",
        star: "★★★★☆",
        size: "6х2,4х2,4м"
    }
]
const cubinsForDress = [
    {
        href: "../cubinsForbathWithtambur/cubinsForbathWithtambur.html",
        img: "./image 30.svg",
        name: "бытовка с перегародками",
        discount: "9000",
        price:"8000₽",
        star: "★★★★☆",
        size: "6х2,4х2,50м"
    },
    {
        href: "../cubinsForbathWithtambur/cubinsForbathWithtambur.html",
        img: "./image 30.svg",
        name: "бытовка с прихожей в центре",
        discount: "9000",
        price:"7500₽",
        star: "★★★★★",
        size: "2,5х2,5х3,0м"
    },
    {
        href: "../cubinsForbathWithtambur/cubinsForbathWithtambur.html",
        img: "./image 30.svg",
        name: "бытовка с тамбуром",
        discount: "10000",
        price:"9000₽",
        star: "★★★★☆",
        size: "6х2,4х2,4м"
    }
]
const cubinsForWareHouse = [
    {
        href: "../cubinsForbathWithtambur/cubinsForbathWithtambur.html",
        img: "./image 30.svg",
        name: "бытовка с перегародками",
        discount: "9000",
        price:"8000₽",
        star: "★★★★☆",
        size: "6х2,4х2,50м"
    },
    {
        href: "../cubinsForbathWithtambur/cubinsForbathWithtambur.html",
        img: "./image 30.svg",
        name: "бытовка с тамбуром",
        discount: "9000",
        price:"7500₽",
        star: "★★★★★",
        size: "2,5х2,5х3,0м"
    },
    {
        href: "../cubinsForbathWithtambur/cubinsForbathWithtambur.html",
        img: "./image 30.svg",
        name: "бытовка с перегародками",
        discount: "10000",
        price:"9000₽",
        star: "★★★★☆",
        size: "6х2,4х2,4м"
    }
]

function render(mass, number) {
    mass.forEach(item => {
        gallary__item[number].insertAdjacentHTML("beforeend", ` <a href="${item.href}" class="card">
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
                <p class="card__price">${item.price}</p> 
            </div>
            <button class="card__bag"><img src="../main/bag.svg" alt="корзина"></button>
        </div> 
    </a>`)
    });
}

render(cubinsForLive, 0)
render(cubinsForWork, 1)
render(cubinsForDress, 2)
render(cubinsForbath, 3)
render(cubinsForWareHouse, 4)