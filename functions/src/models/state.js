const { DataTypes } = require("sequelize");

const sequelize = require("../../src/database/instances/database");

const State = sequelize.define(
  "State",
  {
    name: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "states",
  }
);

module.exports = State;
