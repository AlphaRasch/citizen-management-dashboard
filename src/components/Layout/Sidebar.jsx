import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Dashboard, People } from '@mui/icons-material';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <List component="nav" sx={{ width: 250, bgcolor: 'background.paper' }}>
      <ListItem button="true" component={Link} to="/">
        <ListItemIcon><Dashboard /></ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
      <ListItem button="true" component={Link} to="/citizens">
        <ListItemIcon><People /></ListItemIcon>
        <ListItemText primary="Citizens" />
      </ListItem>
    </List>
  );
}