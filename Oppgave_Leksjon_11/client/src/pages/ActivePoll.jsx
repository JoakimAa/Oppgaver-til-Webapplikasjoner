import React, { useState, useEffect } from 'react';
import { Heading } from '@chakra-ui/core';
import styled from 'styled-components';
import { get, put } from '../utils/pollService.js';
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

const ActivePoll = ({ currentPoll }) => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    answer: '',
  });
  const [poll, setPoll] = useState(null);
  const [error, setError] = useState(null);

  const onSubmit = async () => {
    await put(poll.id, formData);
    history.push('/');
  };

  const updateValue = (event) => {
    const inputValue = { [event.target.name]: event.target.value };
    setFormData((prev) => ({
      ...prev,
      ...inputValue,
    }));
  };

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await get(currentPoll);
      if (error) {
        setError(error);
      } else {
        setPoll(data);
      }
    };
    fetchData();
  }, [currentPoll]);

  return (
    <>
      {poll && (
        <section>
          <Heading mb={2} as="h1" size="md">
            {poll.name}
          </Heading>
          <p>{poll.question}</p>
          <StyledForm>
            <label htmlFor="inpName">Svar</label>
            <StyledInput
              type="text"
              name="answer"
              id="inpAnswer"
              placeholder="Svar"
              onChange={updateValue}
              value={formData.answer}
            />
            <StyledButton type="button" value="yes" id="yes" onClick={onSubmit}>
              Send inn
            </StyledButton>
          </StyledForm>
        </section>
      )}
    </>
  );
};

export default ActivePoll;
