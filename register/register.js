const register = document.getElementById("register")
const error = document.querySelector(".error")
const password = document.getElementById("password")
const passwordCheck = document.getElementById("passwordCheck")
const email = document.getElementById('email')
const nameReg = document.getElementById("nameReg")
const accept = document.getElementById("accept")
let user = {
    name: '',
    email: '',
    password: '',
}
function saveUser() {
    if (passwordCheck.value == password.value && email.value.indexOf('@') > -1 && password.value != '' && password.value != '' && nameReg.value  != '' && accept.checked) {
        console.log(1);
        user = {
            name: nameReg.value,
            email: email.value,
            password: password.value,
        }
        error.textContent = ""
        return true
    }else if (passwordCheck.value != password.value) {
        error.textContent = "Пароли не совпадают или не заполнены"
    } else  if (email.value.indexOf('@') == -1) {
        error.textContent = "Введите коректную эл.почту"
    } else  if (nameReg.value  == '' || password.value == '' || email.value == '') {
        error.textContent = "Заполните поля"
    } else if (!accept.checked) {
        error.textContent = "Заполните этот флажок для успешной регистрации"
    } 
}
register.addEventListener("click", ()=>{
    if (saveUser()) {
        fetch('/api/addOrder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                data:{
                    order: user
                }
            })
        })
        console.log(user);
        alert("вы успешно зарегестрировались!");

    }

})
