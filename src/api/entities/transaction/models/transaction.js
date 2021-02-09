
const { Sequelize, DataTypes } = require('sequelize');

const Account_Schema = {
    name: 'Transaction',
    schema: {
        // Model attributes are defined here
        amount: {
          type: DataTypes.INTEGER
        },
        transaction_id: {
          type: DataTypes.UUID,
          defaultValue: Sequelize.UUIDV4
        },
        account_id: {
          type: DataTypes.UUID
        }
    },
    options: {}
} 

module.exports = Account_Schema;
