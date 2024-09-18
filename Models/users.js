const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { type: String },
    connectedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'Astrologer' },
});

const User = mongoose.models.User || mongoose.model('User', UserSchema);

module.exports = User;
