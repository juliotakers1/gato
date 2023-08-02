const express = require('express');

const GatoCtrl = require('../controllers/GatoController');
// const {verificarAuth, verificarAdministrador} = require('../middlewares/autenticacion.js');

const Router = express.Router();

Router.get('/',   GatoCtrl.index) //api.com/Gato/
        .post('/',    GatoCtrl.create)
        .get('/:key/:value',  GatoCtrl.find, GatoCtrl.show) 
        .put('/:key/:value',   GatoCtrl.find,GatoCtrl.update)
        .delete('/:key/:value',  GatoCtrl.find,GatoCtrl.remove);

module.exports = Router; 