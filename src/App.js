import { Box, Tab, Tabs, Typography } from '@mui/material';
import './App.css';
import AvatarCustom from './components/AvatarCustom.jsx';
import { useState } from 'react';
import Card from './components/Card.jsx';
import CompanyCard from './components/CompanyCard.jsx';
import UserRolesCard from './components/UserRolesCard.jsx';
import BasicDetailsCard from './components/BasicDetailsCard.jsx';
import ContactCard from './components/ContactCard.jsx';
import JobCard from './components/JobCard.jsx';
import SideNav from './components/SideNav.jsx';

function App() {
  const [index, setIndex] = useState(0);

  const handleTabChange = (event, newIndex) => {
    setIndex(newIndex);
  }

  return (
    <div className="App">
      <SideNav/>
      <div className="main">
        <AvatarCustom/>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs textColor="white" value={index} onChange={handleTabChange} sx={{marginBottom: "15px"}}>
            <Tab label="Profile"/>
            <Tab label="Security"/>
          </Tabs>
        </Box>
        <div className="card-group">
          <BasicDetailsCard/>
          <ContactCard/>
          <JobCard/>
        </div>
        <div className="card-group">
          <CompanyCard/>
          <UserRolesCard/>
        </div>
      </div>
    </div>
  );
}

export default App;
