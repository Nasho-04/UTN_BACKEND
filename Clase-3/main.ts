let nombre : string | null = 'pepe'

let datoRandom : any = 'hola'

function sumar (a : number, b : number) : number {
    return a + b
}

sumar(7, 4)
/* 
const saludar = (edad : number = 10, nombre?: string) => {
    console.log('mi edad es: ' + edad)
    if (nombre) {
        return 'hola ' + nombre
    } else {
        return 'Hola, no sé tu nombre'
    }
}

console.log(saludar()) */

interface Persona {
    nombre: string, 
    apellido: string, 
    edad: number

}

const persona : Persona = {
    nombre : 'pepe',
    apellido: 'suarez',
    edad: 10
}

const saludar = (persona : Persona) : void => {
    alert('hola ' + persona.nombre + ' ' + persona.apellido) 
}

const calcularIva = (numero : number) : number => {
    return numero * 0.21
}

interface Impuesto {
    iva: number,
    total: number,
    base: number
}

const obtenerImpuestosIva = (numero : number) :  Impuesto => {
    const iva : number = calcularIva(numero)
    const total : number = numero + iva
    const base : number = numero
    return {iva, total, base}
}

console.log(obtenerImpuestosIva(1000))

interface Personaje {
    nombre: string,
    edad: number,
    ciudadDeOrigen: string,
    vida: number,
    armadura: number,
    ataque: number,
    defensa: number
}

const crearPersonaje = (nombre: string, edad: number, ciudadDeOrigen: string) : Personaje => {
    return {
        nombre,
        edad,
        ciudadDeOrigen,
        vida: 100,
        armadura: 0,
        ataque: 0,
        defensa: 0
    }
}

console.log(crearPersonaje('pepe', 24, 'bogota'))