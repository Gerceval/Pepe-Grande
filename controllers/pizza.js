const fs = require('fs'); // fs = FileSystem

const Pizza = require('../models/Pizza');

exports.getOnePizza = (req, res, next) => {
    Pizza.findOne({ _id: req.params.id })
        .then(pizza => res.status(200).json(pizza))
        .catch(error => res.status(404).json({ error }));
};

exports.createOnePizza = (req, res, next) => {
    const pizzaObject = req.body;
    delete pizzaObject._id;
    const pizza = new Pizza({
        ...pizzaObject
    });
    pizza.save()
        .then(() => res.status(201).json({ message: 'Enregistré' }))
        .catch(error => res.status(400).json({ error }));
};

exports.modifyOnePizza = (req, res, next) => {
    const pizzaObject = { ...req.body };
    Pizza.updateOne({ _id: req.params.id }, { ...pizzaObject, _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Objet modifié !' }))
        .catch(error => res.status(400).json({ error }));
};

exports.deleteOnePizza = (req, res, next) => {
    Pizza.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Objet supprimé !' }))
        .catch(error => res.status(400).json({ error }));
};
