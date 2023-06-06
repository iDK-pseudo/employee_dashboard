import React from 'react'
import "../styles/ContactCard.css"
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import Card from './Card.jsx';

function ContactCard(props) {
  return (
    <Card type="contact">
            <h3> Contact Details </h3>
            <table>
                <tr>
                    <td className="label">
                        <EmailOutlinedIcon/>
                        <p>Email</p>
                    </td>
                    <td>johnsmith@cloudaeye.com</td>    
                </tr>
                <tr>
                    <td className="label">
                        <LocalPhoneOutlinedIcon/>
                        <p>Phone</p>
                    </td>
                    <td>+1 12345678</td>
                </tr>
                <tr>
                    <td className="label">
                        <LocationOnOutlinedIcon/> 
                        <p>Location</p>
                    </td>
                    <td>Freemont, California</td>
                </tr>
                <tr>
                    <td className="label">
                        <AccountBoxOutlinedIcon/> 
                        <p>LinkedIn</p>
                    </td>
                    <td>https://www.linkedin.com/company/cloudaeye/</td>
                </tr>
            </table>
    </Card>
  )
}

export default ContactCard