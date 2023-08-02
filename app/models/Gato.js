const mongoose = require('mongoose');
const GatoSchema = new mongoose.Schema({

    
      nombre:{
        type: String,
        required: true
      },
      raza:{
        type: String,
        required: true
      },
      edad:{
        type: Number,
        required: true
      },
      fotoUrl:{
        type: String,
        required: true
      }

});

const Gato = mongoose.model('Gato',GatoSchema);
 
module.exports = Gato;