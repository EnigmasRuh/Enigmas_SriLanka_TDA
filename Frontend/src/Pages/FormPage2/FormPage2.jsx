import React, { useState } from 'react'
import { TextField, Box, Typography } from '@mui/material';
import { RadioGroup, FormControlLabel, Radio, FormLabel, FormControl } from '@mui/material';
import { Select, MenuItem, InputLabel } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import MuiCheckbox from '@mui/material/Checkbox';
import { useNavigate } from 'react-router-dom';


const FormPage2 = () => {
   
   const navigate = useNavigate();

   const handleNavigate = () => {
         navigate(`/visaapplication/doc`);  // Navigates to the TripDetails page with the trip ID
   }


    const [checked, setChecked] = useState(false);
    const toggleCheckbox = () => {
        setChecked(!checked); // Toggle the checked state
    };

    function Checkbox({ icon, checkedIcon }) {

        return (
            <FormControlLabel

                control={
                    <MuiCheckbox

                        icon={<RadioButtonUncheckedIcon />}
                        checkedIcon={<CheckCircleIcon />}
                        checked={checked} // Controlled by the state

                        defaultChecked


                        sx={{
                            color: '#D68631',
                            '&.Mui-checked': {
                                color: '#D68631',
                            },
                            '& .MuiSvgIcon-root': {
                                fontSize: 45, // Increase the size of the checkbox icon
                            },
                        }}
                    />
                }
            />
        );
    }

    return (
        <div>

            <section style={{ marginTop: '100px' }} className="py-5 bg-white" >
                <div className="font-[Prompt] container  mx-auto  border-2 border-black p-5 rounded-3xl" style={{ maxWidth: '843px', maxHeight: "358", boxShadow: '0 4px 8px rgba(214, 134, 49, 0.1)' }}>

                    <h2 className="  text-left text-xl font-semibold text-[#D68631] mb-4" style={{ fontSize: 24 }}>Travel Details Section:</h2>

                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 ">


                        <div >

                            <p className=' mb-3'>Visa Type (Tourist, Business, Transit)</p>

                            <FormControl fullWidth >

                                <Select





                                    labelId="visa-label"
                                    id="visa-select"

                                    label="visa"
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

                                    <MenuItem value="male">Tourist</MenuItem>
                                    <MenuItem value="female">Business</MenuItem>
                                    <MenuItem value="female">Transit</MenuItem>

                                </Select>

                            </FormControl>

                        </div>


                        <div >

                            <p className=' mb-3'>Duration of Stay</p>

                            <TextField
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

                            <p className=' mb-3'>Intended Date of Arrival</p>

                            <TextField
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

                            <p className=' mb-3'>Purpose of Visit</p>
                            <TextField
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




            <section className="py-5 bg-white" >
                <div className="font-[Prompt] container  mx-auto  border-2 border-black p-5 rounded-3xl" style={{ maxWidth: '843px', maxHeight: "358", boxShadow: '0 4px 8px rgba(214, 134, 49, 0.1)' }}>

                    <h2 className="  text-left text-xl font-semibold text-[#D68631] mb-4" style={{ fontSize: 24 }}>Additional Information Section:</h2>

                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 ">


                        <div >

                            <p className=' mb-3'>Accommodation Details (Hotel Name, Address, or Host Details)</p>

                            <TextField
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

                            <p className=' mb-9'>Emergency Contact Information</p>

                            <TextField
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


            <section className="py-5 bg-white" >
                <div className="font-[Prompt] container  mx-auto  border-2 border-black p-5 rounded-3xl" style={{ maxWidth: '843px', maxHeight: "358", boxShadow: '0 4px 8px rgba(214, 134, 49, 0.1)' }}>

                    <h2 className="  text-left text-xl font-semibold text-[#D68631] mb-4" style={{ fontSize: 24 }}>Terms and Conditions Agreement</h2>
                    <p>  I have read and agree to the Terms and Conditions.
                    </p>
                    <p>

                        Read Terms and conditions
                    </p>

                    <div className="flex items-center" style={{ marginBottom: "20px", marginTop: "20px" }}>
                        <Checkbox

                        />

                        <button style={{ paddingInline: "55px" }} className="ml-4 hover:bg-none bg-gradient-to-r from-[#5A3111] via-[#D68631] to-[#5A3111] hover:bg-[#D68631] text-white px-6 py-3 rounded-3xl flex items-center text-lg"

                            onClick={toggleCheckbox}

                        >
                            <span>Agree</span>



                        </button>
                    </div>





                </div>
            </section>



            <section className=" bg-white" >
        <div className="font-[Prompt] container  mx-auto " style={{ maxWidth: '843px', maxHeight: "358"}}>
          <div className='container mx-auto px-4' style={{ marginBottom: "40px" }}>
            <div className="flex justify-end" >
              <button style={{ paddingInline: "50px", paddingTop: "20px", paddingBottom: "20px" }} className="hover:bg-none bg-gradient-to-r from-[#5A3111] via-[#D68631] to-[#5A3111] hover:bg-[#D68631] text-white px-6 py-3 rounded-xl flex items-center text-lg" onClick={handleNavigate}>
                <span>Submit</span>
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

export default FormPage2