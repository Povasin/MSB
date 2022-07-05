const services = document.querySelector(".services")
const main = document.querySelector("main")
const sidebar__open = document.querySelector(".sidebar__open")
const sidebar__close = document.querySelector(".sidebar__close")
const sidebar = document.querySelector(".sidebar")
const answer__question = document.querySelectorAll(".answer__question")
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
                e.target.style.transform = 'rotate(' + 0 + 'deg)'
                content.classList.remove("active")
            } else{
                e.target.style.transform = 'rotate(' + 180 + 'deg)'
                content.classList.add("active")
            }
        }
    })
})
  