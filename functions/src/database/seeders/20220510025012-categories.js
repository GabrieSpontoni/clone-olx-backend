"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("categories", [
      {
        id: 1,
        name: "bebês",
        slug: "baby",
        imgUrl:
          "https://firebasestorage.googleapis.com/v0/b/projeto-test-functions.appspot.com/o/baby.png?alt=media&token=c3c6bb34-5341-496b-89ca-a2f62ac8316c",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        name: "carros",
        slug: "cars",
        imgUrl:
          "https://firebasestorage.googleapis.com/v0/b/projeto-test-functions.appspot.com/o/cars.png?alt=media&token=aaa370c9-38dc-4239-963b-c80148fe9073",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        name: "roupas",
        slug: "clothes",
        imgUrl:
          "https://firebasestorage.googleapis.com/v0/b/projeto-test-functions.appspot.com/o/clothes.png?alt=media&token=e9f8ea00-2e71-47b5-8a02-198dceda69ad",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        name: "eletrônicos",
        slug: "electronics",
        imgUrl:
          "https://firebasestorage.googleapis.com/v0/b/projeto-test-functions.appspot.com/o/electronics.png?alt=media&token=5c9ec7b8-9cc3-4a39-8f78-27e45084f06b",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 5,
        name: "esportes",
        slug: "sports",
        imgUrl:
          "https://firebasestorage.googleapis.com/v0/b/projeto-test-functions.appspot.com/o/sports.png?alt=media&token=65537749-079e-4b58-a729-895040358d92",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("categories", null, {});
  },
};
