
const { Sequelize, DataTypes } = require('sequelize');

const Account_Schema = {
    name: 'Account',
    schema: {
        // Model attributes are defined here
        account_id: {
          type: DataTypes.UUID,
          defaultValue: Sequelize.UUIDV4
        },
        balance: {
          type: DataTypes.INTEGER,
          defaultValue: 0
        }
    },
    options: {}
} 

module.exports = Account_Schema;
