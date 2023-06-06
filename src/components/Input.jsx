import React, { useEffect, useState } from 'react'
import { TextField } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { save } from '../reduxSlices/companySlice.js';

function Input(props) {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(save({
      fieldName: props.fieldName,
      value: event.target.value
    }))
  }
    
  return (
    <TextField 
        type={props.type ? props.type : "string"} 
        variant="filled" 
        onChange={handleChange}
        value={props.value}
        sx={{
            backgroundColor: "black",
            borderRadius: "5px",
        }}
        inputProps={{
            sx: {
                color: "white",
                paddingTop: "10px",
            }
    }}
/>
  )
}

export default Input