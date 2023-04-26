import { Grid } from '@chakra-ui/react';
import React from 'react';
import ChatList from '@/components/chat-list/ChatList';
import { User } from '@/types/user';
import ChatListHeader from '@/components/chat-list-header/ChatListHeader';

export interface ChatOverviewProps {
  onUserSelect: (user: User) => void;
}
export default function ChatOverview({ onUserSelect }: ChatOverviewProps) {
  return (
    <Grid gridTemplateRows="auto 1fr">
      <ChatListHeader currentUser={{ name: 'Guido' }} />
      <ChatList onEntryClick={onUserSelect} />
    </Grid>
  );
}
