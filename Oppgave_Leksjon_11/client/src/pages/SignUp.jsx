import React, { useState } from 'react';
import {
  /*  Box, */ Heading /* Flex, */ /* Text, Icon */,
} from '@chakra-ui/core';
import Form from '../components/Form.jsx';
import { create } from '../utils/authService';

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
  });
  const [error, setError] = useState(null);

  const createUser = async () => {
    await create(formData);
  };

  return (
    <section>
      <Heading mb={2} as="h1" size="md">
        Registrer ny bruker
      </Heading>
      <Form
        formData={formData}
        setFormData={setFormData}
        createUser={createUser}
        error={error}
        setError={setError}
      />
    </section>
  );
};
export default SignUp;
