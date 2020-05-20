const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator");

const User = require("../models/User");
const Contact = require("../models/Contact");

//get all users contacts - /api/contacts
router.get("/", auth, async (req, res) => {
  try {
    const { id } = req.user;
    const contacts = await Contact.find({ user: id }).sort({ date: -1 });

    res.json(contacts);
  } catch (error) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
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
