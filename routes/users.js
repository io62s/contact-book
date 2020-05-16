const express = require("express");
const router = express.Router();

//register user - /api/users
router.post("/", (req, res) => {
  res.send("Register a User");
});

module.exports = router;
