"use strict";
class Historial {
    constructor() {
        this.acciones = [];
    }
    agregarAccion(accion) {
        this.acciones.push(accion);
    }
    eliminarAccionPorId(id) {
        this.acciones.filter((accion) => accion.id !== id);
    }
    eliminarTodo() {
        this.acciones = [];
    }
    mostrarHistorial() {
        console.log(this.acciones);
    }
}
class Accion {
    constructor(id, descripcion, fecha) {
        this.id = id;
        this.descripcion = descripcion;
        this.fecha = fecha;
    }
    mostrarDetalle() {
        console.log(this.descripcion);
    }
}
class AccionInicioSesion extends Accion {
    constructor(id, descripcion, fecha, dispositivo_origen) {
        super(id, descripcion, fecha);
        this.dispositivo_origen = dispositivo_origen;
    }
    mostrarDetalle() {
        console.log(`El usuario inició sesión en su ${this.dispositivo_origen}`);
    }
}
class AccionCierreSesion extends Accion {
    constructor(id, descripcion, fecha, dispositivo_origen, tiempo_de_sesion) {
        super(id, descripcion, fecha);
        this.dispositivo_origen = dispositivo_origen;
        this.tiempo_de_sesion = tiempo_de_sesion;
    }
    mostrarDetalle() {
        console.log(`El usuario cerró la sesión en su ${this.dispositivo_origen} luego de ${this.tiempo_de_sesion} minutos`);
    }
}
class AccionActualizarPerfil extends Accion {
    constructor(id, descripcion, fecha, cambios) {
        super(id, descripcion, fecha);
        this.cambios = cambios;
    }
    mostrarDetalle() {
        console.log(this.descripcion);
    }
}
class Cambio {
    constructor(id_cambio, valor_anterior, nuevo_valor, campo) {
        this.id_cambio = id_cambio;
        this.valor_anterior = valor_anterior;
        this.nuevo_valor = nuevo_valor;
        this.campo = campo;
    }
    mostrarDetalle() {
        console.log(`se cambió de ${this.valor_anterior} a ${this.nuevo_valor} en el campo ${this.campo}`);
    }
}
class AccionCompra extends Accion {
    constructor(id, descripcion, fecha, productos, total) {
        super(id, descripcion, fecha);
        this.productos = productos;
        this.total = total;
    }
    mostrarDetalle() {
        console.log(`El total de la compra fue de $${this.total} y se compró ${this.productos}`);
    }
}
class AccionEnvioMensaje extends Accion {
    constructor(id, descripcion, fecha, destinatario, mensaje) {
        super(id, descripcion, fecha);
        this.destinatario = destinatario;
        this.mensaje = mensaje;
    }
    mostrarDetalle() {
        console.log(`Se le envió el mensaje: ${this.mensaje} a ${this.destinatario}`);
    }
}
const historial = new Historial();
const compraSemanal = new AccionCompra(28, 'Usuario realizó una compra', new Date, ['milanesas', 'verduras', 'papas fritas'], 9584);
historial.agregarAccion(new AccionEnvioMensaje(1, 'Usuario envió un mensaje', new Date, 'Nacho', 'querés jugar al rocket?'));
historial.agregarAccion(new AccionCompra(2, 'Usuario hizo una compra', new Date, ['bananas', 'manzanas', 'peras'], 7840));
historial.agregarAccion(new AccionActualizarPerfil(3, 'Usuario actualizó su perfil', new Date, [new Cambio(1, 'Nacho', 'Nachoo_Nieva', 'nombre de perfil'), new Cambio(2, 'messiteamo', 'pepitosyrumbas00', 'contraseña')]));
historial.mostrarHistorial();
compraSemanal.mostrarDetalle();
const mensaje = new AccionInicioSesion(213, 'Usuario inició sesión', new Date, 'Samsung S24 Ultra');
mensaje.mostrarDetalle();
