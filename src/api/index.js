

const express = require("express");
const router = express.Router();


// IMPORT ENDPOINTs TO API

    // PING
        router.get('/ping', (req, res) => {
            res.send("The service is up and running.")
        })

    // TRANSACTION
        const transaction_routes = require('./entities/transaction/routes');
        router.use('/transaction', transaction_routes);

    // ACCOUNT
        const account_routes = require('./entities/account/routes');
        // I would use /account instead for the prefix and for the routes:
            // PUT /account/balance
            // GET /account/balance
        router.use('/', account_routes);

    //




module.exports = router;
