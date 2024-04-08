

module.exports = {
    // Configuración de la base de datos MongoDB
    database: {
        host: 'localhost', 
        port: 27017, // Puerto de MongoDB
        name: 'ecommerce' // Nombre de la base de datos
    },
    // Configuración del servidor de correo electrónico (ejemplo con Gmail)
    email: {
        user: 'tucorreo@gmail.com', // Dirección de correo para enviar los correos electrónicos
        pass: 'tucontraseña' // Contraseña de la dirección de correo
    },
    // Otras configuraciones...
};
