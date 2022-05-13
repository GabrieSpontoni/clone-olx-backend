const { DataTypes } = require("sequelize");

const sequelize = require("../database/instances/database");

const AdAttachment = sequelize.define(
  "AdAttachment",
  {
    adId: {
      type: DataTypes.INTEGER,
    },
    image: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "ads_attachments",
  }
);

module.exports = AdAttachment;
