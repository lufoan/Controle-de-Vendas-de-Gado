const sequelize = require("../config/database");
const Gado = require("./Gado");

const syncDatabase = async () => {
  try {
    await sequelize.sync({ force: true }); // Isso recria as tabelas do zero
    console.log("Banco de dados sincronizado!");
  } catch (error) {
    console.error("Erro ao sincronizar o banco:", error);
  }
};

module.exports = { sequelize, syncDatabase, Gado };