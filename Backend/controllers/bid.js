const loginName = require("../models/model.js");

const Auth = async (req, res) => {
  const { name } = req.body;
  console.log(name);
  if (name) {
    const bid = await loginName.create({
      name: name,
    });
  }
  res.status(201).json({
    success: true,
    message: "Message Successfully",
  });
};

module.exports = { Auth };
