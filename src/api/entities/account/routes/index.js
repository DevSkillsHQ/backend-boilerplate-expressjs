

const express = require("express");
const router = express.Router();
const { validate_header, validate_payload } = require('../../../utils/middlewares')
const validator = require('validator');
const { execute_transaction, get_account_balance } = require('../controllers');



router.post('/amount',
    validate_header({
        header_name: 'Content-Type',
        header_value: 'application/json'
    }),
    validate_payload({validations_array: [
        {
            is_valid: (val) => { return validator.isUUID(val.toString())},
            field_name: 'account_id',
        },
        {
            field_name: 'amount',
            is_valid: (val) => { return validator.isInt(val.toString())}
        }
    ]}),
    execute_transaction
)

router.get('/balance/:account_id', get_account_balance)



module.exports = router;
