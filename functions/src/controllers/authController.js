const { validationResult, matchedData } = require("express-validator");
const bcrypt = require("bcrypt");

const User = require("../models/user");

const register = async (req, res) => {
  const errors = validationResult(req);
  const data = matchedData(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  await User.findOne({
    where: {
      email: data.email,
    },
  })
    .then(async (result) => {
      const user = result;
      if (!user) {
        const saltRounds = 10;
        const hash = await bcrypt.hash(data.password, saltRounds);

        const payload = (Date.now() / 1000).toString();
        const token = await bcrypt.hash(payload, saltRounds);

        await User.create({
          name: data.name,
          email: data.email,
          stateId: data.stateId,
          passwordHash: hash,
          token,
        })
          .then((user) => {
            res.status(201).json({
              message: "User created successfully",
              user: user,
            });
          })
          .catch((err) => {
            res.status(500).json({
              message: "Error creating user",
              error: err,
            });
          });
      } else {
        res.status(409).json({ message: "Email Already Exits" });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: err });
    });
};

const login = async (req, res) => {
  const errors = validationResult(req);
  const data = matchedData(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  await User.findOne({
    where: {
      email: data.email,
    },
  })
    .then(async (result) => {
      if (!result) {
        return res.status(404).json({ message: "User not found" });
      }

      const match = await bcrypt.compare(data.password, result.passwordHash);
      if (!match) {
        res.status(401).json({ message: "Password incorrect" });
      } else {
        res.status(200).json({
          message: "User logged in successfully",
          user: {
            id: result.dataValues.id,
            name: result.dataValues.name,
            email: result.dataValues.email,
            stateId: result.dataValues.stateId,
            token: result.dataValues.token,
          },
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });

  // res.status(200).json({ message: "Login" });
};

module.exports = {
  register,
  login,
};
