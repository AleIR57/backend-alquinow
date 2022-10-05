const {Router} = require('express');

const router = Router();

const productosCtrl = require('../controllers/productos.controller.js');

//CRUD MARACO

router.get('/', productosCtrl.obtenerVariosProductos);

router.post('/', productosCtrl.crearProducto);

router.get('/:id', productosCtrl.obtenerUnProducto);

router.put('/:id', productosCtrl.editarProducto);

router.delete('/:id', productosCtrl.eliminarProducto);


module.exports = router;


