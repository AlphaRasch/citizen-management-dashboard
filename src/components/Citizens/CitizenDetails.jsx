import React from 'react';
import { Tabs, Tab, Box, TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import EducationForm from './EducationForm';
import FamilyMembers from './FamilyMembers';
import { Margin } from '@mui/icons-material';

export default function CitizenDetails ({ citizen }) {
  const [tabValue, setTabValue] = React.useState(0);

  return (
    <div className="citizen-details">
      <Tabs value={tabValue} onChange={(e, v) => setTabValue(v)}>
        <Tab label="Основное" />
        <Tab label="Семья" />
        <Tab label="Образование" />
      </Tabs>

      {tabValue === 0 && (
        <Box>
          <TextField sx={{margin: '10px'}} label="ФИО" value={citizen.fullName} fullWidth />
          <DatePicker sx={{margin: '10px'}} label="Дата рождения" value={new Date(citizen.birthDate)} />
        </Box>
      )}

      {tabValue === 1 && <FamilyMembers members={citizen.familyMembers} />}
      {tabValue === 2 && <EducationForm data={citizen.education} />}
    </div>
  );
};