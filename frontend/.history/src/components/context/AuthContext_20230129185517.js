import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
const AuthContext = createContext();
function AuthContextProvider(props) {
  const [loggedIn, setLoggedIn] = useState(undefined);
  async function getLoggedIn() {
    const loggedInRes = await axios.get('http://localhost:5000/auth/');
    setLoggedIn(loggedInRes.data);
  }
  useEffect(() => {
    getLoggedIn();
  }, []);
  return (
    <AuthContext.Provider value={{ loggedIn, getLoggedIn }}>
      {' '}
      alshdkashdkjahsd{' '}
    </AuthContext.Provider>
  );
}
export default AuthContextProvider;
