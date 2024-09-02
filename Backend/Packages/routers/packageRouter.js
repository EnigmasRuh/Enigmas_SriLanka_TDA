const express = require("express");
const router = express.Router();
const {
  createPackage,
  getAllPackages,
  getPackageById,
} = require("../controllers/packageController");

router.post("/create", createPackage);
router.get("/", getAllPackages);
router.get("/:id", getPackageById);

module.exports = router;
