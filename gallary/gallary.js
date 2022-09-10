const gallary = document.querySelector(".gallary")
const gallary__item = document.querySelectorAll(".gallary__item")
function render(mass, number) {
    mass.forEach(item => {
        gallary__item[number].insertAdjacentHTML("beforeend", ` <div class="card">
        <div class="fd-row">
            <p class="star">${item.star}</p>
            <p data-id="${item.name}" class="card__arrow">→</p>
        </div>
        <img class="card__img" data-id="${item.name}"src="${item.img}" alt="${item.name}">
        <p class="rent">Аренда</p>
        <p data-id="${item.name}" class="info">${item.name}</p>   
        <div class="card__sale">
            <div class="fd-col">
                <p class="discount">${item.discount}</p>
                <p class="card__price">${item.price}₽</p> 
            </div>
            ${item.active ? `<input type="image"  class="card__bag card__bagActive" data-id="${item.name}" src="../header/bag.svg"  alt="${item.name}"/>` :  `<input type="image"  class="card__bag" data-id="${item.name}" src="../main/bag.svg" alt="${item.name}" />` }
        </div> 
    </div>`)
    });
}
function add(e,mass) {
    if (e.target.className == "card__bag") {
        const JsonMass = JSON.parse(localStorage.getItem("bagMass")) 
        mass.forEach((tasks) =>{
           if (tasks.name == e.target.dataset.id) {
                e.target.classList.add("card__bagActive")
                e.target.src = "../header/bag.svg"
                JsonMass.push(tasks)
                services__sum[1].innerText  = JsonMass.length
                services__sum[0].innerText  = JsonMass.length
                localStorage.setItem("bagMass", JSON.stringify(JsonMass))
           }
       })
    }
}
gallary__item[0].addEventListener("click", (e)=>{add(e,cubinsForLive)
    mainInnerHTML(e, cubinsForLive)})
gallary__item[1].addEventListener("click", (e)=>{add(e,cubinsForWork)
    mainInnerHTML(e, cubinsForWork)})
gallary__item[2].addEventListener("click", (e)=>{add(e,cubinsForDress)
    mainInnerHTML(e, cubinsForDress)
})
gallary__item[3].addEventListener("click", (e)=>{add(e,cubinsForbath)
    mainInnerHTML(e, cubinsForbath)})
gallary__item[4].addEventListener("click", (e)=>{add(e,cubinsForWareHouse)
    mainInnerHTML(e, cubinsForWareHouse)})
function showACtive(mass) {
    mass.forEach((item)=>{
        JSON.parse(localStorage.getItem("bagMass")).forEach(bagItem=>{
            if (item.name == bagItem.name) {
                item.active = true
            }
        })
    })
}
showACtive(cubinsForLive)
showACtive(cubinsForWork)
showACtive(cubinsForDress)
showACtive(cubinsForbath)
showACtive(cubinsForWareHouse)
render(cubinsForLive, 0)
render(cubinsForWork, 1)
render(cubinsForDress, 2)
render(cubinsForbath, 3)
render(cubinsForWareHouse, 4)