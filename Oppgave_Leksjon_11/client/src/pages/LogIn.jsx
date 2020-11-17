import React from 'react';
import LoginForm from '../components/LogInForm';

const LogIn = ({ setcurrentUser }) => (
  <section>
    <LoginForm setcurrentUser={setcurrentUser} />
  </section>
);

export default LogIn;
