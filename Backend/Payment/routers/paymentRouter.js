const express = require("express");
const router = express.Router();
const { createCheckoutSession } = require("../controllers/paymentController");

router.post("/pay", createCheckoutSession);

module.exports = router;
