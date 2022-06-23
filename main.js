let user = document.getElementById("user");
let password = document.getElementById("password");
let msg = document.getElementById("msg");
let form = document.getElementById("form");

form.addEventListener("submit", (evento) => {
    evento.preventDefault(); 
    login()
})
var users = [
    {name: "Jose", password: "cuenta1atm", balance: 500},
    {name: "Juan", password: "cuenta2atm", balance: 200},
    {name: "Daniel", password: "cuenta3atm", balance: 100},
    {name: "Marcos", password: "micuenta", balance: 363},
]

const login = () => {
    for (var index = 0; index <= users.length-1; index++) {
        if(user.value == users[index].name && password.value == users[index].password) {
            console.log(users[index])
            const usuariologeado = JSON.stringify(users[index])
            localStorage.setItem("cuentalog", usuariologeado);
            msg.innerHTML = "Correct password and account";
            msg.style.color = "green";
            return location = "principal.html";
        }
    }  msg.innerHTML = "Incorrect password or user, please try again.";
    msg.style.color = "red";
}

