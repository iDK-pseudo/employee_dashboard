import React, { useEffect, useState } from 'react'
import { save } from '../reduxSlices/roleSlice.js';
import { useDispatch } from 'react-redux';
import "../styles/RoleSelect.css"

function RoleSelect(props) {
    const [options, setOptions] = useState([]);
    const dispatch = useDispatch();

    useEffect(()=>{
        if(props.role=="Admin"){
            setOptions(["Admin", "User"]);
        }else{
            setOptions(["User", "Admin"]);
        }
    }, []);

    const handleChange = (event) => {
        dispatch(save({
            group: props.group,
            role: event.target.value
        }))
    }


    return (
            <select className="role-select" onChange={handleChange}>
               {options.map((o)=> <option value={o}> {o == "Admin" ? "Admin" : "User"} </option>)}
            </select>
        )
}

export default RoleSelect