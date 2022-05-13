"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("ads", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: "users",
          key: "id",
        },
      },
      stateId: {
        type: Sequelize.INTEGER,
        references: {
          model: "states",
          key: "id",
        },
      },
      categoryId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "categories",
          key: "id",
        },
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      price: {
        type: Sequelize.FLOAT,
      },
      priceNegotiable: {
        type: Sequelize.BOOLEAN,
      },
      description: {
        type: Sequelize.STRING,
      },
      views: {
        type: Sequelize.INTEGER,
      },
      status: {
        type: Sequelize.STRING,
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("ads");
  },
};
