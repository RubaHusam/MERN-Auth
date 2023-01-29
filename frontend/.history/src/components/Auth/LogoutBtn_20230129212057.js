import axios from 'axios';
import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import AuthContext from '../context/AuthContext';

export default function LogoutBtn() {
  const { getLoggedIn } = useContext(AuthContext);

  async function logout() {
    await axios.get('http://localhost:5000/auth/logout');
    getLoggedIn();
  }

  return (
    <Button variant='primary' style={{ width: '15%' }} onClick={logout}>
      Logout
    </Button>
  );
}
