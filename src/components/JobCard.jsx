import React from 'react'
import "../styles/JobCard.css"
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import Card from './Card.jsx';

function JobCard(props) {
    const classes = `card-container ${props.type}`;
  return (
    <Card type="job">
            <h3> Job Details </h3>
            <table>
                <tr>
                    <td className="label">
                        <WorkOutlineOutlinedIcon/>
                        <p>Job Title</p>
                    </td>
                    <td>VP of Engineering</td>
                </tr>
                <tr>
                    <td className="label">
                        <AccountTreeOutlinedIcon/>
                        <p>Department</p>
                    </td>
                    <td>Engineering</td>
                </tr>
            </table>
    </Card>
  )
}

export default JobCard