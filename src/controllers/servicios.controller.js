const servicioCtrl = {};

const Servicio = require('../models/Servicio');

servicioCtrl.obtenerVariosServicios = async (req,res) => {
    const servicios = await Servicio.find();
    res.json(servicios);
}

servicioCtrl.obtenerUnServicio = async (req,res) => {

    const servicio = await Servicio.findById(req.params.id);
    
    res.json(servicio);
}


servicioCtrl.crearServicio = async (req,res) => {
    const nuevoServicio =  new Servicio(req.body);
    await nuevoServicio.save();
    
    res.send({message: 'Servicio creado'});

}
servicioCtrl.editarServicio = async (req,res) => {
    await Servicio.findByIdAndUpdate(req.params.id, req.body); 
    res.json({status: 'Servicio actualizado'});
}


servicioCtrl.eliminarServicio = async (req,res) => {
    await Servicio.findByIdAndDelete(req.params.id);

    res.json({status: 'Servicio eliminado'})
}


module.exports = servicioCtrl;