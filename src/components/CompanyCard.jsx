import React, { useState } from 'react'
import "../styles/CompanyCard.css"
import Card from './Card.jsx';
import Input from './Input.jsx';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import InsertLinkOutlinedIcon from '@mui/icons-material/InsertLinkOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import InputOutlinedIcon from '@mui/icons-material/InputOutlined';
import InputPhone from './PhoneInput.jsx';
import { useSelector } from 'react-redux';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from '@mui/material';

function CompanyCard() {
    const [editMode, setEditMode] = useState(true);
    const companyDetails = useSelector((state)=>state.companyInput.companyDetails);

    const handleActionClick = () => {
        setEditMode(!editMode);
    }

    return (
        <Card type="company">
            <div className="card-header">
                <h3> Company Details </h3>
                <IconButton>
                    {editMode && <CheckBoxOutlinedIcon sx={{color: "blue"}} onClick={handleActionClick}/>}
                    {!editMode && <EditIcon sx={{color: "white"}} onClick={handleActionClick}/>}
                </IconButton>
            </div>
            <table className="company-table">
                <tr>
                    <td className="label">
                        <InputOutlinedIcon/>
                        <p>Company Name</p>
                    </td>
                    <td>
                        {editMode && <Input fieldName="compName" type="string" value={companyDetails.compName}/>}
                        {!editMode && <p>{companyDetails.compName}</p>}
                    </td>
                </tr>
                <tr>
                    <td className="label">
                        <InsertLinkOutlinedIcon/>
                        <p>Website</p>
                    </td>
                    <td>
                        {editMode && <Input fieldName="website" type="url" value={companyDetails.website}/>}
                        {!editMode && <p> {companyDetails.website} </p> }
                    </td>
                </tr>
                <tr>
                    <td className="label">
                        <LocalPhoneOutlinedIcon/>
                        <p>Phone</p>
                    </td>
                    <td>    
                        {editMode && <InputPhone phoneNumber={companyDetails.phoneNumber} phoneCountry={companyDetails.phoneCountry}/>}
                        {!editMode && <p> {companyDetails.phoneCountry.dialCode} {companyDetails.phoneNumber} </p> }
                    </td>
                </tr>
                <tr>
                    <td className="label">
                        <Groups2OutlinedIcon/>
                        <p>Company Size</p>
                    </td>
                    <td>
                        {editMode && <Input fieldName="compSize" type="number" value={companyDetails.compSize}/>}
                        {!editMode && <p> {companyDetails.compSize} </p> }
                    </td>
                </tr>
                <tr>
                    <td className="label">
                        <ApartmentOutlinedIcon/>
                        <p>Industry</p>
                    </td>
                    <td>
                        {editMode && <Input fieldName="industry" type="string" value={companyDetails.industry}/>}
                        {!editMode && <p> {companyDetails.industry} </p> }
                    </td>
                </tr>
            </table>
        </Card>
    )
}

export default CompanyCard