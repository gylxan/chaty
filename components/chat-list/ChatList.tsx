import { Box } from '@chakra-ui/react';

import ChatListEntry from '@/components/chat-list-entry/ChatListEntry';
import { User } from '@/types/user';

export interface ChatListProps {
  onEntryClick: (user: User) => void;
}
export default function ChatList({ onEntryClick }: ChatListProps) {
  function handleEntryClick(user: User) {
    onEntryClick(user);
  }
  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <ChatListEntry
        onClick={() => handleEntryClick({ name: 'Guido' })}
        name="Guido"
        lastMessage={'Hallo Guido'}
        lastMessageDate="2023-12-01"
      />
      <ChatListEntry
        onClick={() => handleEntryClick({ name: 'Olga Mergenthaler' })}
        name="Olga Mergenthaler"
        lastMessage={'Kommst du Heute vorbei für leo?'}
        lastMessageDate="2023-12-01"
      />
      <ChatListEntry
        onClick={() => handleEntryClick({ name: 'Anne' })}
        name="Anne"
        lastMessage={'Was geht ab?'}
        lastMessageDate="2023-12-01"
      />
    </Box>
  );
}
