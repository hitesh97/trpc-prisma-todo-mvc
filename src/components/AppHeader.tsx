import {
  createStyles,
  Header,
  HoverCard,
  Group,
  Button,
  UnstyledButton,
  Text,
  ThemeIcon,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
  Avatar,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
  IconNotification,
  IconCode,
  IconBook,
  IconChartPie3,
  IconFingerprint,
  IconCoin,
  IconChevronDown,
} from '@tabler/icons';
import { useUserAuthenticated } from '../providers/authProider/AuthProvider';
import { ColorSchemeToggle } from './ColorSchemeToggle/ColorSchemeToggle';
import { UserAvatar, UserProfileMockData } from './UserAvatar';
import { AkrutiConsIcon } from './AkrutiConsIcon';
import { siteLinks } from './mockData/footerData';
import { useEffect, useState } from 'react';
import { env } from 'process';


const useStyles = createStyles((theme) => ({
  link: {
    display: 'flex',
    alignItems: 'center',
    height: '90%',
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,

    [theme.fn.smallerThan('sm')]: {
      height: 42,
      display: 'flex',
      alignItems: 'center',
      width: '100%',
    },

    ...theme.fn.hover({
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    }),
  },

  subLink: {
    width: '100%',
    padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
    borderRadius: theme.radius.md,

    ...theme.fn.hover({
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
    }),

    '&:active': theme.activeStyles,
  },

  dropdownFooter: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
    margin: -theme.spacing.md,
    marginTop: theme.spacing.sm,
    padding: `${theme.spacing.md}px ${theme.spacing.md * 2}px`,
    paddingBottom: theme.spacing.xl,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
  },

  hiddenMobile: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },
  mainNavContainer: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 'auto',
  },
}));

const mockdata = [
  {
    icon: IconCode,
    title: 'Open source',
    description: 'This Pok??mon???s cry is very loud and distracting',
  },
  {
    icon: IconCoin,
    title: 'Free for everyone',
    description: 'The fluid of Smeargle???s tail secretions changes',
  },
  {
    icon: IconBook,
    title: 'Documentation',
    description: 'Yanma is capable of seeing 360 degrees without',
  },
  {
    icon: IconFingerprint,
    title: 'Security',
    description: 'The shell???s rounded shape and the grooves on its.',
  },
  {
    icon: IconChartPie3,
    title: 'Analytics',
    description: 'This Pok??mon uses its flying ability to quickly chase',
  },
  {
    icon: IconNotification,
    title: 'Notifications',
    description: 'Combusken battles with the intensely hot flames it spews',
  },
];

export function AppHeader({showSignup, ...rest}: {showSignup: boolean, rest:any}) {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const [userProfileOpen, { toggle: openUserProfile }] = useDisclosure(false);
  const { classes, theme } = useStyles();
  const isOnline = useUserAuthenticated();
  const [isMounted, setMounted] = useState(false);

  useEffect(()=>{
    setMounted(true);
  }, [])

  const links = mockdata.map((item) => (
    <UnstyledButton className={classes.subLink} key={item.title}>
      <Group noWrap align="flex-start">
        <ThemeIcon size={34} variant="default" radius="md">
          <item.icon size={22} color={theme.fn.primaryColor()} />
        </ThemeIcon>
        <div>
          <Text size="sm" weight={500}>
            {item.title}
          </Text>
          <Text size="xs" color="dimmed">
            {item.description}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  ));

  const UserProfileMenuItem = () => (
    <HoverCard position="bottom" shadow="md" withinPortal>
      <HoverCard.Target>
        <a href="#" className={classes.link}>
          <Center inline>
            <Box component="span" mr={5}>
              <Avatar src={UserProfileMockData.avatar} alt="it's me" radius="xl" />
            </Box>
            <IconChevronDown size={16} color={theme.fn.primaryColor()} />
          </Center>
        </a>
      </HoverCard.Target>

      <HoverCard.Dropdown sx={{ overflow: 'hidden' }}>
        <UserAvatar {...UserProfileMockData} />
      </HoverCard.Dropdown>
    </HoverCard>
  );

  const SignUpMenuItem = () => {
    if(isMounted && !process.env.showSignUp){
      return null
    }
    return (
      <>
        <Button variant="subtle" component="a" href={siteLinks.login}>
          Log in
        </Button>
        <Button component="a" href={siteLinks.signUp}>
          Sign up
        </Button>
      </>
    );
  };
  return (
    <Box pb={120}>
      <Header height={68} px="md">
        <Group position="apart" sx={{ height: '100%'}}>
          <Group>
            <AkrutiConsIcon />
          </Group>
          <Group sx={{ height: '100%' }} spacing={0} className={classes.hiddenMobile} ml="auto">
            <a href="/" className={classes.link}>
              Home
            </a>
            {/* keeping this as we want to bring back this menu soon! */}
            {/* <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
              <HoverCard.Target>
                <a href="#" className={classes.link}>
                  <Center inline>
                    <Box component="span" mr={5}>
                      Features - 2
                    </Box>
                    <IconChevronDown size={16} color={theme.fn.primaryColor()} />
                  </Center>
                </a>
              </HoverCard.Target>

              <HoverCard.Dropdown sx={{ overflow: 'hidden' }}>
                <Group position="apart" px="md">
                  <Text weight={500}>Features - 3</Text>
                  <Anchor href="#" size="xs">
                    View all
                  </Anchor>
                </Group>

                <Divider
                  my="sm"
                  mx="-md"
                  color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'}
                />

                <SimpleGrid cols={2} spacing={0}>
                  {links}
                </SimpleGrid>

                <div className={classes.dropdownFooter}>
                  <Group position="apart">
                    <div>
                      <Text weight={500} size="sm">
                        Get started
                      </Text>
                      <Text size="xs" color="dimmed">
                        Their food sources have decreased, and their numbers
                      </Text>
                    </div>
                    <Button variant="default">Get started</Button>
                  </Group>
                </div>
              </HoverCard.Dropdown>
            </HoverCard> */}
            <a href="#ourservices" className={classes.link}>
              Our services
            </a>
            <a href="#ourtechstack" className={classes.link}>
            Our Tech Stack
            </a>
            <a href="#contactus" className={classes.link}>
            Contact Us
            </a>
            {isOnline && <UserProfileMenuItem />}
          </Group>

          {!isOnline && (
            <Group className={classes.hiddenMobile}>
              <SignUpMenuItem />
              <ColorSchemeToggle />
            </Group>
          )}

          <Burger opened={drawerOpened} onClick={toggleDrawer} className={classes.hiddenDesktop} />
        </Group>
      </Header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        className={classes.hiddenDesktop}
        zIndex={1000000}
      >
        <ScrollArea sx={{ height: 'calc(100vh - 60px)' }} mx="-md">
          <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />

          <a href="#" className={classes.link}>
            Home
          </a>
          <UnstyledButton className={classes.link} onClick={toggleLinks}>
            <Center inline>
              <Box component="span" mr={5}>
                Features - 1
              </Box>
              <IconChevronDown size={16} color={theme.fn.primaryColor()} />
            </Center>
          </UnstyledButton>
          <Collapse in={linksOpened}>{links}</Collapse>
          <a href="#ourservices" className={classes.link}>
            Our services
          </a>
          <a href="#ourtechstack" className={classes.link}>
          Our Tech sStack
          </a>
          <a href="#contactus" className={classes.link}>
            Contact Us
            </a>
          {isOnline && (
            <>
              <UnstyledButton className={classes.link} onClick={openUserProfile}>
                <Center inline>
                  <Box component="span" mr={5}>
                    User
                  </Box>
                  <IconChevronDown size={16} color={theme.fn.primaryColor()} />
                </Center>
              </UnstyledButton>
              <Collapse in={userProfileOpen}>
                <UserAvatar {...UserProfileMockData} />
              </Collapse>
            </>
          )}
          <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />

          {!isOnline && (
            <Group position="center" grow pb="xl" px="md">
              <SignUpMenuItem />
              <ColorSchemeToggle />
            </Group>
          )}
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
