import React, { useEffect, useState } from 'react';
import { Box, Heading, Flex, Text, Icon } from '@chakra-ui/core';
import styled from 'styled-components';
import { create } from '../utils/pollService';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 200px;
`;

const StyledInput = styled.input`
  margin: 0px 0px 20px 0px;
  background-color: #cccccc;
`;

const StyledButton = styled.button`
  text-align: left;
  margin: 0px 0px 20px 0px;
`;

const Form = ({ formData, setFormData, createUser, error }) => {
  const [msgTrue, setMsgTrue] = useState(false);
  /* const [errorMsg, setErrorMsg] = useState(''); */
  let errorMsg = '';

  const updateValue = (event) => {
    const inputValue = { [event.target.name]: event.target.value };
    setFormData((prev) => ({
      ...prev,
      ...inputValue,
    }));
  };

  const createErrorMessage = () => {
    errorMsg = '';
    if (formData.username === '') {
      /* setErrorMsg(`Du må fylle inn brukernavn`); */
      errorMsg = 'Du må fylle inn brukernavn';
      console.log(errorMsg);
    }
    if (formData.password === '') {
      /* setErrorMsg(`${errorMsg}\nDu må fylle inn passord`); */
      errorMsg = `${errorMsg}\nDu må fylle inn passord`;
      console.log(errorMsg);
    }
    if (formData.email === '') {
      /* setErrorMsg(`${errorMsg}\nDu må fylle inn epost`); */
      errorMsg = `${errorMsg}\nDu må fylle inn epost`;
      console.log(errorMsg);
    }
    if (errorMsg === '') {
      setMsgTrue(false);
    } else {
      setMsgTrue(true);
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      author: '',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createErrorMessage();
    if (!msgTrue) {
      createUser();
      resetForm();
    }
  };

  return (
    <StyledForm id="newUser">
      {msgTrue && <p>{errorMsg}</p>}
      <label htmlFor="inpUsername">Brukernavn</label>
      <StyledInput
        type="text"
        name="username"
        id="inpUsername"
        placeholder="Brukernavn"
        onChange={updateValue}
        value={formData.username}
      />
      <label htmlFor="inpUsername">Passord</label>
      <StyledInput
        type="password"
        name="password"
        id="inpPassword"
        placeholder="Passord"
        onChange={updateValue}
        value={formData.password}
      />
      <label htmlFor="inpUsername">Epost</label>
      <StyledInput
        type="text"
        name="email"
        id="inpEmail"
        placeholder="Epost"
        onChange={updateValue}
        value={formData.email}
      />
      <StyledButton type="submit" id="bCreate" onClick={handleSubmit}>
        Registrer
      </StyledButton>
    </StyledForm>
  );
};

export default Form;
