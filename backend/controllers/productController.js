

const Product = require('../models/Product');
const User = require('../models/User');
const EmailService = require('../services/EmailService');

// Eliminar producto
exports.deleteProduct = async (req, res) => {
    try {
        const productId = req.params.productId;
        const product = await Product.findById(productId);
        await Product.findByIdAndDelete(productId);

        // Enviar correo si el producto pertenece a un usuario premium
        if (product.owner) {
            const owner = await User.findById(product.owner);
            if (owner.role === 'premium') {
                EmailService.sendEmail(owner.email, 'Producto eliminado', 'Uno de tus productos ha sido eliminado.');
            }
        }

        res.json({ message: 'Producto eliminado correctamente.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al eliminar el producto.' });
    }
};
