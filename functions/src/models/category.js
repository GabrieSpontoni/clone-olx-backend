const { DataTypes } = require("sequelize");

const sequelize = require("../../src/database/instances/database");

const Category = sequelize.define(
  "Category",
  {
    name: {
      type: DataTypes.STRING,
    },
    slug: {
      type: DataTypes.STRING,
    },
    imgUrl: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "categories",
  }
);

module.exports = Category;
