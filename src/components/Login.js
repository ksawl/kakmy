import { Button, Container, Grid } from '@mui/material';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

import { Box } from '@mui/system';
import { Context } from '../index';
import React from 'react';
import { useContext } from 'react';

const Login = () => {
  const { auth } = useContext(Context);

  const login = async () => {
    // Sign in using a popup.
    const provider = new GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    const result = await signInWithPopup(auth, provider);

    // The signed-in user info.
    const user = result.user;
    // This gives you a Google Access Token.
    const token = user.accessToken;
    console.log('user: ', user);
    console.log('token: ', token);
  };

  return (
    <Container>
      <Grid
        container
        style={{ height: window.innerHeight - 50 }}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <Grid
          style={{ width: 400, background: 'lightgray' }}
          container
          alignItems={'center'}
          direction={'column'}
        >
          <Box p={5}>
            <Button variant={'outlined'} onClick={login}>Login with Google</Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
