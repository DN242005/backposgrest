const express = require('express');
const router = express.Router();
const { User } = require('../models');

// GET /api/users - obtener todos los usuarios
router.get('/', async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (err) {
    console.error("❌ ERROR REAL AL OBTENER USUARIOS:", err); // Log detallado
    res.status(500).json({ error: 'Error al obtener usuarios' });
  }
});

// POST /api/users - crear un nuevo usuario
router.post('/', async (req, res) => {
  try {
    const { name, email, age, comments } = req.body;
    const newUser = await User.create({ name, email, age, comments });
    res.status(201).json(newUser);
  } catch (err) {
    console.error("❌ ERROR REAL AL CREAR USUARIO:", err); // Log detallado
    res.status(500).json({ error: 'Error al crear usuario' });
  }
});

// DELETE /api/users/:id - eliminar usuario por ID
router.delete('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const deleted = await User.destroy({ where: { id } });
    if (deleted) {
      res.json({ message: 'Usuario eliminado correctamente' });
    } else {
      res.status(404).json({ error: 'Usuario no encontrado' });
    }
  } catch (err) {
    console.error("❌ ERROR REAL AL ELIMINAR USUARIO:", err); // Log detallado
    res.status(500).json({ error: 'Error al eliminar usuario' });
  }
});

module.exports = router;
