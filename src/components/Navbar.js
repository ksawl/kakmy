import * as React from 'react';

import { Button, Grid } from '@mui/material';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { LOGIN_ROUTE } from '../utils/consts';
import { NavLink } from 'react-router-dom';
import Toolbar from '@mui/material/Toolbar';

const Navbar = () => {
  const user = false;
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color={'primary'} position="static">
        <Toolbar variant={"dense"}>
          <Grid container justifyContent="flex-end">
            {user ? (
              <Button variant="contained">Logout</Button>
            ) : (
              <NavLink to={LOGIN_ROUTE}>
                <Button variant="contained">Login</Button>
              </NavLink>
            )}
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
