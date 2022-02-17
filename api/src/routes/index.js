const { Router } = require('express');


// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

// const { recipe, diet } = require('../db');
const recipe = require('./recipe');
const diet = require('./diet');
 const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
 router.use('/recipe', recipe);
 router.use('/diet', diet);


module.exports = router;
