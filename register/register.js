const register = document.getElementById("register")
const error = document.querySelector(".error")
const password = document.getElementById("password")
const passwordCheck = document.getElementById("passwordCheck")
const email = document.getElementById('email')
const nameReg = document.getElementById("nameReg")
const phone = document.getElementById("phone")
const accept = document.getElementById("accept")
function saveUser() {
    if (passwordCheck.value == password.value && email.value.indexOf('@') > -1 && password.value != '' && passwordCheck.value != '' && nameReg.value  != '' && accept.checked) {
        jsonMass = {
            name: nameReg.value,
            email: email.value,
            password: password.value,
            phone: phone.value,
            desired: jsonBagMass,
            orderMass: []
        }
        error.textContent = ""
        return true
    }else if (passwordCheck.value != password.value) {
        error.textContent = "Пароли не совпадают или не заполнены"
    } else  if (email.value.indexOf('@') == -1) {
        error.textContent = "Введите коректную эл.почту"
    } else  if (nameReg.value  == '' || password.value == '' || email.value == ''|| phone.value == '') {
        error.textContent = "Заполните поля"
    } else if (!accept.checked) {
        error.textContent = "Заполните этот флажок для успешной регистрации"
    } 
}

register.addEventListener("click", ()=>{
    if (saveUser()) {
        fetch('/api/register', {
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
            if (res == "Пользователь с таким email уже существует"){
                error.innerText = "Пользователь с таким email уже существует"
            } else{
                jsonMass ={
                    name: res.name,
                    email: res.email,
                    phone: res.phone,
                    orderMass: res.orderMass
                }
                jsonBagMass = res.desired   
                localStorage.setItem("user", JSON.stringify(jsonMass));
                localStorage.setItem("bagMass", JSON.stringify(jsonBagMass));
                document.location.href = "../index.html";
            } 
        });
    }

})
