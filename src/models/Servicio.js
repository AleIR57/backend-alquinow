const { Schema, model } = require('mongoose');

const servicioSchema = new Schema({
    nombreServicio: {type: String, required: true},
    detalleServicio: {type: String, required: true},
    calificacion: {type: String, required: false},
    idUsuarioPoseedor: {type: String, required: false},
    descripcion: {type: String, required: false},
    precioAlquiler: {type: String, required: false},
    tiempoAlquiler: {type: String, required: false},
    foto: {type: String, required: true},
    estado: {type: String, required: false},
    idUsuarioAlquilador: {type: String, required: false},
    categoria: {type: String, required: false},
}, {
    timestamps: true,
    versionKey: false
});

module.exports = model('Servicio', servicioSchema);