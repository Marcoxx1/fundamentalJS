class Perro{
    constructor(nombre,alimento){
        this.nombre = nombre;
        this.alimento = alimento;
    }
        //Método
    hablar(){
        document.writeln(this.nombre + " ladra");
    }
    alimentar(){
        document.writeln("Hola, soy " + this.nombre + ". Gracias por alimentarme con " + this.alimento + ".");
    }
}
let mascota_1 = new Perro("Pancho","croquetas");
mascota_1.alimentar();//Pancho ladra.
document.writeln("</br>");
let mascota_2 = new Perro("Kika","chuletas");
mascota_2.alimentar();//Kika ladra.

