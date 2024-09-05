const mongoose = require("mongoose");

const PackageSchema = new mongoose.Schema({
  packageName: {
    type: String,
    required: true,
  },
  imgURL: {
    type: String,
    required: true,
  },
  numberOfDays: {
    type: Number,
    required: true,
  },
  numberOfPersons: {
    type: Number,
    required: true,
  },
  transportation: {
    type: String,
    default: "",
  },
  accommodation: {
    type: String,
    required: true,
  },
  mealIncluded: {
    type: Boolean,
    default: false,
  },
  admissionFee: {
    type: Number,
    default: 0,
  },
  guide: {
    type: String,
    required: true,
  },
  minimumAge: {
    type: Number,
    default: 2,
  },
  overview: {
    type: String,
    default: "",
  },
  tripHighlights: {
    type: [String],
    required: true,
  },
  provider: {
    type: String,
    default: "",
  },
  providerWebsite: {
    type: String,
    default: "",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Packages", PackageSchema);
