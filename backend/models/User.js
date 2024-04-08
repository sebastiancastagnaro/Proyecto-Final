

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    role: { type: String, enum: ['user', 'admin', 'premium'], default: 'user' },
    lastConnection: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);

