import React from 'react';
import { Box, Grid, Text } from '@chakra-ui/react';
import UserBadge from '@/components/user-badge/UserBadge';
import { getFormattedDate } from '@/utils/date';

export interface ChatListEntryProps {
  name: string;
  lastMessage: string;
  lastMessageDate: string;
  onClick: () => void;
}
export default function ChatListEntry({
  name,
  lastMessageDate,
  lastMessage,
  onClick,
}: ChatListEntryProps) {
  return (
    <Box as="button" display="flex" gap={4} padding={2} onClick={onClick}>
      <UserBadge name={name} />
      <Box display="flex" flexDirection="column" gap={0.5} width="100%">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Text
            fontSize="md"
            fontWeight={800}
            whiteSpace="nowrap"
            textOverflow="ellipsis"
            overflow="hidden"
          >
            {name}
          </Text>
          <Text fontSize="xs">{getFormattedDate(lastMessageDate)}</Text>
        </Box>
        <Text
          fontSize="sm"
          whiteSpace="nowrap"
          textOverflow="ellipsis"
          overflow="hidden"
          textAlign="left"
        >
          {lastMessage}
        </Text>
      </Box>
    </Box>
  );
}
