const Payment = require('../model/PaymentSchema');

const savePayment = (req, resp)=>{
    const payment= new Payment({
        guest:req.body.guest,
        registration:req.body.registration,
        total:req.body.total
    });
    payment.save().then(response=>{
        resp.status(201).json({state:true, message:'Saved!'});
    }).catch(error=>{
        resp.status(500).json(error);
    })
}

module.exports = {savePayment}