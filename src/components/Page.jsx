import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Box, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemText, ListItemIcon, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import RouteIcon from '@mui/icons-material/Route';
import ControlIcon from '@mui/icons-material/ControlCamera';
import BlocksIcon from '@mui/icons-material/FilterNone';
import VialsIcon from '@mui/icons-material/Opacity'; 
import SetupIcon from '@mui/icons-material/Settings';
import LogsIcon from '@mui/icons-material/ListAlt';
import HelpIcon from '@mui/icons-material/HelpOutline';

function Page({ children }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [location] = useState(window.location.pathname);
   
  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const list = () => (
    <Box
      sx={{ 
        width: 250,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
     }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List >
        {[
          { text: 'Home', icon: <HomeIcon />, link: '/' },
          { text: 'Path', icon: <RouteIcon />, link: '/path'  },
          { text: 'Control', icon: <ControlIcon />, link: '/control'  },
          { text: 'Blocks', icon: <BlocksIcon />, link: '/blocks'  },
          { text: 'Vials', icon: <VialsIcon />, link: '/vials'  },
          { text: 'Setup', icon: <SetupIcon />, link: '/setup'  },
        ].map((item) => (
            <Link to={item.link} 
            style={{ 
                textDecoration: 'none',
                color: 'inherit',
             }} 
            key={item.text}>
            <ListItem key={item.text}
            sx={{
                backgroundColor: location === item.link ? '#0aa96c' : ''
            }}
            >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
          </Link>
        ))}
      </List>
      <List>
        {[
          { text: 'Logs', icon: <LogsIcon />, link: '/logs' },
          { text: 'Help', icon: <HelpIcon />, link: '/help' },
        ].map((item) => (
            <Link to={item.link} 
            style={{ 
                textDecoration: 'none',
                color: 'inherit',
             }} 
            key={item.text}>
            <ListItem key={item.text}
            sx={{
                backgroundColor: location === item.link ? '#0aa96c' : ''
            }}
            >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            title?
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
      >
        {list()}
      </Drawer>
      <Box component="main" sx={{ p: 3 }}>
        {children}
      </Box>
    </Box>
  );
}

export default Page;
