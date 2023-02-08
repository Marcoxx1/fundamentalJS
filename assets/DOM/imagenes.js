
//Creo un objeto imágen
let imagen = document.createElement("img")
imagen.src = "imagenes/pato.jpeg"

let div_imagen = document.getElementById("miImagen")

//Introducir imágen creada dentro del div
div_imagen.appendChild(imagen);
