const express = require("express");
const router = express.Router();

//get all users contacts - /api/contacts
router.get("/", (req, res) => {
  res.send("Users contacts");
});
//add new contact - /api/contacts
router.post("/", (req, res) => {
  res.send("Add new contact");
});
//update contact - /api/contacts/:id
router.put("/:id", (req, res) => {
  res.send("Update contact");
});
//delete contact - /api/contacts/:id
router.delete("/:id", (req, res) => {
  res.send("Delete contact");
});

module.exports = router;
