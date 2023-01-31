/*
//Imprimir los números del 0 al 10
let i
for (i=0;i<=10;i++){
    document.writeln(i)
    document.writeln("</br>")
}

console.log(i)
//Escribir los números del 1 al 2000 de 50 en50
for(i=0;i<=2000;i+50){

}
const enterprises =["TESLA","AMAZON","MICROSOFT","META"]
console.warn("FOR TRADICIONAL")
for (let i = 0; i < enterprises.length; i++){
    console.log(enterprises[i])
}

console.warn("FOR IN")
for(let i in enterprises){
    console.log(enterprises[i])
}

console.warn("FOR OF")
for(let enterprise of enterprises){
    console.log(enterprise)
}
*/
const encabezado = ["Nivel 1","Nivel 2","Nivel 3","Nivel 4","Nivel 5","Nivel 6"]
for(i=1;i<=6;i++){
    let nombre = encabezado[i-1]
    document.writeln("<h"+i+">"+nombre+"</h"+i+">")
}