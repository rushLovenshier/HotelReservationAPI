const express = require('express');
const PaymentController = require('../controller/PaymentController');

const router = express.Router();

router.post('/savePayment', PaymentController.savePayment);

module.exports = router;