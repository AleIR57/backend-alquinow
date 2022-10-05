const {Router} = require('express');

const router = Router();

const serviciosCtrl = require('../controllers/servicios.controller.js');

//CRUD MARACO

router.get('/', serviciosCtrl.obtenerVariosServicios);

router.post('/', serviciosCtrl.crearServicio);

router.get('/:id', serviciosCtrl.obtenerUnServicio);

router.put('/:id', serviciosCtrl.editarServicio);

router.delete('/:id', serviciosCtrl.eliminarServicio);

module.exports = router;


