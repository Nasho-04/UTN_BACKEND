class Historial {
    acciones : Accion[]

    constructor() {
        this.acciones = []
    }

    agregarAccion(accion: Accion) {
        this.acciones.push(accion)
    }

    eliminarAccionPorId(id: number) {
        this.acciones.filter((accion) => accion.id !== id)
    }

    eliminarTodo() {
        this.acciones = []
    }

    mostrarHistorial() {
        console.log(this.acciones)
    }
}

class Accion {
    id: number
    descripcion: string
    fecha: Date

    constructor(id: number, descripcion: string, fecha: Date) {
        this.id = id
        this.descripcion = descripcion
        this.fecha = fecha
    }

    mostrarDetalle(): void {
        console.log(this.descripcion)
    }
}

class AccionInicioSesion extends Accion {
    dispositivo_origen: string

    constructor (id: number, descripcion: string, fecha: Date, dispositivo_origen: string) {
        super(id, descripcion, fecha)
        this.dispositivo_origen = dispositivo_origen
    }

    mostrarDetalle(): void {
        console.log(`El usuario inició sesión en su ${this.dispositivo_origen}`)
    }
}

class AccionCierreSesion extends Accion {
    dispositivo_origen: string
    tiempo_de_sesion: number
    constructor (id: number, descripcion: string, fecha: Date, dispositivo_origen: string, tiempo_de_sesion: number) {
        super(id, descripcion, fecha)
        this.dispositivo_origen = dispositivo_origen
        this.tiempo_de_sesion = tiempo_de_sesion
    }

    mostrarDetalle(): void {
        console.log(`El usuario cerró la sesión en su ${this.dispositivo_origen} luego de ${this.tiempo_de_sesion} minutos`)
    }
}

class AccionActualizarPerfil extends Accion {
    cambios: Cambio[]

    constructor (id: number, descripcion: string, fecha: Date, cambios: Cambio[]) {
        super(id, descripcion, fecha)
        this.cambios = cambios
    }

    mostrarDetalle(): void {
        console.log(this.descripcion)
    }
}

class Cambio {
    id_cambio: number
    valor_anterior: string
    nuevo_valor: string
    campo: string

    constructor (id_cambio: number, valor_anterior: string, nuevo_valor: string, campo: string) {
        this.id_cambio = id_cambio
        this.valor_anterior = valor_anterior
        this.nuevo_valor = nuevo_valor
        this.campo = campo
    }

    mostrarDetalle() : void {
        console.log(`se cambió de ${this.valor_anterior} a ${this.nuevo_valor} en el campo ${this.campo}`)
    }
}

class AccionCompra extends Accion {
    productos: string[]
    total: number

    constructor (id: number, descripcion: string, fecha: Date, productos: string[], total: number) {
        super(id, descripcion, fecha)
        this.productos = productos
        this.total = total
    }

    mostrarDetalle(): void {
        console.log(`El total de la compra fue de $${this.total} y se compró ${this.productos}`)
    }
}

class AccionEnvioMensaje extends Accion {
    destinatario: string
    mensaje: string

    constructor (id: number, descripcion: string, fecha: Date, destinatario: string, mensaje: string) {
        super(id, descripcion, fecha)
        this.destinatario = destinatario
        this.mensaje = mensaje
    }

    mostrarDetalle(): void {
        console.log(`Se le envió el mensaje: ${this.mensaje} a ${this.destinatario}`)
    }
}

const historial : Historial = new Historial()

const compraSemanal: AccionCompra = new AccionCompra(28, 'Usuario realizó una compra', new Date, ['milanesas', 'verduras', 'papas fritas'], 9584)

historial.agregarAccion(new AccionEnvioMensaje(1, 'Usuario envió un mensaje', new Date, 'Nacho', 'querés jugar al rocket?'))
historial.agregarAccion(new AccionCompra(2, 'Usuario hizo una compra', new Date, ['bananas', 'manzanas', 'peras'], 7840))
historial.agregarAccion(new AccionActualizarPerfil(3, 'Usuario actualizó su perfil', new Date, [new Cambio(1, 'Nacho', 'Nachoo_Nieva', 'nombre de perfil'), new Cambio(2, 'messiteamo', 'pepitosyrumbas00', 'contraseña')]))
historial.mostrarHistorial()
compraSemanal.mostrarDetalle()

const mensaje = new AccionInicioSesion(213, 'Usuario inició sesión', new Date, 'Samsung S24 Ultra')
mensaje.mostrarDetalle()