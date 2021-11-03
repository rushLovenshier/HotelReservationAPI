const mongoose = require('mongoose');
const GuestSchema = new mongoose.Schema(
    {
        id: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        nic: {
            type: Number,
            required: true
        },
        email: {
            type: String,
            required: true
        }
    });
module.exports = mongoose.model("Guest", GuestSchema);