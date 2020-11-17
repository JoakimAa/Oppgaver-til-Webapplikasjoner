import React from 'react';
import { Heading } from '@chakra-ui/core';
import Form from '../components/Form.jsx';

const SignUp = () => (
  <section>
    <Heading mb={2} as="h1" size="md">
      Registrer ny bruker
    </Heading>
    <Form />
  </section>
);
export default SignUp;
