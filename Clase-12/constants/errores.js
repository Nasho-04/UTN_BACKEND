
const ERRORES = {
    'INVALID_ARGUMENT': {
        'code': 1,
        'message': 'Argumento invalido',
        'name': 'INVALID_ARGUMENT',
        'accion': (from, detail) => {
        console.log('EL error viene de ' + from + '\n' + detail)
        }
    }
}

export {ERRORES}