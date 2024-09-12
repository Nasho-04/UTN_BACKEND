const {calcularPrecioConIva} = require('./utils/calculosVarios.js')
const moduloValidaciones = require('./utils/validaciones.js')
const {crearTxt, leerTxt, crearJSON} = require('./utils/sistemaArchivos.js')
/* 
const precio_vaso = 20

const objeto_iva = calcularPrecioConIva(precio_vaso)
console.dir(objeto_iva) */

/* console.log(moduloValidaciones.validarNumero(45))  */

const persona = {
    nombre: 'pepe',
    edad: 90
}

crearJSON('persona_1' ,persona)