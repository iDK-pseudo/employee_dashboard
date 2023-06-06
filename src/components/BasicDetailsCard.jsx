import React from 'react'
import "../styles/BasicDetailsCard.css"
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import TransgenderOutlinedIcon from '@mui/icons-material/TransgenderOutlined';
import CakeOutlinedIcon from '@mui/icons-material/CakeOutlined';
import Card from './Card.jsx';

function BasicDetailsCard(props) {
    const classes = `card-container ${props.type}`;
  return (
    <Card type="basic">
            <h3> Basic Details </h3>
            <table>
                <tr>
                    <td className="label">
                        <BadgeOutlinedIcon/>
                        <p>First Name</p>
                    </td>
                    <td>John</td>
                </tr>
                <tr>
                    <td className="label">
                        <BadgeOutlinedIcon/>
                        <p>Last Name</p>
                    </td>
                    <td>Smith</td>
                </tr>
                <tr>
                    <td className="label">
                        <TransgenderOutlinedIcon/> 
                        <p>Gender</p>
                    </td>
                    <td>Male</td>
                </tr>
                <tr>
                    <td className="label">
                        <CakeOutlinedIcon/> 
                        <p>Birthday</p>
                    </td>
                    <td>22.05.1999</td>
                </tr>
            </table>
    </Card>
  )
}

export default BasicDetailsCard