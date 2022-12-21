import { Avatar, Text, Button, Paper } from '@mantine/core';
// import { AUTH_COOKIE_NAME } from './AppContext';
// import { setCookie } from 'cookies-next';

import { useRouter } from 'next/router';

interface UserInfoActionProps {
  avatar: string;
  name: string;
  email: string;
  job: string;
}

export const UserProfileMockData = {
  avatar:
    'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80',
  name: 'Jane Fingerlicker',
  email: 'jfingerlicker@me.io',
  job: 'Art director',
};

export function UserAvatar({ avatar, name, email, job }: UserInfoActionProps) {
  const router = useRouter();
  return (
    <Paper
      radius="md"
      p="lg"
      sx={(theme) => ({
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
      })}
    >
      <Avatar src={avatar} size={240} mx="auto" />
      <Text align="center" size="lg" weight={500} mt="md">
        {name}
      </Text>
      <Text align="center" color="dimmed" size="sm">
        {email} • {job}
      </Text>
      <Button
        variant="default"
        fullWidth
        mt="md"
        onClick={() => {
          // setCookie(AUTH_COOKIE_NAME, null, { maxAge: 60 * 60 * 24 * 30 });
          if (router.pathname !== '/') {
            router.replace('/');
          } else {
            router.reload();
          }
        }}
      >
        Sign out
      </Button>
    </Paper>
  );
}
