import React, { useState } from 'react';
import LoginForm from '../components/LogInForm';
import { getCurrentUser, logIn } from '../utils/authService';

const LogIn = ({ setUser, setcurrentUser }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
  });
  const [error, setError] = useState(null);

  const logInWithUser = async () => {
    await logIn(formData);
    /* setcurrentUser({ username: data.username, id: data._id }); */
  };

  return (
    <section>
      <LoginForm
        logInWithUser={logInWithUser}
        formData={formData}
        setFormData={setFormData}
        error={error}
        setError={setError}
      />
    </section>
  );
};

export default LogIn;
