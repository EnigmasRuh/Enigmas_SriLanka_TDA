const mongoose = require('mongoose');

const visaApplicationSchema = new mongoose.Schema({
  personalInfo: {
    fullName: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    gender: { type: String, enum: ['Male', 'Female', 'Other'], required: true },
    nationality: { type: String, required: true },
    passportNumber: { type: String, required: true },
    passportExpiryDate: { type: Date, required: true },
  },
  contactInfo: {
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    homeAddress: { type: String, required: true },
  },
  travelDetails: {
    visaType: { type: String, enum: ['Tourist', 'Business', 'Transit'], required: true },
    intendedDateOfArrival: { type: Date, required: true },
    durationOfStay: { type: String, required: true },
    purposeOfVisit: { type: String, required: true },
  },
  additionalInfo: {
    accommodationDetails: { type: String, required: true },
    emergencyContactInfo: { type: String, required: true },
  },
  termsAndConditionsAgreed: { type: Boolean, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
}, {
  timestamps: true
});

const VisaApplication = mongoose.model('VisaApplication', visaApplicationSchema);

module.exports = VisaApplication;
