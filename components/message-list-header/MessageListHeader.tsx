import { Box, Text } from '@chakra-ui/react';
import { User } from '@/types/user';
import UserBadge from '@/components/user-badge/UserBadge';
import React from 'react';

export interface MessageListHeaderProps {
  user?: User;
}
export default function MessageListHeader({ user }: MessageListHeaderProps) {
  return (
    <Box
      display="flex"
      padding={2}
      gap={2}
      alignItems="center"
      backgroundColor="lightgrey"
      boxShadow="md"
    >
      {'<-'}
      <UserBadge name={user?.name ?? '?'} size="sm" />
      <Text fontWeight="800">{user?.name ?? '???'}</Text>
    </Box>
  );
}
