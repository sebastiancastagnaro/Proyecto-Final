 

 const nodemailer = require('nodemailer');

 const transporter = nodemailer.createTransport({
     service: 'gmail',
     auth: {
         user: 'tucorreo@gmail.com', // Coloca aquí tu dirección de correo
         pass: 'tucontraseña' // Coloca aquí tu contraseña
     }
 });
 
 const sendEmail = (to, subject, text) => {
     const mailOptions = {
         from: 'tucorreo@gmail.com', // Dirección de correo del remitente
         to: to, // Dirección de correo del destinatario
         subject: subject, // Asunto del correo
         text: text // Contenido del correo
     };
 
     transporter.sendMail(mailOptions, function(error, info) {
         if (error) {
             console.error('Error al enviar el correo:', error);
         } else {
             console.log('Correo enviado correctamente:', info.response);
         }
     });
 };
 
 module.exports = { sendEmail };
 