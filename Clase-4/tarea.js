"use strict";
class Empleado {
    constructor(nombre, salario, fecha_de_contratacion, id_empleado, tipo) {
        this.nombre = nombre;
        this.salario = salario;
        this.fecha_de_contratacion = fecha_de_contratacion;
        this.id_empleado = id_empleado;
        this.tipo = tipo;
    }
}
class ManejadorEmpleados {
    constructor(id_manejador) {
        this.id_manejador = id_manejador;
        this.lista_empleados = [];
    }
    agregarEmpleado(empleado) {
        this.lista_empleados.push(empleado);
        return this.lista_empleados;
    }
    obtenerEmpleadoPorId(id) {
        return this.lista_empleados.find((empleado) => {
            return (empleado.id_empleado === id);
        });
    }
    obtenerEmpleadosPorTipo(tipo) {
        return this.lista_empleados.filter((empleado) => {
            return (empleado.tipo === tipo);
        });
    }
}
let manejadorEmpleados1 = new ManejadorEmpleados(1);
manejadorEmpleados1.agregarEmpleado(new Empleado('Nacho', 1000, '2020-01-01', 1, 'Developer'));
manejadorEmpleados1.agregarEmpleado(new Empleado('Lucila', 700, '2022-10-09', 2, 'Marketing'));
manejadorEmpleados1.agregarEmpleado(new Empleado('Ignacio', 900, '2018-05-06', 3, 'Marketing'));
console.log(manejadorEmpleados1);
