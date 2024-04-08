

const User = require('../models/User');
const EmailService = require('../services/EmailService');

// Obtener todos los usuarios (solo datos principales)
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find({}, { name: 1, email: 1, role: 1 });
        res.json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener usuarios.' });
    }
};

// Eliminar usuarios inactivos
exports.deleteInactiveUsers = async (req, res) => {
    try {
        const twoDaysAgo = new Date(Date.now() - 2 * 24 * 60 * 60 * 1000); // Dos días en milisegundos
        await User.deleteMany({ lastConnection: { $lt: twoDaysAgo } });

        // Enviar correo a los usuarios eliminados
        const inactiveUsers = await User.find({ lastConnection: { $lt: twoDaysAgo } });
        inactiveUsers.forEach(user => {
            EmailService.sendEmail(user.email, 'Cuenta eliminada por inactividad', 'Su cuenta ha sido eliminada por inactividad.');
        });

        res.json({ message: 'Usuarios inactivos eliminados.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al eliminar usuarios inactivos.' });
    }
};
