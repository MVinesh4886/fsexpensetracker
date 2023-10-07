const SEQUELIZE = require("sequelize");
const sequelize = require("../utils/database");

const EXPENSETRACKER = sequelize.define("expense-tracker", {
  id: {
    type: SEQUELIZE.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  amount: {
    type: SEQUELIZE.DOUBLE,
    allowNull: false,
  },
  description: {
    type: SEQUELIZE.STRING,
    allowNull: false,
  },
  category: {
    type: SEQUELIZE.STRING,
    allowNull: false,
  },
});

module.exports = EXPENSETRACKER;
