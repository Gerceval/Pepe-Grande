const fs = require('fs'); // fs = FileSystem

const Pokemon = require('../models/Pokemon');

exports.createPokemon = (req, res, next) => {
    const pokemonObject = JSON.parse(req.body.thing);
    delete pokemonObject._id;
    const pokemon = new Pokemon({
        ...pokemonObject,
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    });
    pokemon.save()
        .then(() => res.status(201).json({message: 'Enregistré'}))
        .catch(error => res.status(400).json({error}));
};

exports.modifyPokemon = (req, res, next) => {
    const pokemonObject =
        req.file ? // est-ce qu'on envoi un fichier ?
            {
                ...JSON.parse(req.body.thing),
                imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
            }
            :
            {...req.body};
    Pokemon.updateOne({_id: req.params.id}, {...pokemonObject, _id: req.params.id})
        .then(() => res.status(200).json({message: 'Objet modifié !'}))
        .catch(error => res.status(400).json({error}));
};

exports.deletePokemon = (req, res, next) => {
    Pokemon.findOne({ _id: req.params.id })
        .then(thing => {
            const filename = thing.imageUrl.split('/images/')[1];
            fs.unlink(`images/${filename}`, () => {
                Pokemon.deleteOne({ _id: req.params.id })
                    .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
                    .catch(error => res.status(400).json({ error }));
            });
        })
        .catch(error => res.status(500).json({ error }));
};

exports.getOnePokemon = (req, res, next) => {
    Pokemon.findOne({_id: req.params.id})
        .then(thing => res.status(200).json(thing))
        .catch(error => res.status(404).json({error}));
};

exports.getAllPokemons = (req, res, next) => {
    Pokemon.find()
        .then(things => res.status(200).json(things))
        .catch(error => res.status(400).json({error}));
};
