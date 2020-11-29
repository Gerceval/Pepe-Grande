const fs = require('fs'); // fs = FileSystem

const Pizzeria = require('../models/Pizzeria');

exports.getOnePizzeria = (req, res, next) => {
    Pizzeria.findOne({ _id: req.params.id })
        .then(pizzeria => res.status(200).json(pizzeria))
        .catch(error => res.status(404).json({ error }));
};

exports.createOnepizzeria = (req, res, next) => {
    const pizzeriaObject = req.body;
    delete pizzeriaObject._id;
    const pizzeria = new Pizzeria({
        ...pizzeriaObject
    });
    pizzeria.save()
        .then(() => res.status(201).json({ message: 'Enregistré' }))
        .catch(error => res.status(400).json({ error }));
};

exports.modifyOnepizzeria = (req, res, next) => {
    const pizzeriaObject = { ...req.body };
    Pizzeria.updateOne({ _id: req.params.id }, { ...pizzeriaObject, _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Objet modifié !' }))
        .catch(error => res.status(400).json({ error }));
};

exports.deleteOnepizzeria = (req, res, next) => {
    Pizzeria.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Objet supprimé !' }))
    .catch(error => res.status(400).json({ error }));
};
