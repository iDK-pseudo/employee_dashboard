import React from 'react'
import '../styles/SideNav.css';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import BatchPredictionOutlinedIcon from '@mui/icons-material/BatchPredictionOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { Divider } from '@mui/material';

function SideNav() {
  return (
    <div className="side-nav">
        <HomeOutlinedIcon/>
        <StarBorderOutlinedIcon sx={{opacity: 0.5}}/>
        <Divider color="grey"/>
        <ArticleOutlinedIcon sx={{opacity: 0.5}}/>
        <BatchPredictionOutlinedIcon sx={{opacity: 0.5}}/>
        <SettingsOutlinedIcon sx={{opacity: 0.5}}/>
        <Divider color="grey"/>
    </div>
  )
}

export default SideNav