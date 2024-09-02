const express = require("express");
const router = express.Router();
const { createPackage } = require("../controllers/packageController");

router.post("/create", createPackage);

module.exports = router;
