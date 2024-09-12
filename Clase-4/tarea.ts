class Empleado {
    nombre: string
    salario: number
    fecha_de_contratacion: string
    id_empleado: number
    tipo: string

    constructor (nombre: string, salario: number, fecha_de_contratacion: string, id_empleado: number, tipo: string) {
        this.nombre = nombre
        this.salario = salario
        this.fecha_de_contratacion = fecha_de_contratacion
        this.id_empleado = id_empleado
        this.tipo = tipo
    }
}

class ManejadorEmpleados {
    id_manejador: number
    lista_empleados: Empleado[]
    constructor (id_manejador: number) {
        this.id_manejador = id_manejador
        this.lista_empleados = []
    }

    agregarEmpleado (empleado: Empleado): Empleado[] {
        this.lista_empleados.push(empleado)
        return this.lista_empleados
    }

    obtenerEmpleadoPorId (id: number): Empleado | undefined {
        return this.lista_empleados.find((empleado: Empleado) => {
            return (empleado.id_empleado === id)
        })
    }

    obtenerEmpleadosPorTipo (tipo: string): Empleado[] {
        return this.lista_empleados.filter((empleado: Empleado) => {
            return (empleado.tipo === tipo)
        })
    }
}

let manejadorEmpleados1: ManejadorEmpleados = new ManejadorEmpleados( 1 )

manejadorEmpleados1.agregarEmpleado(new Empleado('Nacho', 1000, '2020-01-01', 1, 'Developer'))
manejadorEmpleados1.agregarEmpleado(new Empleado('Lucila', 700, '2022-10-09', 2, 'Marketing'))
manejadorEmpleados1.agregarEmpleado(new Empleado('Ignacio', 900, '2018-05-06', 3, 'Marketing'))

console.log(manejadorEmpleados1)