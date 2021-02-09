
const { Sequelize } = require('sequelize'); 
const Account_Model = require('../api/entities/account/models/account');
const Transaction_Model = require('../api/entities/transaction/models/transaction');

const db_path = 'src/database/database.sqlite';

const db = new Sequelize({
    dialect: 'sqlite',
    storage: db_path
});

const models = {
    Account: db.define(Account_Model.name, Account_Model.schema),
    Transaction: db.define(Transaction_Model.name, Transaction_Model.schema)
};

// Creates the tables on the DB if they do not exist
db.sync({ force: true } /* FOR TESTING PURPOSES ONLY <=== */)
  .then(async () => {

    console.log(`Database & tables created!`);

    await db.authenticate();

    console.log(`Connected to DB`);

  })


module.exports = {
    ...models
}