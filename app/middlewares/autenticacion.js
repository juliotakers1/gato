const jwt = require('jsonwebtoken');

let verificarAuth = (req, res, next) => {
console.log('hola');
  // Leer headers
  let token = req.get('token');
  console.log(token);
  jwt.verify(token, 'secret', (err, decoded) => {

    if(err) {
      return res.status(401).json({
        mensaje: 'Error de token',
        err
      })
    }

    // Creamos una nueva propiedad con la info del usuario
    req.usuario = decoded.data; //data viene al generar el token en login.js
    next();

  });

}

const verificarAdministrador = (req, res, next) => {

  let rol = req.usuario.role;

  console.log(rol);
  
  if(rol !== 'ADMIN'){
    return res.status(401).json({
      mensaje: 'Rol no autorizado!'
    })
  }
  
  next();

}

module.exports = {verificarAuth, verificarAdministrador};
