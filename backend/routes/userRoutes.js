

const express = require('express');
const router = express.Router();

// Controladores de usuarios
const UserController = require('../controllers/userController');

// Ruta para obtener todos los usuarios
router.get('/', UserController.getAllUsers);

// Ruta para limpiar usuarios inactivos
router.delete('/inactive', UserController.deleteInactiveUsers);

module.exports = router;
