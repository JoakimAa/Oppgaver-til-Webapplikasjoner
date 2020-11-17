import React from 'react';
import { Heading } from '@chakra-ui/core';
import LoginForm from '../components/LogInForm';

const LogIn = ({ setcurrentUser }) => (
  <section>
    <Heading mb={2} as="h1" size="md">
      Logg inn
    </Heading>
    <LoginForm setcurrentUser={setcurrentUser} />
  </section>
);

export default LogIn;
