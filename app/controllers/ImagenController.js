const Imagen = require('../models/Imagen');
const axios = require('axios');
async function index(req,res){
    try {
        const response = await axios.get('https://api.thecatapi.com/v1/images/search', {
          params: {
            limit: 10,
          },
        });
    
        const images = response.data;
        res.json(images);
      } catch (error) {
        res.status(500).json({ error: 'Error al obtener las imágenes.' });
      }
}
function show(req,res){
    if(req.body.error) return res.status(500).send({error});

    if(!req.body.Imagenes) return res.status(404).send({message: 'not found'});
    let Imagenes = req.body.Imagenes;
    return res.status(200).send({ Imagenes});
}
let favoriteImages = [];
function favoritas(req,res){
    const { id } = req.body;
  
    if (!id) {
      return res.status(400).json({ error: 'Image ID not provided in the request body.' });
    }
  
    // Assuming the id is a valid image id, add it to the list of favorites
    favoriteImages.push(id);
    res.status(201).json({ message: 'Image marked as favorite successfully.' });
}
function verFavorita(req, res){
    res.json({ favoriteImages });
}



function create(req,res){
    console.log(req.body);
    new Imagen(req.body).save().then(imagen => res.status(201).send({imagen})).catch(error => res.status(500).send({error}));
    
}

function update(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.Imagenes) return res.status(404).send({message: 'not funsito'});
    let imagen = req.body.Imagenes[0];
    imagen = Object.assign(imagen, req.body);
    imagen.save().then(imagen =res.status(200).send({message:'UPDATED', imagen})).catch(error => res.status(500).send({error}));

}

function remove(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.Imagenes) return res.status(404).send({message: 'no funcio'});
    req.body.Imagenes[0].remove().then(imagen => res.status(200).send({message:'eliminao',imagen})).catch(error => res.status(500).send(error));
}

function find(req,res,next){
    let query = {};
    query[req.params.key] = req.params.value;
    Imagen.find(query).then(Imagenes =>{
        if(!Imagenes.length) return next();
        req.body.Imagenes = Imagenes;
        return next();
    }).catch(error =>{
        req.body.error = error;
        next();
    })
}

module.exports = {
    index,
    show,
    create,
    update,
    remove,
    find,
    favoritas,
    verFavorita
}