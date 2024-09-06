
const { check } = require('express-validator');

// Validation chain for creating a visa application
const createVisaApplicationValidators = [
  // Personal Information
  check('personalInfo.fullName')
    .notEmpty().withMessage('Full name is required'),
  
  check('personalInfo.dateOfBirth')
    .notEmpty().withMessage('Date of birth is required')
    .isISO8601().toDate().withMessage('Date of birth must be a valid date'),
  
  check('personalInfo.gender')
    .notEmpty().withMessage('Gender is required')
    .isIn(['Male', 'Female', 'Other']).withMessage('Gender must be Male, Female, or Other'),
  
  check('personalInfo.nationality')
    .notEmpty().withMessage('Nationality is required'),
  
  check('personalInfo.passportNumber')
    .notEmpty().withMessage('Passport number is required'),
  
  check('personalInfo.passportExpiryDate')
    .notEmpty().withMessage('Passport expiry date is required')
    .isISO8601().toDate().withMessage('Passport expiry date must be a valid date'),

  // Contact Information
  check('contactInfo.email')
    .isEmail().withMessage('Valid email is required'),
  
  check('contactInfo.phoneNumber')
    .notEmpty().withMessage('Phone number is required'),
  
  check('contactInfo.homeAddress')
    .notEmpty().withMessage('Home address is required'),

  // Travel Details
  check('travelDetails.visaType')
    .notEmpty().withMessage('Visa type is required')
    .isIn(['Tourist', 'Business', 'Transit']).withMessage('Visa type must be Tourist, Business, or Transit'),
  
  check('travelDetails.intendedDateOfArrival')
    .notEmpty().withMessage('Intended date of arrival is required')
    .isISO8601().toDate().withMessage('Intended date of arrival must be a valid date'),
  
  check('travelDetails.durationOfStay')
    .notEmpty().withMessage('Duration of stay is required'),
  
  check('travelDetails.purposeOfVisit')
    .notEmpty().withMessage('Purpose of visit is required'),

  // Additional Information
  check('additionalInfo.accommodationDetails')
    .notEmpty().withMessage('Accommodation details are required'),
  
  check('additionalInfo.emergencyContactInfo')
    .notEmpty().withMessage('Emergency contact information is required'),

  // Terms and Conditions
  check('termsAndConditionsAgreed')
    .isBoolean().withMessage('Terms and conditions agreement must be a boolean')
    .custom((value) => value === true).withMessage('You must agree to the terms and conditions')
];

// Validation chain for updating a visa application
const updateVisaApplicationValidators = [
  // Personal Information
  check('personalInfo.fullName')
    .optional()
    .notEmpty().withMessage('Full name cannot be empty'),
  
  check('personalInfo.dateOfBirth')
    .optional()
    .isISO8601().toDate().withMessage('Date of birth must be a valid date'),
  
  check('personalInfo.gender')
    .optional()
    .isIn(['Male', 'Female', 'Other']).withMessage('Gender must be Male, Female, or Other'),
  
  check('personalInfo.nationality')
    .optional()
    .notEmpty().withMessage('Nationality cannot be empty'),
  
  check('personalInfo.passportNumber')
    .optional()
    .notEmpty().withMessage('Passport number cannot be empty'),
  
  check('personalInfo.passportExpiryDate')
    .optional()
    .isISO8601().toDate().withMessage('Passport expiry date must be a valid date'),

  // Contact Information
  check('contactInfo.email')
    .optional()
    .isEmail().withMessage('Valid email is required'),
  
  check('contactInfo.phoneNumber')
    .optional()
    .notEmpty().withMessage('Phone number cannot be empty'),
  
  check('contactInfo.homeAddress')
    .optional()
    .notEmpty().withMessage('Home address cannot be empty'),

  // Travel Details
  check('travelDetails.visaType')
    .optional()
    .isIn(['Tourist', 'Business', 'Transit']).withMessage('Visa type must be Tourist, Business, or Transit'),
  
  check('travelDetails.intendedDateOfArrival')
    .optional()
    .isISO8601().toDate().withMessage('Intended date of arrival must be a valid date'),
  
  check('travelDetails.durationOfStay')
    .optional()
    .notEmpty().withMessage('Duration of stay cannot be empty'),
  
  check('travelDetails.purposeOfVisit')
    .optional()
    .notEmpty().withMessage('Purpose of visit cannot be empty'),

  // Additional Information
  check('additionalInfo.accommodationDetails')
    .optional()
    .notEmpty().withMessage('Accommodation details cannot be empty'),
  
  check('additionalInfo.emergencyContactInfo')
    .optional()
    .notEmpty().withMessage('Emergency contact information cannot be empty'),

  // Terms and Conditions
  check('termsAndConditionsAgreed')
    .optional()
    .isBoolean().withMessage('Terms and conditions agreement must be a boolean')
    .custom((value) => value === true).withMessage('You must agree to the terms and conditions if provided')
];

module.exports = {
  createVisaApplicationValidators,
  updateVisaApplicationValidators
};
