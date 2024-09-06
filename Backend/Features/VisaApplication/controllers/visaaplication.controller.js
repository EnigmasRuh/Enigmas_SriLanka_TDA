const VisaApplication = require('../models/visaapplication.model');

// @desc    Create a new visa application
// @route   POST /api/visa-applications
// @access  Public
const createVisaApplication = async (req, res) => {
  try {
    const {
      personalInfo,
      contactInfo,
      travelDetails,
      additionalInfo,
      termsAndConditionsAgreed
    } = req.body;

    const userId = req.user.id || '66d324e9500bd2c9480b5fb9';

    // Check if terms and conditions are agreed
    if (!termsAndConditionsAgreed) {
      return res.status(400).json({ message: 'You must agree to the terms and conditions.' });
    }

    // Create the new visa application
    const visaApplication = await VisaApplication.create({
      personalInfo,
      contactInfo,
      travelDetails,
      additionalInfo,
      termsAndConditionsAgreed,
      userId
    });

    res.status(201).json(visaApplication);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get all visa applications
// @route   GET /api/visa-applications
// @access  Private (Optional: You can add authentication middleware)
const getVisaApplications = async (req, res) => {
  try {
    const visaApplications = await VisaApplication.find();
    res.status(200).json(visaApplications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get a single visa application by ID
// @route   GET /api/visa-applications/:id
// @access  Private (Optional: You can add authentication middleware)
const getVisaApplicationById = async (req, res) => {
  try {
    const visaApplication = await VisaApplication.findById(req.params.id);

    if (!visaApplication) {
      return res.status(404).json({ message: 'Visa application not found' });
    }

    res.status(200).json(visaApplication);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update a visa application by ID
// @route   PUT /api/visa-applications/:id
// @access  Private
const updateVisaApplication = async (req, res) => {
  try {
    const updatedVisaApplication = await VisaApplication.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedVisaApplication) {
      return res.status(404).json({ message: 'Visa application not found' });
    }

    res.status(200).json(updatedVisaApplication);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Delete a visa application by ID
// @route   DELETE /api/visa-applications/:id
// @access  Private
const deleteVisaApplication = async (req, res) => {
  try {
    const visaApplication = await VisaApplication.findByIdAndDelete(req.params.id);

    if (!visaApplication) {
      return res.status(404).json({ message: 'Visa application not found' });
    }

    res.status(200).json({ message: 'Visa application deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createVisaApplication,
  getVisaApplications,
  getVisaApplicationById,
  updateVisaApplication,
  deleteVisaApplication
};
