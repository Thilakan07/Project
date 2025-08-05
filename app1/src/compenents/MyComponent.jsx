import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        color="primary"
        elevation={3}
        sx={{
          borderBottomLeftRadius: 2,
          borderBottomRightRadius: 2,
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          {/* Spacer pushes buttons to the right */}
          <Box sx={{ flexGrow: 1 }} />

          <Button
            color="inherit"
            component={RouterLink}
            to="/login"
          >
            Login
          </Button>

          <Button
            color="inherit"
            component={RouterLink}
            to="/news"
          >
            News
          </Button>
        </Toolbar>
      </AppBar>

      {/* Prevent page content from sliding under the AppBar */}
      <Toolbar />
    </Box>
  );
}



