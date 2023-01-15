const express = require('express');
const sendSms = require('./sendSms');


const app = express();


module.exports = function smsServer() {
    app.use(express.json());
    app.use(express.urlencoded({extended: false}));

    // TODO: Incoming messages route
    const port = 3000;
    app.post('/message', (req, res) => {
        const data = req.body;
        console.log(`Received message: \n ${data}`);
        res.sendStatus(200);

    })


    // TODO: Delivery reports route
    app.post('delivery', (req, res) => {
        const data = req.body;
        console.log(`Received report: \n ${data}`);
        res.sendStatus(200);

    })
    

  

    app.listen(port, () => {
        console.log(`App running on port: ${port}`);
        sendSms()

        // TODO: call sendSMS to send message after server starts

    });
};
