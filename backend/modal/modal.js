const mongoose = require('mongoose');

const ModalSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
}, { collection: 'Modal' }); // Explicitly sets collection name

module.exports = mongoose.model('Modal', ModalSchema);