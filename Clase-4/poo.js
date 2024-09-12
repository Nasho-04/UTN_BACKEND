 /* POO */
/* 

const crearProducto = (nombre, precio) => {
    return {
        nombre: nombre,
        precio: precio,
    }
}

const producto_1 = crearProducto('pc dell', 100)

const producto_2 = crearProducto('pc hp', 200)

const producto_3 = crearProducto('pc lenovo', 300)

console.log(producto_1, producto_2, producto_3) */

// Constructor es una funcion que se invocara al instanciarse la clase
// Las clases devuelven objetos
// Las clases retornan simepre a this, que es un objeto
// Podemos modificar a this ya que en este contexto es un objeto/* 

class Personaje {
    constructor (nombre) {
        // Creo la propiedad en el objeto
        this.propiedad_x = 'random'
        this.nombre = nombre
    }
}

// Instancio la clase
const personaje = new Personaje('pepe')
const personaje_1 = new Personaje('juan') 

