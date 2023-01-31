/*
square(4)

function square(number){
    return number * number
}
//Funciones con saludar
function saludar(){
    document.writeln("Saludar")
}
saludar()

function saludar_nombre(nombre,paterno){
    console.log(arguments)
    document.writeln("</br>")
    document.writeln("Hola "+nombre+" ¿Cómo estás?")
}
saludar_nombre("Marco","López",123)

//Funciones de flecha
let saludar_flecha = (nombre) =>{
    document.writeln("</br>")
    document.writeln("SALUDAR DESDE LA FUNCIÓN FLECHA "+nombre)
}
saludar_flecha("Marco")

*/

let fecha = new Date();
hora = fecha.getHours()

function valida_hora(hora){
    if(hora<=5){
        document.writeln("Buenas madrugadas!!")
    }else if(hora > 5 && hora < 12){
        document.writeln("Buenos días!!")
    }else{
        document.writeln("Buenas noches!!")
    }
}
valida_hora(4)