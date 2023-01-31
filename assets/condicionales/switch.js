

const type_payment = "cash"

switch (type_payment){
    case "cash":
        document.writeln("Tipo de pago con efectivo")
        break;
    case "cc":
        document.writeln("Tipo de pago con tarjeta de crédito")
        break;
    default:
        document.writeln("Sin tipo de pago")
        break;
}
const edad = prompt("¿Qué edad tienes?")
switch (edad){
    case "0":
        document.writeln("<br>")

        document.writeln("Acabas de nacer")
        break;
    case "18":
        document.writeln("<br>")
        document.writeln("Ya eres mayor de edad")
        break;
    case "65":
        document.writeln("<br>")
        document.writeln("Edad de jubilación")
        break;
    default:
        document.writeln("<br>")
        document.writeln("Edad no válida")
}