import React, { useState, useEffect } from 'react';
import { Heading } from '@chakra-ui/core';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { get, put } from '../utils/pollService.js';

const StyledButton = styled.button`
  text-align: left;
  margin: 10px 20px 20px 0px;
  padding: 5px 15px;
  border-radius: 10px;
`;

const YesButton = styled.button`
  background-color: green;
`;

const NoButton = styled.button`
  background-color: red;
`;

const StyledFlex = styled.div`
  display: flex;
  flex-direction: row;
`;

const ActivePoll = ({ currentPoll }) => {
  const history = useHistory();
  const [poll, setPoll] = useState(null);
  const [error, setError] = useState(null);

  const onSubmit = async (event) => {
    await put(poll.id, { $inc: { [event.target.value]: 1 } });
    history.push('/');
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
          <StyledFlex>
            <StyledButton
              as={YesButton}
              type="button"
              value="yes"
              id="yes"
              onClick={onSubmit}
            >
              Ja
            </StyledButton>
            <StyledButton
              as={NoButton}
              type="button"
              value="no"
              id="no"
              onClick={onSubmit}
            >
              Nei
            </StyledButton>
          </StyledFlex>
        </section>
      )}
    </>
  );
};

export default ActivePoll;
