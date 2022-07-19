const services = document.querySelector(".services")
const main = document.querySelector("main")
const body = document.querySelector("body")
const sidebar__open = document.querySelector(".sidebar__open")
const sidebar__close = document.querySelector(".sidebar__close")
const sidebar = document.querySelector(".sidebar")
const answer__question = document.querySelectorAll(".answer__question")
const searchHTML = document.getElementById("search")
const search__block = document.getElementById("search__block")
let search__blockHref = document.querySelectorAll(".search__blockHref")
const services__media = document.querySelector(".services__media")
const search__innerHtml = document.querySelector(".search__innerHtml")
sidebar__open.addEventListener("click",()=>{ sidebar.style.right = 0 + "%"})
sidebar__close.addEventListener("click", ()=>{ sidebar.style.right = -50 + "%"})
window.onscroll = function showServices() {
    if (window.pageYOffset > 103) {
        services.classList.add("services__fixed")
        main.classList.add("main_fixed")
    } else{
        services.classList.remove("services__fixed")
        main.classList.remove("main_fixed")
    }
}

answer__question.forEach(item=>{
    item.addEventListener("click", (e)=>{
        let content = item.nextElementSibling
        if (e.target.className == "answer__open") {
            if (content.classList.contains("active")) {
                e.target.style.transform = 'rotate(' + 90 + 'deg)'
                content.classList.remove("active")
            } else{
                e.target.style.transform = 'rotate(' + 270 + 'deg)'
                content.classList.add("active")
            }
        }
    })
})
function search() {
    search__blockHref.forEach(item=>{
        item.innerHTML.toUpperCase().indexOf(searchHTML.value.toUpperCase()) > -1?  item.style.display = "" : item.style.display = "none"
    })
}
searchHTML.addEventListener('input', ()=>{
    search__block.style.display = "flex"
    search()
});
body.addEventListener("click", ()=>{
    search__block.style.display = "none"
})
services__media.addEventListener("click", ()=>{
    search__innerHtml.insertAdjacentHTML("beforebegin", `<div class="serch__media">
<input type="text" placeholder="Поиск" maxlength="30" class="search">
<img src="./header/search.webp" alt="поиск">
<div class="search__block">
    <a class="search__blockHref" href="./cubinsForlive/cubinsForlive.html">Бытовки для проживания</a>
    <a class="search__blockHref" href="./cubinsfordress/cubinsfordress.html">Бытовки раздевалки</a>
    <a class="search__blockHref" href="./cubinsForwork/cubinsForwork.html">Бытовки прорабские</a>
    <a class="search__blockHref" href="./cubinsForwarehouse/cubinsForwarehouse.html">Бытовки под склад</a>
    <a class="search__blockHref" href="./cubinsForbath/cubinsForbath.html">Бытовки с душем</a>
    <a class="search__blockHref" href="./transportation/transportation.html">Перевозка бытовок и контейнеров</a>
</div>
</div>`)
})