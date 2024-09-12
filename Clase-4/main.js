"use strict";
/* TEMA QUE QUEDÓ PENDIENTE DE LA CLSE PASADA */
/*
const nombres : string[] = ["Pedro", "Juan", "Maria"];

interface Producto {
    nombre : string,
    id: number,
    precio: number,
    descripcion: string,
    title: string
}

const producto_1 : Producto = {
    nombre : "Laptop",
    id : 1,
    precio : 500,
    descripcion : "Laptop de 15 pulgadas",
    title: 'Laptop de 15 pulgadas'
}

const producto_2 : Producto = {
    nombre : "Tablet",
    id : 2,
    precio : 300,
    descripcion : "Tablet de 10 pulgadas",
    title: 'Tablet de 10 pulgadas'
}

const lista_productos : Producto[] = [
    producto_1,
    producto_2
]

const tvnoblex : Producto | undefined = lista_productos.find(
    (producto : Producto) : boolean => {
    return producto.id === 1
}
)

console.log(tvnoblex) */
/*
class Personaje {
    nombre : string;

    constructor (nombre : string) {
        this.nombre = nombre
    }

    comer (comida : string = 'nada') : string {
        return this.nombre + ' está comiendo ' + comida
    }
}

const personaje_principal : Personaje = new Personaje('pepe')
let mensaje : string = personaje_principal.comer( 'arroz' )
document.write(mensaje) */
let id_counter = 0;
class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}
class ManejadorProductos {
    constructor() {
        this.productos = [];
        this.id = id_counter++;
    }
    agregarProducto(producto) {
        this.productos.push(producto);
        return this.productos;
    }
}
const manejadorProducto = new ManejadorProductos();
const producto_1 = new Producto('Laptop', 500);
manejadorProducto.agregarProducto(producto_1);
console.log(manejadorProducto);
