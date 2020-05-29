const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Schema consists of only one value - rest is for validation
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true, // If somebody put a lot of spaces it will be trimmed of
        minlength: 3
    },
}, {
    timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;