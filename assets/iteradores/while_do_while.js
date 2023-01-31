/*
let i = 1; //Inicialización la variable contador
// Condición: Mientras la variable contador sea menor de 5
while(i <= 10){
    document.writeln(i+"-"+(11-i));
    document.writeln("</br>");
    i++
}


let i = 0
do{
    i++;
    document.writeln(i);
    if(i==5){
        break;
    }
}while ( i < 10);
*/

let num = prompt("Introduzca un número",0);
let suma = 0;
do{
    document.writeln(num)
    suma += num
    num = num--
}while(num > 0);