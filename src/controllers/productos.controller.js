const productoCtrl = {};

const Producto = require('../models/Producto');

productoCtrl.obtenerVariosProductos = async (req,res) => {
    const productos = await Producto.find();
    res.json(productos);
}


productoCtrl.obtenerUnProducto = async (req,res) => {

    const producto = await Producto.findById(req.params.id);
    
    res.json(producto);
}


productoCtrl.crearProducto = async (req,res) => {
    const nuevoProducto =  new Producto(req.body);
    await nuevoProducto.save();
    
    res.send({message: 'Producto creado'});

}
productoCtrl.editarProducto = async (req,res) => {
    await Producto.findByIdAndUpdate(req.params.id, req.body); 
    res.json({status: 'Producto actualizado'});
}


productoCtrl.eliminarProducto = async (req,res) => {
    await Producto.findByIdAndDelete(req.params.id);

    res.json({status: 'Producto eliminado'})
}

module.exports = productoCtrl;