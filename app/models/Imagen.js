const mongoose = require('mongoose');
const ImagenSchema = new mongoose.Schema({

      codigo:{
        type: String,
        required: true 
      },
      url:{
        type: String,
        required: true
      },
      width:{
        type: Number,
        required: true
      },
      height:{
        type: Number,
        required: true 
      },
      

});

const Imagen = mongoose.model('Imagen',ImagenSchema);
 
module.exports = Imagen;