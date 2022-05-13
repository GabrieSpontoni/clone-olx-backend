const express = require("express");
const router = express.Router();

const authMiddleware = require("../middlewares/authMiddleware");

const authValidator = require("../validators/authValidator");
const userValidator = require("../validators/userValidator");

const authController = require("../controllers/authController");
const userController = require("../controllers/userController");
const adsController = require("../controllers/adsController");

router.get("/", function (req, res, next) {
  res.json({
    message:
      "API online, confira seu console para ver se seu banco de dados está conectado",
  });
});

//login
router.post("/login", authValidator.login, authController.login);
//register
router.post("/register", authValidator.register, authController.register);

//users
router.get("/states", userController.getStates);
router.get("/user/me", authMiddleware.privateRoute, userController.info);
router.put(
  "/user/me",
  userValidator.editAction,
  authMiddleware.privateRoute,
  userController.editAction
);

//ads
router.get("/categories", adsController.getCategories);
router.post("/ad/add", authMiddleware.privateRoute, adsController.addAction);
router.get("/ad/list", adsController.getList);
// router.get("/ad/item", adsController.getItem);
// router.post("/ad/:id", adsController.editAction);

module.exports = router;
