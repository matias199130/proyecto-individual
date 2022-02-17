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
  try {
    let typesDiet = await Diet.findAll();
    res.status(200).json(typesDiet);
  } catch (error) {
    res.status(400).send(error);
  }
  console.log(typesDiet)
});

module.exports = router;
