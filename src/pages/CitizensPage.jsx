import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import CitizensTable from '../components/Citizens/CitizensTable';
import CitizenDetails from '../components/Citizens/CitizenDetails';
import { generateMockCitizens } from '../api/mockData';

export default function CitizensPage() {
  const [selectedCitizen, setSelectedCitizen] = useState(null);
  const [citizens, setCitizens] = useState([]);

  useEffect(() => {
    const mockData = generateMockCitizens(100); 
    console.log(mockData)
    setCitizens(mockData);
  }, []);
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={4}>
        <CitizensTable data={citizens} onRowClick={setSelectedCitizen} />
      </Grid>
      <Grid item xs={12} md={8}>
        {selectedCitizen ? (
          <CitizenDetails citizen={selectedCitizen} />
        ) : (
          <div>Select a citizen to view details</div>
        )}
      </Grid>
    </Grid>
  );
}