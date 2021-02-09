

const { Account, Transaction } = require('../../../../../database');

const execute_transaction = async (req, res) => {

    const payload = req.body;

    const { account_id, amount } = payload;
    const transaction_id = req.header('Transaction-Id');

    let account_promise = Account.findOne({ where: { account_id } });
    let transaction_promise = Transaction.findOne({ where: { transaction_id } });
    let new_transaction;

    let [old_account, old_transaction] = await Promise.all([account_promise, transaction_promise])
    
    if(!old_account) {
        // It could be optimized even fruther with promise all <=
        await Account.create({ account_id });
    }

    if(!old_transaction) {
        const new_transaction_promise = Transaction.create({ transaction_id, amount, account_id });

        const increment_promise = Account.increment('balance', { by: amount, where: { account_id } } );

        const [created_transaction, increment] = await Promise.all([new_transaction_promise, increment_promise])

        new_transaction = created_transaction;

    }

    res.send(new_transaction ? new_transaction : old_transaction);

}

module.exports = execute_transaction;