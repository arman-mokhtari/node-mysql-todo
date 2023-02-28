const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("todo-db", "root", "Arman23609?", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
