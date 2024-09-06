import React, { useState } from 'react';
import { TextField, Box, Typography } from '@mui/material';
import { Select, MenuItem, FormControl } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import MuiCheckbox from '@mui/material/Checkbox';
import { useNavigate } from 'react-router-dom';

const CombinedFormPage = () => {
  const navigate = useNavigate();

  // Form state
  const [formData, setFormData] = useState({
    fullName: '',
    passportNumber: '',
    nationality: '',
    dateOfBirth: '',
    visaType: '',
    durationOfStay: '',
    arrivalDate: '',
    purposeOfVisit: '',
    accommodationDetails: '',
    emergencyContact: '',
    termsAgreed: false
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle checkbox for Terms and Conditions
  const handleCheckboxChange = () => {
    setFormData((prevState) => ({
      ...prevState,
      termsAgreed: !prevState.termsAgreed
    }));
  };

  // Submit form data
  const handleSubmit = async () => {
    if (!formData.termsAgreed) {
      alert("Please agree to the terms and conditions.");
      return;
    }

    // Assuming you have an API endpoint '/submitForm' to send data to the database
    try {
      const response = await fetch('/submitForm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        // Handle successful submission (navigate to the next page)
        navigate(`/visaapplication/doc`);
      } else {
        // Handle error
        console.error('Error submitting form data');
      }
    } catch (error) {
      console.error('Error submitting form data:', error);
    }
  };

  return (
    <div>
      {/* Form Section */}
      <section style={{ marginTop: '100px' }} className="py-5 bg-white">
        <div className="font-[Prompt] container mx-auto border-2 border-black p-5 rounded-3xl" style={{ maxWidth: '843px', maxHeight: '358', boxShadow: '0 4px 8px rgba(214, 134, 49, 0.1)' }}>
          <h2 className="text-left text-xl font-semibold text-[#D68631] mb-4" style={{ fontSize: 24 }}>Personal Information Section:</h2>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <p className="mb-3">Full Name</p>
              <TextField
                fullWidth
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <p className="mb-3">Passport Number</p>
              <TextField
                fullWidth
                name="passportNumber"
                value={formData.passportNumber}
                onChange={handleChange}
                placeholder="Enter your passport number"
              />
            </div>

            <div>
              <p className="mb-3">Nationality</p>
              <TextField
                fullWidth
                name="nationality"
                value={formData.nationality}
                onChange={handleChange}
                placeholder="Enter your nationality"
              />
            </div>

            <div>
              <p className="mb-3">Date of Birth</p>
              <TextField
                fullWidth
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                placeholder="Select your birthdate"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Travel Details Section */}
      <section className="py-5 bg-white">
        <div className="font-[Prompt] container mx-auto border-2 border-black p-5 rounded-3xl" style={{ maxWidth: '843px', maxHeight: '358', boxShadow: '0 4px 8px rgba(214, 134, 49, 0.1)' }}>
          <h2 className="text-left text-xl font-semibold text-[#D68631] mb-4" style={{ fontSize: 24 }}>Travel Details Section:</h2>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <p className="mb-3">Visa Type (Tourist, Business, Transit)</p>
              <FormControl fullWidth>
                <Select
                  name="visaType"
                  value={formData.visaType}
                  onChange={handleChange}
                >
                  <MenuItem value="tourist">Tourist</MenuItem>
                  <MenuItem value="business">Business</MenuItem>
                  <MenuItem value="transit">Transit</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div>
              <p className="mb-3">Duration of Stay</p>
              <TextField
                fullWidth
                name="durationOfStay"
                value={formData.durationOfStay}
                onChange={handleChange}
                placeholder="Enter the duration of your stay"
              />
            </div>

            <div>
              <p className="mb-3">Intended Date of Arrival</p>
              <TextField
                fullWidth
                name="arrivalDate"
                value={formData.arrivalDate}
                onChange={handleChange}
                placeholder="Enter the intended date of arrival"
              />
            </div>

            <div>
              <p className="mb-3">Purpose of Visit</p>
              <TextField
                fullWidth
                name="purposeOfVisit"
                value={formData.purposeOfVisit}
                onChange={handleChange}
                placeholder="State the purpose of your visit"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information Section */}
      <section className="py-5 bg-white">
        <div className="font-[Prompt] container mx-auto border-2 border-black p-5 rounded-3xl" style={{ maxWidth: '843px', maxHeight: '358', boxShadow: '0 4px 8px rgba(214, 134, 49, 0.1)' }}>
          <h2 className="text-left text-xl font-semibold text-[#D68631] mb-4" style={{ fontSize: 24 }}>Additional Information Section:</h2>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <p className="mb-3">Accommodation Details (Hotel Name, Address, or Host Details)</p>
              <TextField
                fullWidth
                name="accommodationDetails"
                value={formData.accommodationDetails}
                onChange={handleChange}
                placeholder="Provide your accommodation details"
              />
            </div>

            <div>
              <p className="mb-3">Emergency Contact Information</p>
              <TextField
                fullWidth
                name="emergencyContact"
                value={formData.emergencyContact}
                onChange={handleChange}
                placeholder="Provide emergency contact details"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Terms and Conditions Section */}
      <section className="py-5 bg-white">
        <div className="font-[Prompt] container mx-auto border-2 border-black p-5 rounded-3xl" style={{ maxWidth: '843px', maxHeight: '358', boxShadow: '0 4px 8px rgba(214, 134, 49, 0.1)' }}>
          <h2 className="text-left text-xl font-semibold text-[#D68631] mb-4" style={{ fontSize: 24 }}>Terms and Conditions Agreement</h2>
          <p>I have read and agree to the Terms and Conditions.</p>
          <p>Read Terms and Conditions</p>
          <div className="flex items-center" style={{ marginBottom: '20px', marginTop: '20px' }}>
            <MuiCheckbox
              checked={formData.termsAgreed}
              onChange={handleCheckboxChange}
              icon={<RadioButtonUncheckedIcon />}
              checkedIcon={<CheckCircleIcon />}
              sx={{
                color: '#D68631',
                '&.Mui-checked': {
                  color: '#D68631',
                },
                '& .MuiSvgIcon-root': {
                  fontSize: 32,
                },
              }}
            />
            <button
              style={{ paddingInline: '55px' }}
              className="ml-4 hover:bg-none bg-gradient-to-r from-[#5A3111] via-[#D68631] to-[#5A3111] hover:bg-[#D68631] text-white px-6 py-3 rounded-3xl flex items-center text-lg"
            >
              <span>Agree</span>
            </button>
          </div>
        </div>
      </section>

      {/* Submit Button */}
      <section className="bg-white">
        <div className="font-[Prompt] container mx-auto" style={{ maxWidth: '843px', maxHeight: '358' }}>
          <div className="container mx-auto px-4" style={{ marginBottom: '40px' }}>
            <div className="flex justify-end">
              <button
                style={{ paddingInline: '50px', paddingTop: '20px', paddingBottom: '20px' }}
                className="hover:bg-none bg-gradient-to-r from-[#5A3111] via-[#D68631] to-[#5A3111] hover:bg-[#D68631] text-white px-6 py-3 rounded-xl flex items-center text-lg"
                onClick={handleSubmit}
              >
                <span>Submit</span>
                <svg
                  className="w-6 h-6 ml-4 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CombinedFormPage;
