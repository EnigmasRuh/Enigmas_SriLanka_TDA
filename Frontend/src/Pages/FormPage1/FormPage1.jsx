import React, { useState } from 'react'
import { TextField, Box, Typography } from '@mui/material';
import { RadioGroup, FormControlLabel, Radio, FormLabel, FormControl } from '@mui/material';
import { Select, MenuItem, InputLabel } from '@mui/material';
// import { DatePicker } from '@mui/x-date-pickers';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useNavigate } from 'react-router-dom';

const FormPage1 = () => {

  const navigate = useNavigate();

  const handleClick = () => {

    console.log(values);

    navigate('/visaapplication/form/next'); // Navigate to the desired route
  };

  const [values, setValues] = useState({
    personalInfo: {
      fullName: '',
      dateOfBirth: '',
      gender: '',
      nationality: '',
      passportNumber: '',
      passportExpiryDate: '',
    },
    contactInfo: {
      email: "",
      phoneNumber: "",
      homeAddress: "",
    }
  });

  const handleInput = (event) => {
    const { name, value } = event.target;

    // Determine which object to update based on the field name
    if (['fullName', 'dateOfBirth', 'gender', 'nationality', 'passportNumber', 'passportExpiryDate'].includes(name)) {
      setValues((prevValues) => ({
        ...prevValues,
        personalInfo: {
          ...prevValues.personalInfo,
          [name]: value, // Update specific field in personalInfo
        },
      }));
    } else if (['email', 'phoneNumber', 'homeAddress'].includes(name)) {
      setValues((prevValues) => ({
        ...prevValues,
        contactInfo: {
          ...prevValues.contactInfo,
          [name]: value, // Update specific field in contactInfo
        },
      }));
    }
  };




  return (
    <div>

      <section className=" py-10 bg-white container mx-auto" style={{ marginTop: 100, maxWidth: "1127px" }}>
        <div className="container mx-auto text-center">

          <h3 className="font-semibold text-3xl  mb-2 font-[Prompt] text-[#D68631] " style={{ fontSize: 40 }}>VISA APPLICATION FORM</h3>
          <p className=" font-[Prompt] text - [#000000] " style={{ fontSize: 24, marginTop: 25 }}>
            Fill out the necessary information to apply for your visa. Provide accurate personal, contact, and travel details to ensure your application is processed smoothly.
          </p>


        </div></section>






      <section className=" bg-white" >


        <div className="font-[Prompt] container  mx-auto  border-2 border-black p-5 rounded-3xl" style={{ maxWidth: '843px', maxHeight: "470", boxShadow: '0 4px 8px rgba(214, 134, 49, 0.1)' }}>

          <h2 className="  text-left text-xl font-semibold text-[#D68631] mb-4" style={{ fontSize: 24 }}>Personal Information Section:</h2>

          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 ">


            <div className='lg:col-span-2'>

              <p className='mt-3 mb-3'>Full Name (as per passport)</p>

              <TextField
                name="fullName"
                onChange={handleInput}
                sx={{
                  border: '1px solid black',
                  borderRadius: '24px', // equivalent to rounded-3xl in Tailwind
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      border: 'none', // removes the border of the fieldset
                    },
                    '&:hover fieldset': {
                      border: 'none', // removes the border on hover
                    },
                    '&.Mui-focused fieldset': {
                      border: 'none', // removes the border when focused
                    }
                  }
                }}
                fullWidth

                placeholder="Browse from your device"
              />

            </div>

            <div >

              <p className='mb-1'>Date of Birth</p>

              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker']}>
                  <DatePicker
                    name="dateOfBirth"
                    onChange={(newDate) => {
                      console.log(newDate ? newDate.format('YYYY-MM-DD') : 'No date selected');
                      setValues((prevValues) => ({
                        ...prevValues,
                        personalInfo: {
                          ...prevValues.personalInfo,
                          dateOfBirth: newDate ? newDate.format('YYYY-MM-DD') : '', // Format the date or set it to empty if no date
                        },
                      }));



                    }}
                    sx={{
                      width: '100%', // Ensure the DatePicker takes up the full width
                      '& .MuiOutlinedInput-root': {
                        width: '100%', // Ensure the input field inside the DatePicker is full width
                        border: '1px solid black', // Solid border
                        borderRadius: '24px', // Rounded corners
                        '& fieldset': {
                          border: 'none', // Removes the default fieldset border
                        },
                        '&:hover fieldset': {
                          border: 'none', // Removes the border on hover
                        },
                        '&.Mui-focused fieldset': {
                          border: 'none', // Removes the border when focused
                        }
                      }
                    }}
                  />
                </DemoContainer>
              </LocalizationProvider>



            </div>




            <div>

              <p className='mb-3'>Gender</p>

              <FormControl fullWidth >

                <Select

                  name='gender'


                  onChange={handleInput}
                  labelId="gender-label"
                  id="gender-select"

                  label="Gender"
                  sx={{
                    border: '1px solid black',
                    borderRadius: '24px', // equivalent to rounded-3xl in Tailwind
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        border: 'none', // removes the border of the fieldset
                      },
                      '&:hover fieldset': {
                        border: 'none', // removes the border on hover
                      },
                      '&.Mui-focused fieldset': {
                        border: 'none', // removes the border when focused
                      }
                    },
                    '& .MuiSelect-root': {
                      '&:focus': {
                        backgroundColor: 'transparent', // removes the blue background on focus
                      }
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                      border: 'none', // removes the border of the outline
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      border: 'none', // removes the border on hover
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      border: 'none', // removes the border when focused
                    },
                  }}
                  fullWidth
                >

                  <MenuItem value="male">Male</MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                </Select>

              </FormControl>

            </div>

            <div >

              <p className=' mb-3'>Nationality</p>

              <TextField
                name='nationality'
                onChange={handleInput}
                sx={{
                  border: '1px solid black',
                  borderRadius: '24px', // equivalent to rounded-3xl in Tailwind
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      border: 'none', // removes the border of the fieldset
                    },
                    '&:hover fieldset': {
                      border: 'none', // removes the border on hover
                    },
                    '&.Mui-focused fieldset': {
                      border: 'none', // removes the border when focused
                    }
                  }
                }}
                fullWidth

                placeholder="Browse from your device"
              />

            </div>


            <div >

              <p className=' mb-3'>Passport Number</p>

              <TextField

                name="passportNumber"
                onChange={handleInput}
                sx={{
                  border: '1px solid black',
                  borderRadius: '24px', // equivalent to rounded-3xl in Tailwind
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      border: 'none', // removes the border of the fieldset
                    },
                    '&:hover fieldset': {
                      border: 'none', // removes the border on hover
                    },
                    '&.Mui-focused fieldset': {
                      border: 'none', // removes the border when focused
                    }
                  }
                }}
                fullWidth

                placeholder="Browse from your device"
              />

            </div>


            <div >

              <p className=' mb-3'>Passport Expiry Date</p>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker']}>
                  <DatePicker
                    name="passportExpiryDate"
                    onChange={(newDate) => {
                      console.log(newDate ? newDate.format('YYYY-MM-DD') : 'No date selected');
                      setValues((prevValues) => ({
                        ...prevValues,
                        personalInfo: {
                          ...prevValues.personalInfo,
                          passportExpiryDate: newDate ? newDate.format('YYYY-MM-DD') : '', // Format the date or set it to empty if no date
                        },
                      }));



                    }}
                    sx={{
                      width: '100%', // Ensure the DatePicker takes up the full width
                      '& .MuiOutlinedInput-root': {
                        width: '100%', // Ensure the input field inside the DatePicker is full width
                        border: '1px solid black', // Solid border
                        borderRadius: '24px', // Rounded corners
                        '& fieldset': {
                          border: 'none', // Removes the default fieldset border
                        },
                        '&:hover fieldset': {
                          border: 'none', // Removes the border on hover
                        },
                        '&.Mui-focused fieldset': {
                          border: 'none', // Removes the border when focused
                        }
                      }
                    }}
                  />
                </DemoContainer>
              </LocalizationProvider>



            </div>





          </div>



        </div>









      </section>



      <section className="py-10 bg-white" >
        <div className="font-[Prompt] container  mx-auto  border-2 border-black p-5 rounded-3xl" style={{ maxWidth: '843px', maxHeight: "358", boxShadow: '0 4px 8px rgba(214, 134, 49, 0.1)' }}>

          <h2 className="  text-left text-xl font-semibold text-[#D68631] mb-4" style={{ fontSize: 24 }}>Contact Information Section:</h2>

          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 ">










            <div >

              <p className=' mb-3'>Email Address</p>

              <TextField

                name="email"
                onChange={handleInput}
                sx={{
                  border: '1px solid black',
                  borderRadius: '24px', // equivalent to rounded-3xl in Tailwind
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      border: 'none', // removes the border of the fieldset
                    },
                    '&:hover fieldset': {
                      border: 'none', // removes the border on hover
                    },
                    '&.Mui-focused fieldset': {
                      border: 'none', // removes the border when focused
                    }
                  }
                }}
                fullWidth

                placeholder="Browse from your device"
              />

            </div>


            <div >

              <p className=' mb-3'>Home Address</p>

              <TextField

                name="homeAddress"
                onChange={handleInput}

                sx={{
                  border: '1px solid black',
                  borderRadius: '24px', // equivalent to rounded-3xl in Tailwind
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      border: 'none', // removes the border of the fieldset
                    },
                    '&:hover fieldset': {
                      border: 'none', // removes the border on hover
                    },
                    '&.Mui-focused fieldset': {
                      border: 'none', // removes the border when focused
                    }
                  }
                }}
                fullWidth

                placeholder="Browse from your device"
              />

            </div>


            <div >

              <p className=' mb-3'>Phone Number</p>

              <TextField
                name='phoneNumber'
                onChange={handleInput}
                sx={{
                  border: '1px solid black',
                  borderRadius: '24px', // equivalent to rounded-3xl in Tailwind
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      border: 'none', // removes the border of the fieldset
                    },
                    '&:hover fieldset': {
                      border: 'none', // removes the border on hover
                    },
                    '&.Mui-focused fieldset': {
                      border: 'none', // removes the border when focused
                    }
                  }
                }}
                fullWidth

                placeholder="Browse from your device"
              />

            </div>







          </div>



        </div>









      </section>


      <section className=" bg-white" >
        <div className="font-[Prompt] container  mx-auto " style={{ maxWidth: '843px', maxHeight: "358"}}>
          <div className='container mx-auto px-4' style={{ marginBottom: "40px" }}>
            <div className="flex justify-end" >
              <button style={{ paddingInline: "50px", paddingTop: "20px", paddingBottom: "20px" }} className="hover:bg-none bg-gradient-to-r from-[#5A3111] via-[#D68631] to-[#5A3111] hover:bg-[#D68631] text-white px-6 py-3 rounded-xl flex items-center text-lg" onClick={handleClick}>
                <span>Next Page</span>
                <svg className="w-6 h-6 ml-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section />




    </div>

  )
}

export default FormPage1
