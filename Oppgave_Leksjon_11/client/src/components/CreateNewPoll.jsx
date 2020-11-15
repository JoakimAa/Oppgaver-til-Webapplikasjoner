import React, { /* useEffect, */ useState } from 'react';
import styled from 'styled-components';

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

const CreateNewPoll = ({
  formData,
  setFormData,
  createPoll,
  error,
  setError,
  currentUser,
}) => {
  const [msgTrue, setMsgTrue] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const updateValue = (event) => {
    const inputValue = { [event.target.name]: event.target.value };
    setFormData((prev) => ({
      ...prev,
      ...inputValue,
      userId: currentUser.id,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name === '' || formData.question === '') {
      setErrorMsg('Du må fylle inn alle feltene');
      setMsgTrue(true);
    } else {
      setMsgTrue(false);
      createPoll();
      setError(null);
    }
  };

  return (
    <StyledForm id="newPoll">
      <label htmlFor="inpName">Navn</label>
      <StyledInput
        type="text"
        name="name"
        id="inpNavn"
        placeholder="Navn"
        onChange={updateValue}
        value={formData.name}
      />
      <label htmlFor="inpQestion">Spørsmål</label>
      <StyledInput
        type="text"
        name="question"
        id="inpQestion"
        placeholder="Spørsmål"
        onChange={updateValue}
        value={formData.question}
      />
      <StyledButton type="submit" id="bCreate" onClick={handleSubmit}>
        Lag poll
      </StyledButton>
      {msgTrue && errorMsg}
      {error && <p>{error.message}</p>}
    </StyledForm>
  );
};

export default CreateNewPoll;
