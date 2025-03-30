import React from 'react';
import { TextField, Grid } from '@mui/material';

export default function EducationForm({ data }) {
  return (
    <div>
      <Grid container spacing={2} sx={{ margin: '10px' }}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Degree"
            name="degree"
            value={data?.degree || ''}
            InputProps={{
              readOnly: true,
            }}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="University"
            name="university"
            value={data?.university || ''}
            InputProps={{
              readOnly: true,
            }}
            variant="outlined"
          />
        </Grid>
      </Grid>
    </div>
  );
}