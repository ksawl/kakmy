import './App.css';

import AppRouter from './components/AppRouter';
import { BrowserRouter } from 'react-router-dom';
import { Context } from './index';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useContext } from 'react';

function App() {
  const { auth } = useContext(Context);
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return <Loader />;
  }

  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
