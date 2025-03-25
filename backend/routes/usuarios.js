const express = require('express');
const router = express.Router();
const Usuario = require('../models/Usuario');

// Criar um novo usuário (CREATE)
router.post('/', async (req, res) => {
    try {
        const { nome, email, telefone } = req.body;
        const novoUsuario = await Usuario.create({ nome, email, telefone });
        res.status(201).json(novoUsuario);
    } catch (error) {
        res.status(500).json({ erro: error.message });
    }
});

// Listar todos os usuários (READ)
router.get('/', async (req, res) => {
    try {
        const usuarios = await Usuario.findAll();
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({ erro: error.message });
    }
});

// Buscar um usuário por ID (READ)
router.get('/:id', async (req, res) => {
    try {
        const usuario = await Usuario.findByPk(req.params.id);
        if (!usuario) return res.status(404).json({ erro: 'Usuário não encontrado' });
        res.json(usuario);
    } catch (error) {
        res.status(500).json({ erro: error.message });
    }
});

// Atualizar um usuário por ID (UPDATE)
router.put('/:id', async (req, res) => {
    try {
        const { nome, email, telefone } = req.body;
        const usuario = await Usuario.findByPk(req.params.id);
        if (!usuario) return res.status(404).json({ erro: 'Usuário não encontrado' });

        usuario.nome = nome;
        usuario.email = email;
        usuario.telefone = telefone;
        await usuario.save();

        res.json(usuario);
    } catch (error) {
        res.status(500).json({ erro: error.message });
    }
});

// Deletar um usuário por ID (DELETE)
router.delete('/:id', async (req, res) => {
    try {
        const usuario = await Usuario.findByPk(req.params.id);
        if (!usuario) return res.status(404).json({ erro: 'Usuário não encontrado' });

        await usuario.destroy();
        res.json({ mensagem: 'Usuário deletado com sucesso' });
    } catch (error) {
        res.status(500).json({ erro: error.message });
    }
});

module.exports = router;