import React, { useEffect, useState } from 'react';
import { Box, Heading, Flex } from '@chakra-ui/core';
import { useHistory } from 'react-router-dom';
import { list } from '../utils/pollService';

/* const /* StyledButton */

const Home = ({ setCurrentPoll }) => {
  const [polls, setPolls] = useState(null);
  const [error, setError] = useState(null);
  const history = useHistory();

  const redirectToPoll = (id) => {
    setCurrentPoll(id);
    history.push(`/activepoll`);
  };

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await list();
      if (error) {
        setError(error);
      } else {
        setPolls(data);
      }
    };
    fetchData();
  }, []);

  return (
    <section>
      <Heading mb={2} as="h1" size="md">
        Hjem
      </Heading>
      {error && <p>{error}</p>}
      <Flex>
        {polls &&
          polls.map((poll) => (
            <Box p="6" as="article" key={poll.id}>
              <Heading mb={2} as="h2" size="mb">
                {poll.name}
              </Heading>
              <button type="button" onClick={() => redirectToPoll(poll.id)}>
                Ta spørreundersøkelse
              </button>
            </Box>
          ))}
      </Flex>
    </section>
  );
};
export default Home;
