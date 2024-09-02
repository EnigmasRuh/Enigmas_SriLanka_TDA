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

module.exports = {
  createPackage,
};
