const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    name: { type: String, require: true },
    lastname: { type: String, require: true },
    username: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
    isAdmin: { type: Boolean, default: false }
}, {
    timestamps: true
});

module.exports = mongoose.model('User', User);