const {Router} = require('express');

const router = Router();

const usuariosCtrl = require('../controllers/usuarios.controller.js');

//CRUD MARACO

router.get('/', usuariosCtrl.obtenerVariosUsuarios);

router.post('/', usuariosCtrl.crearUsuario);

router.get('/:id', usuariosCtrl.obtenerUnUsuario);

router.put('/:id', usuariosCtrl.editarUsuario);

router.delete('/:id', usuariosCtrl.eliminarUsuario);

router.post('/signup', usuariosCtrl.registrarUsuario);
router.post('/signin', usuariosCtrl.loginUsuario);



async function verifyToken(req, res, next) {
	try {
		if (!req.headers.authorization) {
			return res.status(401).send('Unauhtorized Request');
		}
		let token = req.headers.authorization.split(' ')[1];
		if (token === 'null') {
			return res.status(401).send('Unauhtorized Request');
		}

		const payload = await jwt.verify(token, 'secretkey');
		if (!payload) {
			return res.status(401).send('Unauhtorized Request');
		}
		req.userId = payload._id;
		next();
	} catch(e) {
		//console.log(e)
		return res.status(401).send('Unauhtorized Request');
	}
}

module.exports = router;


