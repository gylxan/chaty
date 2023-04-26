import { Message } from '@/types/message';
import React from 'react';
import { Box } from '@chakra-ui/react';
import MessageListEntry from '@/components/message-list-entry/MessageListEntry';

export interface MessageListProps {
  messages: Message[];
}
export default function MessageList({ messages }: MessageListProps) {
  return (
    <Box padding={4}  display="flex" flexDirection="column" gap={2} alignItems="start">
      {messages.map((message) => (
        <MessageListEntry
          key={`${message.receivedDateTime}-${message.message}`}
          {...message}
        />
      ))}
    </Box>
  );
}
