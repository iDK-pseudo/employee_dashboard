import React, { useEffect, useState }  from 'react'
import { PhoneInput, COUNTRIES } from "baseui/phone-input";
import { useDispatch } from 'react-redux';
import { save } from '../reduxSlices/companySlice.js';

function InputPhone(props) {
    const dispatch = useDispatch();
    const [country, setCountry] = useState(COUNTRIES.IN);

    const handleNumberChange = (event) => {
        dispatch(save({
            fieldName: "phoneNumber",
            value: event.currentTarget.value
        }))
    }

    const handleCountryChange = ({option}) => {
        dispatch(save({
            fieldName: "phoneCountry",
            value: option
        }))
        setCountry(option);
    }

    useEffect(()=>{
        if(Object.keys(props.phoneCountry).length > 0){
            setCountry(props.phoneCountry);
        }
    })

    return (
        <PhoneInput
            country={country}
            text={props.phoneNumber}
            onCountryChange={handleCountryChange}
            onTextChange={handleNumberChange}
            overrides={{
                FlagContainer: {
                    style: {
                        fontSize: "20px"
                    }
                },
                CountrySelect: {
                    props: {   
                        overrides: {
                            ControlContainer: {
                                style: {
                                    backgroundColor: "black",
                                }
                            },
                        }
                    }
                },
                Input: {
                    props: {
                        overrides: {
                            InputContainer: {
                                style: {
                                    backgroundColor: "black"
                                }
                            },
                            Root: {
                                style: {
                                    backgroundColor: "black"
                                }
                            }
                        }
                    }
                }
            }}
        />
    )
}

export default InputPhone