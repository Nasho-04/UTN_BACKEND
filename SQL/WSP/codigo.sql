CREATE TABLE usuarios (
    usuario_id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(70) NOT NULL UNIQUE,
    contraseña VARCHAR(255) NOT NULL,
    creando_en DATE DEFAULT CURRENT_DATE
)

CREATE TABLE contactos (
	contacto_id INT PRIMARY KEY AUTO_INCREMENT,
    usuario_id_fk INT NOT NULL UNIQUE,
    contacto_usuario_id_fk INT NOT NULL UNIQUE,
    creado_en DATE DEFAULT CURRENT_DATE,
    FOREIGN KEY (usuario_id_fk) REFERENCES usuarios(usuario_id),
    FOREIGN KEY (contacto_usuario_id_fk) REFERENCES usuarios(usuario_id)
)

CREATE TABLE chat (
	chat_id INT PRIMARY KEY AUTO_INCREMENT,
    enviado_por_fk INT NOT NULL,
    recibido_por_fk INT NOT NULL,
    mensaje TEXT NOT NULL,
    creado_en DATE DEFAULT CURRENT_DATE,
    FOREIGN KEY (enviado_por_fk) REFERENCES usuarios(usuario_id),
    FOREIGN KEY (recibido_por_fk) REFERENCES usuarios(usuario_id)
)

/* INSERTAR UN USUARIO */
INSERT INTO usuarios (username, email, contraseña) VALUES ('pepe', 'pepe@gmail.com', 'pepe123')

/* INSERTAR VARIOS USUARIOS */
INSERT INTO `usuarios`(`username`, `email`, `contraseña`) VALUES ('jose', 'jose@gmail.com', 'jose123'), ('maria', 'maria@gmail.com', 'maria123')

/* INSERTAR UN CONTACTO */
INSERT INTO contactos (usuario_id_fk, contacto_usuario_id_fk) VALUES (1, 3), (3, 1)

/* INSERTAR UN CHAT */
INSERT INTO chat (enviado_por_fk, recibido_por_fk, mensaje) VALUES (1, 3, 'Hola'), (3, 1, 'Hola')

/* ELIMINAR UN USUARIO */
DELETE FROM usuarios WHERE usuario_id = 4