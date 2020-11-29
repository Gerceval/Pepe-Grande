const fs = require('fs'); // fs = FileSystem

const Hours = require('../models/Hours');

exports.getAllHours = (req, res, next) => {
    Hours.find()
        .then(hourss => res.status(200).json(hourss))
        .catch(error => res.status(400).json({ error }));
};

exports.getOneHours = (req, res, next) => {
    Hours.findOne({ _id: req.params.id })
        .then(hours => res.status(200).json(hours))
        .catch(error => res.status(404).json({ error }));
};

exports.createOneHours = (req, res, next) => {
    const hoursObject = JSON.parse(req.body.hours);
    delete hoursObject._id;
    const hours = new Hours({
        ...hoursObject
    });
    hours.save()
        .then(() => res.status(201).json({ message: 'Enregistré' }))
        .catch(error => res.status(400).json({ error }));
};

exports.modifyOneHours = (req, res, next) => {
    const hoursObject = { ...req.body };
    Hours.updateOne({ _id: req.params.id }, { ...hoursObject, _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Objet modifié !' }))
        .catch(error => res.status(400).json({ error }));
};

exports.deleteOneHours = (req, res, next) => {
    Hours.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Objet supprimé !' }))
    .catch(error => res.status(400).json({ error }));
};
