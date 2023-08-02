const express = require('express');

const ImagenCtrl = require('../controllers/ImagenController');

const Router = express.Router();

Router.get('/',ImagenCtrl.index) //api.com/Imagen/
        .get('/favoritas', ImagenCtrl.verFavorita)
        .post('/', ImagenCtrl.create)
        .post('/favoritas', ImagenCtrl.favoritas)
        .get('/:key/:value', ImagenCtrl.find, ImagenCtrl.show) 
        .put('/:key/:value', ImagenCtrl.find,ImagenCtrl.update)
        .delete('/:key/:value', ImagenCtrl.find,ImagenCtrl.remove);

module.exports = Router; 