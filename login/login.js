import { PORT, jsonMass, jsonBagMass } from "../main"
const login = document.getElementById("login")
const error = document.querySelector(".error")
const password = document.getElementById("password")
const email = document.getElementById('email')
function saveUser() {
    if (email.value.indexOf('@') > -1 && password.value != '') {
        jsonMass = {
            email: email.value,
            password: password.value
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
        console.log(jsonMass);
        fetch(`${PORT}/login`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({...jsonMass})
        })
        .then(res => res.json())
        .then(res => {
            if (res.message == "Пользователь с таким email не существует"){
                error.innerText = "Пользователь с таким email не существует"
            } else if (res.message == "Введен неверный пароль") {
                error.innerText = "Введен неверный пароль"
            } else {
                console.log(res);
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
        fetch(`${PORT}/adminLogin`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({...jsonMass})
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