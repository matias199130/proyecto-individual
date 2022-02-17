// [ ] GET /types:
// Obtener todos los tipos de dieta posibles
// En una primera instancia, cuando no exista ninguno,
// deberán precargar la base de datos con los tipos de
// datos indicados por spoonacular acá
const express = require("express");
const router = express.Router();
const { Diet } = require("../db.js");
const { Router } = require('express');

router.get("/", async (req, res) => {
  
})

module.exports = router;
