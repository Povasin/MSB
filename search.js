import {cubinsForLive, cubinsForWork, cubinsForbath, cubinsForDress, cubinsForWareHouse} from './cubinsMoreMass.js'
// import { cubinsMass } from './katalogMass.js'

export function search(number) {
    cubinsMass.forEach(item=>{
        item.name.toUpperCase().indexOf(searchHTML[number].value.toUpperCase()) > -1? search__block[number].innerHTML =  `<a class="search__blockHref" href="./cubinsForlive/cubinsForlive.html">${item.name}</a>`  : search__block[number].innerHTML = ''
    })
    cubinsForLive.forEach(item=>{
        item.name.toUpperCase().indexOf(searchHTML[number].value.toUpperCase()) > -1? search__block[number].innerHTML =  `<a class="search__blockHref" href="./cubinsForlive/cubinsForlive.html">${item.name}</a>` : search__block[number].innerHTML = ''
    })
    cubinsForWork.forEach(item=>{
        item.name.toUpperCase().indexOf(searchHTML[number].value.toUpperCase()) > -1?search__block[number].innerHTML =  `<a class="search__blockHref" href="./cubinsForlive/cubinsForlive.html">${item.name}</a>` : search__block[number].innerHTML = ''
    })
    cubinsForbath.forEach(item=>{
        item.name.toUpperCase().indexOf(searchHTML[number].value.toUpperCase()) > -1? search__block[number].innerHTML =  `<a class="search__blockHref" href="./cubinsForlive/cubinsForlive.html">${item.name}</a>` : search__block[number].innerHTML = ''
    })
    cubinsForDress.forEach(item=>{
        item.name.toUpperCase().indexOf(searchHTML[number].value.toUpperCase()) > -1? search__block[number].innerHTML =  `<a class="search__blockHref" href="./cubinsForlive/cubinsForlive.html">${item.name}</a>` : search__block[number].innerHTML = ''
    })
    cubinsForWareHouse.forEach(item=>{
        item.name.toUpperCase().indexOf(searchHTML[number].value.toUpperCase()) > -1? search__block[number].innerHTML =  `<a class="search__blockHref" href="./cubinsForlive/cubinsForlive.html">${item.name}</a>` : search__block[number].innerHTML = ''
    })
}