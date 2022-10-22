import {jsonBagMass} from '../main.js'
const login = document.getElementById("login")
const error = document.querySelector(".error")
const password = document.getElementById("password")
const email = document.getElementById('email')
let jsonMass = {}
function saveUser() {
    if (email.value.indexOf('@') > -1 && password.value != '') {
        jsonMass = {
            email: email.value,
            password: password.value,
            desired: jsonBagMass
        }
        error.textContent = ""
        return true
    } else  if (email.value.indexOf('@') == -1) {
        error.textContent = "Введите коректную эл.почту"
    } else  if (password.value == '' || email.value == '') {
        error.textContent = "Заполните поля"
    }
}

login.addEventListener("click", ()=>{
    if (saveUser() && email.value != 'AdminMSB@gmail.com') {
        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                data:{
                    order: jsonMass,
                }
            })
        })
        .then(res => res.json())
        .then(res => {
            if (res == "Пользователь с таким email не существует"){
                error.innerText = "Пользователь с таким email не существует"
            } else if (res == "Введен неверный пароль") {
                error.innerText = "Введен неверный пароль"
            } else {
                jsonMass ={
                    email: res.doc.email,
                    name: res.doc.name,
                    phone: res.doc.phone,
                    orderMass: res.doc.orderMass
                }
                jsonBagMass = res.doc.desired 
                localStorage.setItem("user", JSON.stringify(jsonMass));
                localStorage.setItem("bagMass", JSON.stringify(jsonBagMass));
                document.location.href = "../index.html";
            }

        })
    } else if (email.value == 'AdminMSB@gmail.com') {
        fetch('/adminLogin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                data:{
                    order: {
                    password:password.value,
                    email: email.value
                    }
                }
            })
        })
        .then(res => res.json())
        .then(res => {
        if (res == "Введен неверный пароль") {
                error.innerText = "Введен неверный пароль"
            } else {
                localStorage.clear()
                jsonMass ={
                    email: res
                } 
                localStorage.setItem("user", JSON.stringify(jsonMass));
                document.location.href = "../admin/admin.html";
            }

        })
    }

})
