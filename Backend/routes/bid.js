const express = require("express");
const { Auth } = require("../controllers/bid");

const router = express.Router();

router.post("/login", Auth);

module.exports = router;
