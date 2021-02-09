

const express = require("express");
const router = express.Router();
const { Transaction } = require('../../../../database')




router.get('/:transaction_id', async (req, res) => {
    
    const { transaction_id } = req.params;

    const doc = await Transaction.findOne({ where: { transaction_id } });

    if(!doc) {
        return res.status(404).send('404');
    }
    
    res.send(doc);
    
})




module.exports = router;
