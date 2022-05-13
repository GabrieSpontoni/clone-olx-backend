const { DataTypes } = require("sequelize");

const sequelize = require("../../src/database/instances/database");
const User = require("../models/user");
const State = require("../models/state");
const Category = require("../models/category");
const AdAttachment = require("../models/ad_attachments");

const Ad = sequelize.define(
  "Ad",
  {
    userId: {
      type: DataTypes.INTEGER,
    },
    stateId: {
      type: DataTypes.STRING,
    },
    categoryId: {
      type: DataTypes.STRING,
    },

    title: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.FLOAT,
    },
    priceNegotiable: {
      type: DataTypes.BOOLEAN,
    },
    description: {
      type: DataTypes.STRING,
    },
    views: {
      type: DataTypes.INTEGER,
    },
    status: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "ads",
  }
);

Ad.belongsTo(User, { foreignKey: "userId" });
Ad.belongsTo(State, { foreignKey: "stateId" });
Ad.belongsTo(Category, { foreignKey: "categoryId" });
Ad.hasMany(AdAttachment, { foreignKey: "adId" });

module.exports = Ad;
