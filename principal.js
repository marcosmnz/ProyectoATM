let dinero = (document.getElementById("dinero"))

var users = [
    {name: "Jose", password: "cuenta1atm", balance: 500},
    {name: "Juan", password: "cuenta2atm", balance: 200},
    {name: "Daniel", password: "cuenta3atm", balance: 100},
    {name: "Marcos", password: "micuenta", balance: 363},
]

var usuariologeado = localStorage.getItem("cuentalog")
let arrayuserlog = JSON.parse(usuariologeado)

username.innerHTML = arrayuserlog.name

const saldo = () => {
    console.log(arrayuserlog.balance)
    checksaldo.innerHTML = `Saldo: $${arrayuserlog.balance} MXN`
    errores.innerHTML = ""
}

const regresar = () => {
    localStorage.clear()
    window.location.href = "index.html";
}

const retirar = () => {
    let dineroconretiro = arrayuserlog.balance - parseInt(dinero.value)
    if ((dinero.value.length) == 0) {
        errores.innerHTML = "El campo no puede estar vacío."
        errores.style.color = "red"
        return
    
    } else if (dineroconretiro < 10) {
        errores.innerHTML = "No tienes suficientes fondos, tu cuenta debe tener mínimo $10 MXN"
        errores.style.color = "red"
        return checksaldo.innerHTML = ""
    }
    else {
        checksaldo.innerHTML = `
        <div>Monto retirado: $${dinero.value} MXN</div>
        <div>Saldo nuevo: $${dineroconretiro} MXN</div>`
    } 
    arrayuserlog.balance = dineroconretiro
    errores.innerHTML = ""
        
}

const ingresar = () => {
    let dineroconingreso = arrayuserlog.balance + parseInt(dinero.value)
    if ((dinero.value.length) == 0) {
        errores.innerHTML = "El campo no puede estar vacío."
        errores.style.color = "red"
        return
    }
    else if (dineroconingreso > 990) {
        errores.innerHTML = "No puedes tener mas de $990 en tu cuenta"
        errores.style.color = "red"
         return checksaldo.innerHTML = ""
    } else {
        checksaldo.innerHTML = `
        <div>Monto ingresado: $${dinero.value} MXN</div>
    
        <div>Saldo nuevo: $${dineroconingreso} MXN</div>`
    } 
    arrayuserlog.balance = dineroconingreso
    errores.innerHTML = ""
        
}