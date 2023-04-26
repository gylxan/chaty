import { Avatar } from '@chakra-ui/react';

export interface UserBadgeProps {
  name: string;
  src?: string;
  size?: 'xs' | 'sm' | 'md'
}
export default function UserBadge({ name, src , size= "md"}: UserBadgeProps) {
  return <Avatar size={size} name={name} src={src} />;
}
