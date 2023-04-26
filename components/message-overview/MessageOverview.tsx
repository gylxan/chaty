import { Grid } from '@chakra-ui/react';
import MessageList from '@/components/message-list/MessageList';
import MessageListHeader from '@/components/message-list-header/MessageListHeader';
import { User } from '@/types/user';

export interface MessageOverviewProps {
  activeUser?: User;
}
export default function MessageOverview({ activeUser }: MessageOverviewProps) {
  return (
    <Grid gridTemplateRows="auto 1fr" borderLeft="2px solid lightgrey">
      <MessageListHeader user={activeUser} />
      <MessageList
        messages={[
          {
            message: 'Hallo Guido',
            sender: 'Julien',
            receivedDateTime: '2022-08-10 10:30',
          },
          {
            message:
              'Hallo Julien, was geht ab?<br/>' + 'Kommst du morgen zur Party?',
            sender: 'Guido',
            receivedDateTime: '2022-08-10 10:30',
          },
        ]}
      />
    </Grid>
  );
}
