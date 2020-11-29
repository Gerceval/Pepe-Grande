const multer = require('multer');

const MIME_TYPES = {
    'image/jpg': 'jpg',
    'image/jpeg': 'jpg',
    'image/png': 'png'
};

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'images'); // nom du dossier images/
    },
    filename: (req, file, callback) => {
        const name = file.originalname.split(' ').join('_'); // si des espaces dans le nom
        const extension = MIME_TYPES[file.mimetype];
        callback(null, name + Date.now() + '.' + extension);
    }
});

module.exports = multer({storage: storage}).single('image'); // .single('image') = dit à Multer qu'il s'agit d'un fichier image unique