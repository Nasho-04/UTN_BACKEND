const filesystem = require ('fs')



const crearTxt = () => {
    filesystem.writeFileSync('./archivos/archivo.txt', 'Hola mundo desde node.js', 'utf-8')
}

const leerTxt = () => {
    const data = filesystem.readFileSync('./archivos/archivo.txt', 'utf-8')
    console.log(`El contenido de archivo.txt es: ${data}`)
}

const crearJSON = (direccion_y_nombre, contenido) => {
    filesystem.writeFileSync('./archivos/json/' + direccion_y_nombre + '.json', JSON.stringify(contenido), 'utf-8')
    console.dir(`Archivo: ./archivos/json/${direccion_y_nombre}.json fue creado con exito`)
}

module.exports = {
    crearTxt,
    leerTxt,
    crearJSON
}