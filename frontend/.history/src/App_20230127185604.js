import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Layout/Header';
import Register from './components/Auth/Register';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<div>Home</div>}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/login' element={<div>Login</div>}></Route>
          <Route path='/customer' element={<div>Customer</div>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
