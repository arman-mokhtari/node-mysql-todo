const { DataTypes } = require("sequelize");

const sequelize = require("../utils/database");

const Todo = sequelize.define("Todo", {
  //? model attribute

  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  text: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  completed: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    allowNull: true, //? its true by default
  },
});

module.exports = Todo;
