import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Layout/Header';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';

import AuthContext from './components/context/AuthContext';
import Customers from './components/Customers/Customers';

export default function Routers() {
  const { loggedIn } = useContext(AuthContext);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<div>Home</div>}></Route>
        {(loggedIn === false || loggedIn === undefined) && (
          <>
            <Route path='/register' element={<Register />}></Route>
            <Route path='/login' element={<Login />}></Route>
          </>
        )}
        {loggedIn === true && (
          <Route path='/customer' element={<Customers />}></Route>
        )}
      </Routes>
    </Router>
  );
}
