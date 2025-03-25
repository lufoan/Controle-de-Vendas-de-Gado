const express = require('express');
const sequelize = require('./config/database');
const usuariosRoutes = require('./routes/usuarios');

const app = express();
app.use(express.json());

app.use('/usuarios', usuariosRoutes);

sequelize.sync().then(() => {
    console.log('Banco de dados sincronizado.');
}).catch(error => {
    console.error('Erro ao sincronizar o banco de dados:', error);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
