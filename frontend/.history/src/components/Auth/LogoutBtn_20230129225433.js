import axios from 'axios';
import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import AuthContext from '../context/AuthContext';
import { useHistory } from 'react-router-dom';

export default function LogoutBtn() {
  const { getLoggedIn } = useContext(AuthContext);
  const history = useHistory();

  async function logout() {
    await axios.get('http://localhost:5000/auth/logout');
    await getLoggedIn();
    history.push('/');
  }

  return (
    <Button variant='primary' style={{ width: '15%' }} onClick={logout}>
      Logout
    </Button>
  );
}
