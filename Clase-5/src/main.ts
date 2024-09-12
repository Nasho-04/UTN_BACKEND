type Puesto = "Programador" | "Diseñador" | "Analista"

class Empleado {
    nombre: string
    sueldo: number
    fecha_de_contratacion: string
    id_empleado: number
    puesto: Puesto

    constructor(
        nombre: string,
        sueldo: number,
        fecha_de_contratacion: string,
        id_empleado: number,
        puesto: Puesto
    ) {

    }
}


class Pasante extends Empleado {
    tiempo_prueba_en_meses: number

    constructor(
        nombre: string,
        sueldo: number,
        fecha_de_contratacion: string,
        id_empleado: number,
        puesto: Puesto,
        tiempo_prueba_en_meses: number
    ) {
        super(nombre, sueldo, fecha_de_contratacion, id_empleado, puesto)
        this.tiempo_prueba_en_meses = tiempo_prueba_en_meses
    }
}

const pasante_1 = new Pasante("Nacho", 1000, "10/10/2020", 1, "Programador", 3)
