const User = require("../models/user");
const formidable = require("formidable-serverless");

module.exports = {
  privateRoute: async (req, res, next) => {
    const contentType = req.headers["content-type"].split(";")[0];
    switch (contentType) {
      case "multipart/form-data":
        const form = new formidable.IncomingForm();

        form.parse(req, async function (err, fields, files) {
          if (!fields.token) {
            return res.status(401).json({
              message: "Token not provided",
              contentType,
            });
          }
          let token = fields.token;
          const user = await User.findOne({
            where: {
              token,
            },
          });
          if (!user) {
            return res
              .status(401)
              .json({ message: "Invalid Token", contentType });
          }
        });
        break;
      case "application/json":
        if (!req.query.token && !req.body.token) {
          return res.status(401).json({
            message: "Token not provided",
            contentType,
          });
        }

        let token = req.query.token || req.body.token;

        const user = await User.findOne({
          where: {
            token,
          },
        });
        if (!user) {
          return res
            .status(401)
            .json({ message: "Invalid Token", contentType });
        }
        break;
      default:
        return res.status(401).json({ message: "Invalid Content-Type" });
    }

    next();
  },
};
