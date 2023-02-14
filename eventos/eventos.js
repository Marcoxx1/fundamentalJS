

function login(){
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    if(email=="123" && password=="456"){
        alert("Usuario y contraseña correctas :)")
        let boton = document.getElementById("btnLogin")
        boton.className = "btn btn-success"
        let modal = bootstrap.Modal.getOrCreateInstance(document.getElementById("login"))
        modal.hide()
        boton.innerHTML = "Bienvenido"
    }else{
        alert("Usuario y contraseña incorrectos")
    }
}


function cambiarUbicacion(){
    alert("Cambiamos de ubicación!")
}
//Nueva forma de agregar evento Onclick a objet
let botonUbica = document.getElementById("btnUbica").onclick = cambiarUbicacion();
