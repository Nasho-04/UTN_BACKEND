"use strict";
let nombre = 'pepe';
let datoRandom = 'hola';
function sumar(a, b) {
    return a + b;
}
sumar(7, 4);
const persona = {
    nombre: 'pepe',
    apellido: 'suarez',
    edad: 10
};
const saludar = (persona) => {
    alert('hola ' + persona.nombre + ' ' + persona.apellido);
};
const calcularIva = (numero) => {
    return numero * 0.21;
};
const obtenerImpuestosIva = (numero) => {
    const iva = calcularIva(numero);
    const total = numero + iva;
    const base = numero;
    return { iva, total, base };
};
console.log(obtenerImpuestosIva(1000));
const crearPersonaje = (nombre, edad, ciudadDeOrigen) => {
    return {
        nombre,
        edad,
        ciudadDeOrigen,
        vida: 100,
        armadura: 0,
        ataque: 0,
        defensa: 0
    };
};
console.log(crearPersonaje('pepe', 24, 'bogota'));
