import { Avatar } from '@mui/material'
import React from 'react'
import "../styles/AvatarCustom.css"

function AvatarCustom() {
  return (
    <div className="avatar-container">
        <Avatar sx={{
          height: 80,
          width: 80
        }}/>
        <div className="name-container">
          <h1>John Smith</h1>
          <h3>VP of Engineering / Engineering</h3>
        </div>
    </div>
  )
}

export default AvatarCustom