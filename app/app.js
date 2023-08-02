const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const App = express();


const Imagen = require('./routes/imagen');
const Gato = require('./routes/gato');
const User = require('./routes/user');
const Login = require('./routes/login');


App.use(bodyParser.json());
App.use(bodyParser.urlencoded({extended:false}));
App.use(cors());
 

App.use('/imagen',Imagen);
App.use('/gato',Gato);
 App.use('/user', User);
 App.use('/login', Login);

module.exports = App;