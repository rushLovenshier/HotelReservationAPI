const mongoose = require('mongoose');
const PaymentSchema = new mongoose.Schema(
    {
        guest: {
            type: Object
        },
        registration: {
            type: Array
        },
        total: {
            type: Number
        },
    });
module.exports = mongoose.model("Payment", PaymentSchema);