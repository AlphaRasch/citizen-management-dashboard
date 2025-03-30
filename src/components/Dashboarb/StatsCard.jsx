import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import { ArrowUpward, PeopleAlt } from '@mui/icons-material';

export default function StatsCard({ title, value, icon: Icon = PeopleAlt }) {
  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={8}>
            <Typography color="textSecondary" gutterBottom variant="overline">
              {title}
            </Typography>
            <Typography variant="h4">{value}</Typography>
          </Grid>
          <Grid item xs={4} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
            <Icon sx={{ fontSize: 40, color: 'primary.main' }} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}