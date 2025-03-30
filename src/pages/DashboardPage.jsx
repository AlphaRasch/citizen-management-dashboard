import React from 'react';
import { Grid } from '@mui/material';
import StatsCard from '../components/Dashboarb/StatsCard';
import AgeChart from '../components/Dashboarb/AgeChart';
import StatusPieChart from '../components/Dashboarb/StatusPieChart';
import { ArrowUpward } from '@mui/icons-material'; 
export default function DashboardPage() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6} lg={3}>
        <StatsCard title="Всего граждан" value="124,542" />
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <StatsCard title="Активные" value="23,451" icon={ArrowUpward} />
      </Grid>
      <Grid item xs={12} md={6}>
        <AgeChart />
      </Grid>
      <Grid item xs={12} md={6}>
        <StatusPieChart />
      </Grid>
    </Grid>
  );
}