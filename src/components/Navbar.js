import * as React from 'react';

import { Button, Grid } from '@mui/material';

import AppBar from '@mui/material/AppBar';
import { Context } from '../index';
import { LOGIN_ROUTE } from '../utils/consts';
import { NavLink } from 'react-router-dom';
import Toolbar from '@mui/material/Toolbar';
import { signOut } from '@firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useContext } from 'react';

const Navbar = () => {
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
  };

  return (
    <AppBar color={'primary'} position="static">
      <Toolbar variant={'dense'}>
        <Grid container justifyContent="flex-end">
          {user ? (
            <Button variant="contained" onClick={logout}>
              Logout
            </Button>
          ) : (
            <NavLink to={LOGIN_ROUTE}>
              <Button variant="contained">Login</Button>
            </NavLink>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
