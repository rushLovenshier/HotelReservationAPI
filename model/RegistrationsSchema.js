const mongoose = require('mongoose');
const RegistrationSchema = new mongoose.Schema(
    {
        nic: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        id: {
            type: String,
            required: true
        },
        time: {
            type: String,
            required: true
        }
    });
module.exports = mongoose.model("Registration", RegistrationSchema);