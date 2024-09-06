const express = require("express");
const router = express.Router();
const {
  createPackage,
  getAllPackages,
  getPackageById,
  deletePackage,
} = require("../controllers/packageController");

router.post("/create", createPackage);
router.get("/", getAllPackages);
router.get("/:id", getPackageById);
router.delete("/:id", deletePackage);

module.exports = router;
