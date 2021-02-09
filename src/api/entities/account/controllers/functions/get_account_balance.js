
const { Account } = require('../../../../../database');

const get_account_balance = async (req, res) => {
    
    const { account_id } = req.params;

    const doc = await Account.findOne({ where: { account_id } });

    if(!doc) {
        return res.status(404).send('404');
    }
    
    res.send(doc);

}

module.exports = get_account_balance;