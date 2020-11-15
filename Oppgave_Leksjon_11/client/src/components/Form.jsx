import React, { /* useEffect, */ useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

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

const Form = ({ formData, setFormData, createUser, error, setError }) => {
  const [msgTrue, setMsgTrue] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const history = useHistory();

  const updateValue = (event) => {
    const inputValue = { [event.target.name]: event.target.value };
    setFormData((prev) => ({
      ...prev,
      ...inputValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.username === '' ||
      formData.password === '' ||
      formData.email === ''
    ) {
      setErrorMsg('Du må fylle inn alle feltene');
      setMsgTrue(true);
    } else {
      setMsgTrue(false);
      createUser();
      setError(null);
      history.push(`/`);
    }
  };

  return (
    <StyledForm id="newUser">
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
      {msgTrue && error && errorMsg}
    </StyledForm>
  );
};

export default Form;
