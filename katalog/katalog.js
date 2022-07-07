let katalog__filter = document.querySelector(".katalog__filter")

document.querySelector(".filter__open").addEventListener("click",()=>{ katalog__filter.style.right = 0 + "%"})
document.querySelector(".filter__close").addEventListener("click", ()=>{ katalog__filter.style.right = -50 + "%"})