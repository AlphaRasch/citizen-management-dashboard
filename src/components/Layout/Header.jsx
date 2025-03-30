import React from 'react';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';
import Sidebar from './Sidebar';

export default function Layout({ children }) {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Citizen Portal</Typography>
        </Toolbar>
      </AppBar>
      <Sidebar />
      <Container maxWidth="xl" sx={{ mt: 4 }}>
        {children}
      </Container>
    </div>
  );
}