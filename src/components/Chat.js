// h5Gdtnh1PyfEgrFfz1f2U926KYP2

import { Avatar, Button, Container, Grid, TextField } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import {
  getDatabase,
  onValue,
  ref,
  serverTimestamp,
  set,
} from 'firebase/database';

import { Context } from '../index';
import { useAuthState } from 'react-firebase-hooks/auth';

const Chat = () => {
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);
  const userId = user.uid;

  const db = getDatabase();
  const messagesRef = ref(db, 'messages');

  const [list, setlist] = useState({});
  const [message, setMessage] = useState('');

  const getMessages = () => {
    onValue(messagesRef, (snapshot) => {
      const messagesList = snapshot.val();
      setlist(messagesList || {});
    });
  };

  useEffect(() => {
    getMessages();
  }, []);

  console.log('list: ', list);
  //   console.log('list: ', Object.keys(list));
  //   console.log('list: ', Math.floor(Date.now() / 1000));

  const sendMessage = async () => {
    set(ref(db, 'messages/m' + Math.floor(Date.now() / 1000)), {
      message: message,
      userId: userId,
      displayName: user.displayName,
      photoURL: user.photoURL,
      createdAt: serverTimestamp(),
    }).then(() => {
      getMessages();
      setMessage('');
    });
  };

  const listView = () => {
    return Object.keys(list).map((key) => (
      <div key={key} style={{ padding: '0 15px', marginBottom: 15 }}>
        <Grid
          container
          direction={'row'}
          justifyContent={'flex-start'}
          alignItems={'center'}
          gap={2}
          style={{ marginBottom: 10 }}
        >
          <Avatar
            src={list[key].photoURL}
            alt={list[key].displayName}
            style={{ width: 30, height: 30 }}
          />
          <div>{list[key].displayName}</div>
        </Grid>
        <div
          style={{
            backgroundColor: userId === list[key].userId ? '#00ffff' : '#eee',
            padding: 5,
            borderRadius: 5,
            fontSize: 14,
          }}
        >
          {list[key].message}
        </div>
      </div>
    ));
  };

  return (
    <Container>
      <Grid
        container
        justifyContent={'center'}
        style={{ height: window.innerHeight - 50 }}
      >
        <div
          style={{
            width: '80%',
            height: '70vh',
            border: '1px solid #000',
            overflowY: 'auto',
          }}
        >
          {listView()}
        </div>
        <Grid
          container
          direction={'row'}
          justifyContent={'space-between'}
          alignItems={'center'}
          style={{ width: '80%' }}
        >
          <TextField
            fullWidth
            maxRows={2}
            variant={'outlined'}
            style={{ width: 'auto', flexBasis: '90%' }}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button
            onClick={sendMessage}
            variant={'contained'}
            style={{ height: '56px', flexBasis: '10%' }}
          >
            Send
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Chat;
