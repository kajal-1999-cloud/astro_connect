const mongoose = require('mongoose');

const AstrologerSchema = new mongoose.Schema({
    name: {type:String},
    connections: { type: Number, default: 0 },
    top: { type: Boolean, default: false },
});

const Astrologer = mongoose.model('Astrologer', AstrologerSchema);

module.exports = Astrologer;