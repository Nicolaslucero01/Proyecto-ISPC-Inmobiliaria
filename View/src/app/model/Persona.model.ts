export class Persona {
    id?: number; // dato no necesario
    nombre: String;
    apellido: String;



    constructor(nombre: String,apellido: String){
        this.nombre = nombre;
        this.apellido =apellido;
    }
}