/*
let currencies = ['MXN', 'USD', 'EUR', 'CAD']
console.log(currencies);

//Conocer el tamaño de un arreglo lenght
let size = currencies.length;

//Si quiero acceder a la última posicicón del arreglo
let last = currencies[currencies.length -1 ]
console.log()

//Crear un nuevo valor en el arreglo
let new_currency = currencies.push('JPY')
console.log({new_currency});

//Crear un nuevo valor al inicio de un arreglo
let add_init = currencies.unshift('NZD')

//Borra el último valor del arreglo
let delete_last_pos = currencies.pop()

//Borrar el valor de una posición específica
let delete_esp_pos = currencies.splice(1,2)

//Pocición índice de una moneda
let currency_pos = currencies.indexOf('EUR');
console.log({currency_pos, currencies})
*/

let numeros = [];
let num_1 = prompt("Inserte su número");
num_1 = parseInt(num_1);
num_1 = numeros.push(num_1);
let num_2 = prompt("Inserte su número");
num_2 = parseInt(num_2);
num_2 = numeros.push(num_2);
let num_3 = prompt("Inserte su número");
num_3 = parseInt(num_3);
num_3 = numeros.push(num_3);
console.log(numeros[0],numeros[2]);
let suma = num_1+num_2+num_3
console.log(suma);