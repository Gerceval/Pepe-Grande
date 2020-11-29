const express = require('express');
const router = express.Router();

const pokemonController = require('../controllers/pokemon');

const auth = require('../middlewares/auth');
const multer = require('../middlewares/multer-config');

router.post('/', auth, multer, pokemonController.createPokemon);

router.put('/:id', auth, multer, pokemonController.modifyPokemon);

router.delete('/:id', auth, pokemonController.deletePokemon);

router.get('/:id', auth, pokemonController.getOnePokemon);

router.get('/', auth, pokemonController.getAllPokemons);

module.exports = router;
