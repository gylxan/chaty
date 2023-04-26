import React, { useState } from 'react';
import { Grid } from '@chakra-ui/react';
import ChatOverview from '@/components/chat-overview/ChatOverview';
import MessageOverview from '@/components/message-overview/MessageOverview';
import { User } from '@/types/user';

export default function Chat() {
  const [activeUser, setActiveUser] = useState<undefined | User>();
  return (
    <Grid gridTemplateColumns="1fr 3fr">
      <ChatOverview onUserSelect={setActiveUser} />
      <MessageOverview activeUser={activeUser} />
    </Grid>
  );
}
