const services = document.querySelector(".services")
const main = document.querySelector("main")
const body = document.querySelector("body")
const sidebar__open = document.querySelector(".sidebar__open")
const sidebar__close = document.querySelector(".sidebar__close")
const sidebar = document.querySelector(".sidebar")
const answer__question = document.querySelectorAll(".answer__question")
const searchHTML = document.querySelectorAll(".search")
const search__block = document.querySelectorAll(".search__block")
let search__blockHref = document.querySelectorAll(".search__blockHref")
const services__media = document.querySelector(".services__media")
const search__modal = document.querySelector(".search__modal")
const search__close = document.querySelector(".search__close")
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
function search(number) {
    search__blockHref.forEach(item=>{
        item.innerHTML.toUpperCase().indexOf(searchHTML[number].value.toUpperCase()) > -1?  item.style.display = "" : item.style.display = "none"
    })
}

searchHTML[0].addEventListener('input', ()=>{
    search__block[0].style.display = "flex"
    search(0)
});
searchHTML[1].addEventListener('input', ()=>{
    search__block[1].style.display = "flex"
    search(1)
});
body.addEventListener("click", ()=>{
    search__block[1].style.display = "none"
})
services__media.addEventListener("click", ()=>{
    search__modal.style.display = "flex"
})
search__close.addEventListener("click",()=>{
    search__modal.style.display = "none"
})