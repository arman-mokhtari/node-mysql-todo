const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("todo-db", "root", "*******", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
