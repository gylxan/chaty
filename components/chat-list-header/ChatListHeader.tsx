import { Box, Text } from '@chakra-ui/react';
import { User } from '@/types/user';
import UserBadge from '@/components/user-badge/UserBadge';
import React from 'react';

export interface ChatListHeaderProps {
  currentUser: User;
}
export default function ChatListHeader({ currentUser }: ChatListHeaderProps) {
  return (
    <Box
      display="flex"
      padding={2}
      gap={2}
      alignItems="center"
      backgroundColor="lightgrey"
      boxShadow="md"
      justifyContent="space-between"
    >
      <UserBadge name={currentUser.name} size="sm" />
      ->
      M
    </Box>
  );
}
