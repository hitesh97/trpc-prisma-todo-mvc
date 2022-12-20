import { createStyles, Title, SimpleGrid, Text, Button, ThemeIcon, Grid, Col, Container, Image } from '@mantine/core';
import TexhIcons from "../images/tech";


const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: `${theme.spacing.xl * 2}px`,
    paddingBottom: `${theme.spacing.xl * 2}px`,
    
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 36,
    fontWeight: 900,
    lineHeight: 1.1,
    marginBottom: theme.spacing.md,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },
  highlight: {
    backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
    padding: 5,
    paddingTop: 0,
    borderRadius: theme.radius.sm,
    display: 'inline-block',
    color: theme.colorScheme === 'dark' ? theme.white : 'inherit',
  },
}));

const features = [
  {
    icon: "reactjs",
    title: 'reactjs',
    description: 'All packages are published under MIT license, you can use Mantine in any project',
  },
  {
    icon: "nextjs",
    title: 'nextjs',
    description:
      'Customize colors, spacing, shadows, fonts and many other settings with global theme object',
  },
  {
    icon: "gatsbyJs",
    title: 'gatsbyJs',
    description:
      'Customize colors, spacing, shadows, fonts and many other settings with global theme object',
  },
  {
    icon: "wordpress",
    title: 'wordpress',
    description:
      'Customize colors, spacing, shadows, fonts and many other settings with global theme object',
  },
  {
    icon: "typeScript",
    title: 'typeScript',
    description:
      'With new :focus-visible selector focus ring will appear only when user navigates with keyboard',
  },
  {
    icon: "javaScript",
    title: 'javaScript',
    description:
      'Customize colors, spacing, shadows, fonts and many other settings with global theme object',
  },
  {
    icon: "html5",
    title: 'html5',
    description:
      'Customize colors, spacing, shadows, fonts and many other settings with global theme object',
  },
  {
    icon: "css3",
    title: 'css3',
    description:
      'Customize colors, spacing, shadows, fonts and many other settings with global theme object',
  },
  {
    icon: "nodeJs",
    title: 'nodeJs',
    description:
      'Customize colors, spacing, shadows, fonts and many other settings with global theme object',
  },
  {
    icon: "dotNet",
    title: 'dotNet',
    description:
      'Customize colors, spacing, shadows, fonts and many other settings with global theme object',
  },
  {
    icon: "aws",
    title: 'aws',
    description:
      'Customize colors, spacing, shadows, fonts and many other settings with global theme object',
  },
  {
    icon: "azure",
    title: 'azure',
    description: 'Build type safe applications, all components and hooks export types',
  },
  {
    icon: "googleCloud",
    title: 'googleCloud',
    description:
      'Customize colors, spacing, shadows, fonts and many other settings with global theme object',
  }
];

export function FeaturesWithTitle() {
  const { classes } = useStyles();

  const items = features.map((feature) => (
    <div key={feature.icon}>
      <ThemeIcon
        size={64}
        radius="md"
        variant="gradient"
        bg="transparent"
        gradient={{ deg: 133, from: 'blue', to: 'cyan' }}
      >
        <Image src={TexhIcons[feature.icon]} style={{stroke: "red"}} />

      </ThemeIcon>
      {/* <Text size="lg" mt="sm" weight={500}>
        {feature.title}
      </Text>
      <Text color="dimmed" size="sm">
        {feature.description}
      </Text> */}
    </div>
  ));

  return (
    <Container size="lg" className={classes.wrapper} id="ourtechstack">
      <Grid>
        
        <Col span={12} md={5}>
          <Title className={classes.title} order={2}>
            Our <span className={classes.highlight}>Tech Stack</span>
          </Title>
          <Text color="dimmed">
            Whilst we are always learning and experimenting with new tech stach as it becomes available.
            We have expertise on some of the best Frontend and backend technologies for many of our clients.
            We provide consultation to our clients based on the tech stack will be best for their software product.
            Following are some of the tech stack we have acquired expertise on.
          </Text>

          {/* <Button
            variant="gradient"
            gradient={{ deg: 133, from: 'blue', to: 'cyan' }}
            size="lg"
            radius="md"
            mt="xl"
          >
            Get started
          </Button> */}
        </Col>
        <Col span={12} md={7}>
          <SimpleGrid cols={6} spacing={10} breakpoints={[{ maxWidth: 'md', cols: 4 }, { maxWidth: 'sm', cols: 2 }]}>
            {items}
          </SimpleGrid>
        </Col>
      </Grid>
    </Container>
  );
}
