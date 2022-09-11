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
const services__sum = document.querySelectorAll(".services__sum")
const headerTop__log = document.querySelector(".headerTop__log")
const logFooter = document.querySelector(".logFooter")
const bagMass = [];
const user = {};
if (!JSON.parse(localStorage.getItem("user"))) {
    localStorage.setItem("user", JSON.stringify(user))    
}
if (!JSON.parse(localStorage.getItem("bagMass"))) {
    localStorage.setItem("bagMass", JSON.stringify(bagMass))    
}
let jsonBagMass = JSON.parse(localStorage.getItem("bagMass")) || []
let jsonMass = JSON.parse(localStorage.getItem("user")) || {}
if (jsonMass.name != undefined){
    headerTop__log.innerHTML = `<a href="../user/user.html" name="userName"class="loginUser"> <img src="../header/log.svg" alt="пользователь"><p>${jsonMass.name}</p></a></a>`
    logFooter.innerHTML = `<a href="../user/user.html" name="userName" class="loginUser"> <img  src="../footer/userWhite.png" alt="пользователь"><p>${jsonMass.name}</p></a></a>`
} else{
    headerTop__log.innerHTML = `<a href="../login/login.html" class="login">Войти</a>
    <a href="../register/register.html" class="register">Зарегистрироваться</a>
    <a href="../login/login.html" class="log"> <img src="../header/log.svg" alt="вход"><p>вход</p></a>`
    logFooter.innerHTML = `    <a href="../login/login.html" class="login">Войти</a>
    <a href="../register/register.html" class="register">Зарегистрироваться</a>x`
}
if (jsonMass.email == 'AdminMSB@gmail.com') {
    document.location.href = "../admin/admin.html";
}
services__sum[1].innerText  = JSON.parse(localStorage.getItem("bagMass")).length
services__sum[0].innerText  = JSON.parse(localStorage.getItem("bagMass")).length
sidebar__open.addEventListener("click",()=>{ sidebar.style.right = 0 + "%"})
sidebar__close.addEventListener("click", ()=>{ sidebar.style.right = -50 + "%"})
if ('serviceWorker' in navigator) {
    window.addEventListener('load', ()=>{
      navigator.serviceWorker.register('/sw.js').then(()=>{
        // Успешная регистрация
        console.log('ServiceWorker registration successful');
      }, function(err) {
        // При регистрации произошла ошибка
        console.log('ServiceWorker registration failed: ', err);
      });
    });
}
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