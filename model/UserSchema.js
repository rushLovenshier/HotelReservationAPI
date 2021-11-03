const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        maxlength: 45
    },
    contact: {
        type: String,
        required: true,
        maxlength: 10
    },
    email: {
        type: String,
        required: true,
        maxlength: 45
    },
    password: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("user", UserSchema);