const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()
const cors = require('cors')
const bodyParser = require('body-parser')

const GuestRoute = require('./route/GuestRoute');
const RoomRoute = require('./route/RoomRoute');
const RegistrationRoute = require('./route/RegistrationsRoute');
const PaymentRoute = require('./route/PaymentRoute');
const UserRoute = require('./route/UserRoute');

const PORT = process.env.SERVER_PORT;

const app = express();
app.use(cors())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
//parse application/json
app.use(bodyParser.json())

app.get("/", function(req, res){
    res.send("working well though")
})


mongoose.connect(
    'mongodb://127.0.0.1:27017/hotel-reservation',
).then(() => {
    app.listen(PORT, () => {
        console.log(`Management Service Up and Running on ${PORT}`);
    })
}).catch((error => {
    console.log(error)
}));

app.use('/api/v1/Guest', GuestRoute);
app.use('/api/v1/Room', RoomRoute);
app.use('/api/v1/Registration', RegistrationRoute);
app.use('/api/v1/Payment', PaymentRoute);
app.use('/api/v1/User', UserRoute);