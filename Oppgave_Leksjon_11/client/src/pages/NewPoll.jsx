import React from 'react';
import { Heading } from '@chakra-ui/core';
import { useHistory } from 'react-router-dom';
import CreateNewPoll from '../components/CreateNewPoll';

const NewPoll = ({ currentUser }) => {
  const history = useHistory();
  const handleClick = () => {
    history.push('/signup');
  };

  return (
    <section>
      <Heading mb={2} as="h1" size="md">
        New Poll
      </Heading>
      {currentUser.username ? (
        <CreateNewPoll currentUser={currentUser} />
      ) : (
        <div>
          <p>Du må være innlogget for å lage en ny poll</p>
          <button type="button" onClick={handleClick}>
            Trykk her for å registrere deg
          </button>
        </div>
      )}
    </section>
  );
};

export default NewPoll;
