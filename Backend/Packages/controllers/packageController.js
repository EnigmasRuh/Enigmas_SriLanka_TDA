const Package = require("../models/packageModel");

const createPackage = async (req, res) => {
  try {
    const newPackage = new Package(req.body);
    const savedPackage = await newPackage.save();
    res.status(200).json(savedPackage);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getAllPackages = async (req, res) => {
  try {
    const packages = await Package.find();
    res.status(200).json(packages);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getPackageById = async (req, res) => {
  try {
    const package = await Package.findById(req.params.id);
    if (!package) {
      return res.status(404).json({ message: "Package not found" });
    }
    res.status(200).json(package);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  createPackage,
  getAllPackages,
  getPackageById,
};
