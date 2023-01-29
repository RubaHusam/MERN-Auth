import axios from 'axios';
import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import AuthContext from '../context/AuthContext';

export default function LogoutBtn() {
  const { getLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  async function logout() {
    await axios.get('http://localhost:5000/auth/logout');
    await getLoggedIn();
    navigate('/');
  }

  return (
    <Button variant='primary' style={{ width: '15%' }} onClick={logout}>
      Logout
    </Button>
  );
}
