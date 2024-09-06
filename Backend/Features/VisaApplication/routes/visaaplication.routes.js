
const express = require('express');
const { createVisaApplicationValidators, updateVisaApplicationValidators } = require('../validators/visaaplication.validators');
const validate = require('../../../Middlewares/validateMiddleware');
const { createVisaApplication, getVisaApplications, getVisaApplicationById, updateVisaApplication, deleteVisaApplication } = require('../controllers/visaaplication.controller');
const verifyToken = require('../../../Middlewares/authMiddleware');



const router = express.Router();

// Route: Create a new visa application
router.post(
  '/',
  verifyToken, // Middleware for token validation
  createVisaApplicationValidators, // Validation checks
  validate, // Middleware to handle validation result
  createVisaApplication // Controller
);

// Route: Get all visa applications
router.get(
  '/',
  verifyToken, // Middleware for token validation (optional)
  getVisaApplications
);

// Route: Get a single visa application by ID
router.get(
  '/:id',
  verifyToken, // Middleware for token validation (optional)
  getVisaApplicationById
);

// Route: Update a visa application by ID
router.put(
  '/:id',
  verifyToken, // Middleware for token validation
  updateVisaApplicationValidators, // Validation checks
  validate, // Middleware to handle validation result
  updateVisaApplication // Controller
);

// Route: Delete a visa application by ID
router.delete(
  '/:id',
  verifyToken, // Middleware for token validation
  deleteVisaApplication
);

module.exports = router;
