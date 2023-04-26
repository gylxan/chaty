import React from 'react';
import { Grid } from '@chakra-ui/react';
import Chat from '@/components/chat/Chat';

export default function Home() {
  return (
    <main>
      <Grid
        maxWidth="1280px"
        width="100%"
        border="2px solid gray"
        borderRadius={6}
        height="100vh"
        maxHeight="700px"
      >
        <Chat />
      </Grid>
    </main>
  );
}
