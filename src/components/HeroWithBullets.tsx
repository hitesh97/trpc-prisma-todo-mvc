import {
  createStyles,
  Image,
  Container,
  Title,
  Button,
  Group,
  Text,
  List,
  ThemeIcon,
} from "@mantine/core";
import { IconCheck } from "@tabler/icons";
import { siteInfo }from "../siteData/siteInfo";
import image from "../images/image.svg";

const useStyles = createStyles((theme) => ({
  inner: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: theme.spacing.xl * 4,
    paddingBottom: theme.spacing.xl * 4,
  },

  content: {
    maxWidth: 480,
    marginRight: theme.spacing.xl * 3,

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      marginRight: 0,
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 44,
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan("xs")]: {
      fontSize: 28,
    },
  },

  control: {
    [theme.fn.smallerThan("xs")]: {
      flex: 1,
    },
  },

  image: {
    flex: 1,

    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  highlight: {
    position: "relative",
    backgroundColor: theme.fn.variant({
      variant: "light",
      color: theme.primaryColor,
    }).background,
    borderRadius: theme.radius.sm,
    padding: "4px 12px",
  },
}));

export function HeroWithBullets() {
  const { classes } = useStyles();
  return (
    <Container size="xl" p="xl">
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
            We <span className={classes.highlight}>deliver</span> modern <br />{" "}
            technology solutions
          </Title>
          <Text color="dimmed" mt="md">
            {siteInfo.tagLine} – We choose modern technology stack that suits your need
            today and deliver solutions promptly.
          </Text>

          <List
            mt={30}
            spacing="sm"
            size="sm"
            icon={
              <ThemeIcon size={20} radius="xl">
                <IconCheck size={12} stroke={1.5} />
              </ThemeIcon>
            }
          >
            <List.Item>
              <Text size="lg">
                <b>Collaborative</b> – We strive to collaborate with our clients
                at every phase of the SDLC. We align with your business mission,
                values.
              </Text>
            </List.Item>
            <List.Item>
              <Text size="lg">
                <b>Transparent</b> – We are always transparent with our clients
                during every phase of the engagement.
              </Text>
            </List.Item>
            <List.Item>
              <Text size="lg">
                <b>Expert team</b> – We have access to some of the worlds best
                talent pool onshore, nearshore and offshore.
              </Text>
            </List.Item>
            <List.Item>
              <Text size="lg">
                <b>Truly Agile</b> – We believe in Agile methodology in every
                phase, be it, inception, design, project management, build or
                deploy
              </Text>
            </List.Item>
            <List.Item>
              <Text size="lg">
                <b>Commited to Quality</b> – We invest a lot of time
                understanding your needs and strive to deliver high quality
                solutions that provide business value to our customers.
              </Text>
            </List.Item>
          </List>

          {/* <Group mt={30}>
              <Button radius="xl" size="md" className={classes.control}>
                Get started
              </Button>
              <Button variant="default" radius="xl" size="md" className={classes.control}>
                Source code
              </Button>
            </Group> */}
        </div>
        <Image src={image.src} className={classes.image} />
      </div>
    </Container>
  );
}
