const Gato = require('../models/Gato');

function index(req,res){
    Gato.find({}) 
    .then(gatos =>{
        if(gatos.length) return res.status(200).send({gatos});
        return res.status(204).send({message: 'NO CONTENT'});
    }).catch(error => res.status(500).send({error}));
}
function show(req,res){
    if(req.body.error) return res.status(500).send({error});

    if(!req.body.gatos) return res.status(404).send({message: 'not found'});
    let gatos = req.body.gatos;
    return res.status(200).send({ gatos});
}

function create(req,res){
    console.log(req.body);
    new Gato(req.body).save().then(gato => res.status(201).send({gato})).catch(error => res.status(500).send({error}));
    
}

function update(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.gatos) return res.status(404).send({message: 'not funsito'});
    let gato = req.body.gatos[0];
    gato = Object.assign(gato, req.body);
    gato.save().then(gato =res.status(200).send({message:'UPDATED', gato})).catch(error => res.status(500).send({error}));

}

function remove(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.gatos) return res.status(404).send({message: 'no funcio'});
    req.body.gatos[0].remove().then(gato => res.status(200).send({message:'eliminao',gato})).catch(error => res.status(500).send(error));
}

function find(req,res,next){
    let query = {};
    query[req.params.key] = req.params.value;
    Gato.find(query).then(gatos =>{
        if(!gatos.length) return next();
        req.body.gatos = gatos;
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
    find
}