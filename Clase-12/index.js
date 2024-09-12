import filesystem from 'fs'
import { ERRORES } from './constants/errores.js'

const crearTxt = async (nombre_archivo, texto) => {
    try {
        if (!nombre_archivo) {
            throw { detail: 'No hay nombre de archivo', name: 'INVALID_ARGUMENT' }
        }

        if (!texto) {
            throw { detail: 'No hay texto', name: 'INVALID_ARGUMENT' }
        }
        await filesystem.promises.writeFile('./logs/' + nombre_archivo + '.txt', texto, 'utf-8')
        console.log('Archivo creado con exito')
    }
    catch (error) {
        const errorCustom = ERRORES[error.name]
        if (errorCustom) {
            errorCustom.accion('index.js', error.detail)
        }
    }
}

const procesoX = async () => {
    try {
        await crearTxt()
        await crearTxt('log-2', 'Juan')
        console.log('accion super importante')
    }
    catch (error) {
        console.error('Error en el proceso X')
    }
}

procesoX()