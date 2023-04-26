import { Box, Text } from '@chakra-ui/react';
import { Message } from '@/types/message';
import React from 'react';
import { getFormattedTime } from '@/utils/date';

export type MessageListEntryProps = Message;
export default function MessageListEntry({
  message,
  receivedDateTime,
  sender,
}: MessageListEntryProps) {
  const currentUser = 'Guido';
  return (
    <Box
      padding={1}
      paddingBottom={3}
      borderRadius={8}
      maxWidth="90%"
      backgroundColor={currentUser === sender ? 'green' : 'gray'}
      display="flex"
      alignSelf={currentUser === sender ? 'end' : 'start'}
      position="relative"
    >
      <Text fontSize="md">{message}</Text>
      <Text
        fontSize="2xs"
        display="block"
        position="absolute"
        bottom="0"
        right={1}
      >
        {getFormattedTime(receivedDateTime)}
      </Text>
    </Box>
  );
}
