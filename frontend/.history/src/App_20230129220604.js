import React, { useContext } from 'react';
import axios from 'axios';
import { AuthContextProvider } from './components/context/AuthContext';
import Routers from './Router';

axios.defaults.withCredentials = true; //to allow save cookie

function App() {
  return (
    <AuthContextProvider>
      <Routers />
    </AuthContextProvider>
  );
}

export default App;
