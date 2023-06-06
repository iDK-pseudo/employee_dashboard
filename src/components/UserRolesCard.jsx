import React, { useState } from 'react'
import "../styles/UserRolesCard.css"
import Card from "./Card.jsx"
import RoleSelect from './RoleSelect.jsx'
import { useSelector } from 'react-redux'
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from '@mui/material'

function UserRolesCard() {

    const roles = useSelector((state)=>state.roleInput.roles);
    const [editMode, setEditMode] = useState(true);

    const handleActionClick = () => {
        setEditMode(!editMode);
    }

    return (
        <Card type="roles">
            <div className="card-header">
                <h3> User Roles </h3>
                <IconButton>
                        {editMode && <CheckBoxOutlinedIcon sx={{color: "blue"}} onClick={handleActionClick}/>}
                        {!editMode && <EditIcon sx={{color: "white"}} onClick={handleActionClick}/>}
                </IconButton>
            </div>
            <div className="roles-table-wrapper">
                <table className="roles-table">
                    <tr className="roles-header">
                        <th>Group</th>
                        <th>Role</th>
                    </tr>
                    <tr>
                        <td>Tenant Admin</td>
                        <td>
                            {editMode && <RoleSelect group="tenantAdmin" role={roles.tenantAdmin}/>}
                            {!editMode && <p>{roles.tenantAdmin}</p>}
                        </td>
                    </tr>
                    <tr>
                        <td>Logs</td>
                        <td>
                            {editMode && <RoleSelect group="logs"  role={roles.logs}/>}
                            {!editMode && <p>{roles.logs}</p>}
                        </td>
                    </tr>
                    <tr>
                        <td>Metrics</td>
                        <td>
                            {editMode && <RoleSelect group="metrics"  role={roles.metrics}/>}
                            {!editMode && <p>{roles.metrics}</p>}
                        </td>
                    </tr>
                    <tr>
                        <td>Dashboards</td>
                        <td>
                            {editMode && <RoleSelect group="dashboards" role={roles.dashboards}/>}
                            {!editMode && <p>{roles.dashboards}</p>}
                        </td>
                    </tr>
                    <tr>
                        <td>Traces</td>
                        <td>
                            {editMode && <RoleSelect group="traces" role={roles.traces}/>}
                            {!editMode && <p>{roles.traces}</p>}
                        </td>
                    </tr>
                    <tr>
                        <td>Billing</td>
                        <td>
                            {editMode && <RoleSelect group="billing" role={roles.billing}/>}
                            {!editMode && <p>{roles.billing}</p>}
                        </td>
                    </tr>
                </table>
            </div>
        </Card>
    )
}

export default UserRolesCard