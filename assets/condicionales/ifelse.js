/*
let score = 7
if (score >=8){
    document.writeln("Alumno aprobado con: "+score)
} else{
    document.writeln("Alumno reprobado con: "+ score)
}

document.write("<br>")
let num = 100
if (num === "100"){
    document.writeln("SON IGUALES")
}else{
    document.writeln("NO SON IGUALES")
}
*/
/*
let dinero = 50000;
let retiro = prompt("¿Cuánto dinero desea retirar?");
Retiro = parseInt(Retiro);
if (retiro<=dinero){
    dinero = dinero-Retiro;
    document.writeln("Usted retiró: "+ retiro);
    document.write("<br>");
    document.writeln("Su nuevo saldo es: "+ dinero);
}else{
    document.write("Usted no tiene tanto dinero, no se haga");
}

let dinero = 50;
let retiro = prompt("¿Cuánto dinero desea retirar?");
let elvisLives = retiro<=dinero ? "Sí puede retirar dinero" : "No tiene tanto dinero";
alert(elvisLives);


const dinero = 10000
let retirar = prompt('Cuanto deseas retirar?',0);
if (retirar <= dinero){
document.writeln("No cuentas con el dinero suficiente para retirar");
}else if (retirar > 2000 && retirar <5000){
    document.writeln("Se puede realizar el retiro");
}else if (retirar >= 5000){
    document.writeln("No se permiten retirar más de 5k diarios");
}else{
    document
}

let tipo = document.write(typeof calif)
 
*/
let calif = prompt("Ingrese la calificación");
calif = parseInt(calif);
console.warn(typeof calif)
if(calif >=0 && calif <6){
    confirm("Está usted reprobadísimo");
}else if(calif >6 && calif <8){
    confirm("Aprobado con condicional");
}else if(calif >8 && calif <=10){
    confirm("Aprobado con excelencia");
}else if(calif >10){
    confirm("Calificación no valida");
}else if(calif != Number){
    confirm("Caracter no válido");
}
