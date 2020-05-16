const express = require("express");
const router = express.Router();

//get loged in user - /api/auth
router.get("/", (req, res) => {
  res.send("Get Logged in User");
});

//Auth user, get token - /api/auth
router.post("/", (req, res) => {
  res.send("Log in user");
});

module.exports = router;
