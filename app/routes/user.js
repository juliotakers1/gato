var express = require('express');
var router = express.Router();

// Importamos modelo Tarea
const User = require ('../models/User.js');
const {verificarAuth, verificarAdministrador} = require('../middlewares/autenticacion.js');
// Hash Contraseña
const bcrypt = require('bcrypt');
const saltRounds = 10;

// Filtrar campos de PUT
const _ = require('underscore');

router.post('/nuevo-usuario', async (req, res) => {

  const body = {
    nombre: req.body.nombre,
    email: req.body.email,
    //pass: req.body.pass,
    role: req.body.role,
  }

  body.pass = bcrypt.hashSync(req.body.pass, saltRounds);

  try {

    const userDB = await User.create(body);

    return res.json(userDB);
    
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ocurrio un error',
      error
    });
  }

});
router.put('/:id', async(req, res) => {

  const _id = req.params.id;
   const  body = _.pick(req.body, ['nombre', 'email', 'pass', 'activo']);

   if(body.pass) {
    body.pass = bcrypt.hashSync(req.body.pass, saltRounds);
   }

  try {
    // {new:true} nos devuelve el usuario actualizado
    const usuarioDB = await User.findByIdAndUpdate(_id, body, {new: true, runValidators: true});

    return res.json(usuarioDB);

  } catch (error) {
    return res.status(400).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }

});

/* GET users listing. */
router.get('/', function(req, res, next) {
  User.find({}) 
  .then(users =>{
      if(users.length) return res.status(200).send({users});
      return res.status(204).send({message: 'NO CONTENT'});
  }).catch(error => res.status(500).send({error}));
});

module.exports = router;