const calcularPrecioConIva = (precio) => {
    return {
        iva: 21,
        precio_original: precio,
        precio_final: precio * 1.21
    }
}

module.exports = {calcularPrecioConIva: calcularPrecioConIva, nombre: 'pepe'}