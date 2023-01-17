

//Manejo de números
//en JS todos los números se crean igual
/*
let number_1 = 20
let number_2 = 30.5
let number_3 = 0.45
let number_4 = -30

//Operación básica
let resultado;
//suma
resultado = number_1 + number_2
//resta
resultado = number_1 - number_2
//multiplicación
resultado = number_1 * number_2
//división
resultado = number_1 / number_2


//Operadores MATH

let pi = Math.PI
pi = Math.round(pi)
console.log(pi)
document.write(pi)

//Raíz cuadrada
let raiz = Math.sqrt(144)
console.log(raiz)

//Valor absoluto
resultado = Math.abs(-500)
console.log(resultado)

//Número elevando a una potencia
resultado = Math.pow(3,3)
console.log(resultado)

resultado = Math.min(-87,-1,2,4,5,7)
console.log(resultado)
*/
document.write("<h1>IMPRESIÓN DE LA TIENDITA</h1>");
let prenda_1 = prompt("Ingrese la prenda 1",0);
let prenda_2 = prompt("Ingrese la prenda 2",0);
let prenda_3 = prompt("Ingrese la prenda 3",0);
prenda_1 = parseInt(prenda_1);
prenda_2 = parseInt(prenda_2);
prenda_3 = parseInt(prenda_3);
let total = prenda_1+prenda_2+prenda_3
document.write("Su total es: "+total+" pesos");
document.write("</br>")
let descuento = total*.80
document.write("Su total con descuento es: "+descuento);
document.write("</br>")
let IVA = descuento*0.16
document.write("Su IVA es: "+IVA);
document.write("</br>")
total = descuento + IVA
document. write("Su total es de: "+total);
