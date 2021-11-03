const mongoose = require('mongoose');
const RoomSchema = new mongoose.Schema(
    {
        id: {
            type: String,
            required: true
        },
        availability: {
            type: String,
            required: true
        },
        time: {
            type: String,
            required: true
        }
    });
module.exports = mongoose.model("Room", RoomSchema);