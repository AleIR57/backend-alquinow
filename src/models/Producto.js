const { Schema, model } = require('mongoose');

const FotosProducto = new Schema({
    fotoDetallada: {type: String, required: false},
})

const productoSchema = new Schema({
    nombreProducto: {type: String, required: false},
    detalleProducto: {type: String, required: false},
    calificacion: {type: String, required: false},
    idUsuarioPoseedor: {type: String, required: false},
    descripcion: {type: String, required: false},
    precioAlquiler: {type: String, required: false},
    tiempoAlquiler: {type: String, required: false},
    marca: {type: String, required: false},
    modelo: {type: String, required: false},
    foto: {type: String, required: false},
    estado: {type: String, required: false},
    idUsuarioAlquilador: {type: String, required: false},
    fotosDetalladas: [String],
    video: {type: [Schema.Types.Mixed], required: false},
}, {
    timestamps: true,
    versionKey: false
});

module.exports = model('Producto', productoSchema);