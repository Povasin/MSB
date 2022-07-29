const gallary__item = document.querySelectorAll(".gallary__item")
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