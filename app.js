const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const path = require('path')

const pizzeriaRoutes = require('./routes/pizzeria');
const userRoutes = require('./routes/user');

mongoose.connect('mongodb+srv://julien:x24w0tiKAec2ScQC@cluster0.ircyy.mongodb.net/test?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));


const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

/*
DÉPLOIEMENT HEROKU
const distDir = __dirname + "/dist/";
app.use(express.static(distDir));
*/

app.use('/images', express.static(path.join(__dirname, 'images')))

app.use('/api/pizzeria', pizzeriaRoutes);
app.use('/api/auth', userRoutes);

module.exports = app;
