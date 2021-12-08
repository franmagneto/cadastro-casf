import * as React from 'react';
import { Heading, VStack } from '@chakra-ui/react';

function Home(): JSX.Element {
  return (
    <VStack>
      <Heading as='h1' fontSize='2xl'>
        Ficha de Acolhimento Permanente
      </Heading>
      <Heading as='h2' fontSize='xl'>
        Casa de Apoio São Francisco Muzambinho/MG
      </Heading>
    </VStack>
  );
}

export default Home;
