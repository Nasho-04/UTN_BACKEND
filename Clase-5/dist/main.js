"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Empleado {
    nombre;
    sueldo;
    fecha_de_contratacion;
    id_empleado;
    puesto;
    constructor(nombre, sueldo, fecha_de_contratacion, id_empleado, puesto) {
    }
}
class Pasante extends Empleado {
    tiempo_prueba_en_meses;
    constructor(nombre, sueldo, fecha_de_contratacion, id_empleado, puesto, tiempo_prueba_en_meses) {
        super(nombre, sueldo, fecha_de_contratacion, id_empleado, puesto);
        this.tiempo_prueba_en_meses = tiempo_prueba_en_meses;
    }
}
const pasante_1 = new Pasante("Nacho", 1000, "10/10/2020", 1, "Programador", 3);
