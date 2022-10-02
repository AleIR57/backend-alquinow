const { Schema, model } = require('mongoose');

const usuarioSchema = new Schema({
    nombres: {type: String, required: true},
    apellidos: {type: String, required: true},
    tipoIdentificacion: {type: String, required: false},
    identificacion: {type: String, required: false},
    rol: {type: String, required: false},
    celular: {type: String, required: false},
    residencia: {type: String, required: false},
    correo: {type: String, required: true},
    contrasena: {type: String, required: true},
    fechaNacimiento: {type: String, required: true},
    estado: {type: String, required: false},
    foto: {type: String, required: false},
}, {
    timestamps: true,
    versionKey: false
});

module.exports = model('Usuario', usuarioSchema);