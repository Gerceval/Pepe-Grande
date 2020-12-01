const fs = require('fs'); // fs = FileSystem

const Topping = require('../models/Topping');

exports.getOneTopping = (req, res, next) => {
    Topping.findOne({ _id: req.params.id })
        .then(topping => res.status(200).json(topping))
        .catch(error => res.status(404).json({ error }));
};

exports.createOneTopping = (req, res, next) => {
    const toppingObject = req.body;
    delete toppingObject._id;
    const topping = new Topping({
        ...toppingObject
    });
    topping.save()
        .then(() => res.status(201).json({ message: 'Enregistré' }))
        .catch(error => res.status(400).json({ error }));
};

exports.modifyOneTopping = (req, res, next) => {
    const toppingObject = { ...req.body };
    Topping.updateOne({ _id: req.params.id }, { ...toppingObject, _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Objet modifié !' }))
        .catch(error => res.status(400).json({ error }));
};

exports.deleteOneTopping = (req, res, next) => {
    Topping.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Objet supprimé !' }))
        .catch(error => res.status(400).json({ error }));
};
