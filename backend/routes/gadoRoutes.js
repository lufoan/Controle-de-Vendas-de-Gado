const express = require("express");
const { Gado } = require("../models");
const router = express.Router();

// Criar novo gado
router.post("/", async (req, res) => {
  const { nome, peso, idade, tipo } = req.body;
  const novoGado = await Gado.create({ nome, peso, idade, tipo });
  res.json(novoGado);
});

// Listar todos os gados
router.get("/", async (req, res) => {
  const gados = await Gado.findAll();
  res.json(gados);
});

module.exports = router;