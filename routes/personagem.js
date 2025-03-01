const express = require("express");
const router = express.Router();
const controller = require("../controllers/personagem");

// Botar as requisições
router.post('/cadastrar-heroi', controller.postH);
router.post('/cadastrar-vilao', controller.postV);
router.post('/batalhar/:id/:id', controller.postB)
router.get('/', controller.get)
module.exports = router