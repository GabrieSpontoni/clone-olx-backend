const { DataTypes } = require("sequelize");

const sequelize = require("../../src/database/instances/database");
const State = require("../models/state");

const User = sequelize.define(
  "User",
  {
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    stateId: {
      type: DataTypes.STRING,
    },
    passwordHash: {
      type: DataTypes.STRING,
    },
    token: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "users",
  }
);

User.belongsTo(State, { foreignKey: "stateId" });

module.exports = User;
