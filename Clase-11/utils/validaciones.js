const validarEmail = (email) => {
    return email && /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)
}

const validarNumero = (numero) => {
    return numero && !isNaN(numero)
}

const validarNombre = (nombre) => {
    return nombre && nombre.length >= 3 && nombre.length <= 20
}

module.exports = {validarEmail, validarNombre, validarNumero}