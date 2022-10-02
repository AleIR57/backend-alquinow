const usuarioCtrl = {};

const Usuario = require('../models/Usuario');

usuarioCtrl.obtenerVariosUsuarios = async (req,res) => {
    const usuarios = await Usuario.find();
    res.json(usuarios);
}


usuarioCtrl.obtenerUnUsuario = async (req,res) => {

    const usuario = await Usuario.findById(req.params.id);
    
    res.json(usuario);
}


usuarioCtrl.crearUsuario = async (req,res) => {
    const nuevoUsuario =  new Usuario(req.body);
    await nuevoUsuario.save();
    
    res.send({message: 'Usuario creado'});

}
usuarioCtrl.editarUsuario = async (req,res) => {
    await Usuario.findByIdAndUpdate(req.params.id, req.body); 
    res.json({status: 'Usuario actualizado'});
}


usuarioCtrl.eliminarUsuario = async (req,res) => {
    await Usuario.findByIdAndDelete(req.params.id);

    res.json({status: 'Usuario eliminado'})
}

const jwt = require('jsonwebtoken');

usuarioCtrl.registrarUsuario = async (req,res) => {
    const nuevoUsuario =  new Usuario(req.body);
    await nuevoUsuario.save();


    const token = jwt.sign({_id: nuevoUsuario._id}, 'Suje');
    res.status(200).json({token})
   

}

usuarioCtrl.loginUsuario = async (req,res) =>{
    const correo = req.body.correo;
    const contrasena = req.body.contrasena;

    const usuario = await Usuario.findOne({correo})

    if(!usuario) return res.status(401).send("El correo no existe");

    if(usuario.contrasena !== contrasena) return res.status(401).send('Contraseña incorrecta');

    const token = jwt.sign({_id: usuario._id}, 'Suje');

    return res.status(200).json({token});
}



module.exports = usuarioCtrl;