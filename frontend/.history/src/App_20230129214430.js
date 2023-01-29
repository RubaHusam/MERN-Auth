import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';

import Header from './components/Layout/Header';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import AuthContext, {
  AuthContextProvider,
} from './components/context/AuthContext';

axios.defaults.withCredentials = true; //to allow save cookie

function App() {
  const loggedIn = useContext(AuthContext);

  return (
    <AuthContextProvider>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<div>Home</div>}></Route>
          {loggedIn === false && (
            <>
              <Route path='/register' element={<Register />}></Route>
              <Route path='/login' element={<Login />}></Route>
            </>
          )}
          {loggedIn === true && (
            <Route path='/customer' element={<div>Customer</div>}></Route>
          )}
        </Routes>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
