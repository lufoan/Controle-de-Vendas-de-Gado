require("dotenv").config();
const express = require("express");
const { sequelize } = require("./models");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API de Gestão de Gado funcionando!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    console.log("Banco de dados conectado!");
  } catch (error) {
    console.error("Erro ao conectar com o banco:", error);
  }
  console.log(`Servidor rodando na porta ${PORT}`);
});