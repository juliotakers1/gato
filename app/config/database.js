const mongoose = require('mongoose');
const CONFIG =  require('./config');

module.exports = {
    connection: null,
    connect: function(){
        if(this.connection) return this.connection;
        return mongoose.connect(CONFIG.DB).then(connection => {
            this.connection = this.connection;
            console.log('conexion a base de datos lista');
        }).catch(error => console.log(error));
    }
}