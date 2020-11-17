import React, { /* useEffect, */ useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { create } from '../utils/authService';

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

const Form = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
  });
  const [msgTrue, setMsgTrue] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();

  const updateValue = (event) => {
    const inputValue = { [event.target.name]: event.target.value };
    setFormData((prev) => ({
      ...prev,
      ...inputValue,
    }));
  };

  const createUser = async () => {
    await create(formData);
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
      history.push(`/signin`);
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
      <StyledButton
        type="submit"
        id="bCreateUser"
        button="createUser"
        onClick={handleSubmit}
      >
        Registrer
      </StyledButton>
      {msgTrue && error}
      {msgTrue && <p>{errorMsg}</p>}
    </StyledForm>
  );
};

export default Form;
