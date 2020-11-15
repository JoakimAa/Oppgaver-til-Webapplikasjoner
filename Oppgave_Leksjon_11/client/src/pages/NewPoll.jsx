import React, { useState } from 'react';
import { Heading } from '@chakra-ui/core';
import { useHistory } from 'react-router-dom';
import CreateNewPoll from '../components/CreateNewPoll';
import { create } from '../utils/pollService';

const NewPoll = ({ currentUser }) => {
  const history = useHistory();
  const handleClick = () => {
    history.push('/signup');
  };

  const [formData, setFormData] = useState({
    name: '',
    userId: '',
    question: '',
    answers: [
      {
        answer: '',
        votecount: 0,
      },
      { answer: '', votecount: 0 },
    ],
  });
  const [error, setError] = useState(null);

  const createPoll = async () => {
    const { error } = await create(formData);
    if (error) {
      setError(error);
    }
    history.push('/');
  };

  return (
    <section>
      <Heading mb={2} as="h1" size="md">
        New Poll
      </Heading>
      {currentUser.username ? (
        <CreateNewPoll
          formData={formData}
          setFormData={setFormData}
          createPoll={createPoll}
          error={error}
          setError={setError}
          currentUser={currentUser}
        />
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
