import { createStyles, Title, SimpleGrid, Text, Button, ThemeIcon, Grid, Col, Container, Image } from '@mantine/core';
import { IconReceiptOff, IconFlame, IconCircleDotted, IconFileCode } from '@tabler/icons';
import { GrReactjs, GrHtml5 } from 'react-icons/gr';
import {SiTypescript, SiJavascript, SiCsswizardry} from 'react-icons/si'
import {FaAws} from 'react-icons/fa'
import {DiNodejs} from 'react-icons/di'
import TexhIcons from "../images/tech";


const useStyles = createStyles((theme) => ({
  wrapper: {
    padding: `${theme.spacing.xl}px ${theme.spacing.xl}px`,
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 36,
    fontWeight: 900,
    lineHeight: 1.1,
    marginBottom: theme.spacing.md,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },
}));

const features = [
  {
    icon: "reactjs",
    title: 'Free and open source',
    description: 'All packages are published under MIT license, you can use Mantine in any project',
  },

  {
    icon: "typeScript",
    title: 'No annoying focus ring',
    description:
      'With new :focus-visible selector focus ring will appear only when user navigates with keyboard',
  },
  {
    icon: "javaScript",
    title: 'Flexible',
    description:
      'Customize colors, spacing, shadows, fonts and many other settings with global theme object',
  },
  {
    icon: "html5",
    title: 'Flexible',
    description:
      'Customize colors, spacing, shadows, fonts and many other settings with global theme object',
  },
  {
    icon: "css3",
    title: 'Flexible',
    description:
      'Customize colors, spacing, shadows, fonts and many other settings with global theme object',
  },
  {
    icon: "gatsbyJs",
    title: 'Flexible',
    description:
      'Customize colors, spacing, shadows, fonts and many other settings with global theme object',
  },
  
  {
    icon: "nextjs",
    title: 'Flexible',
    description:
      'Customize colors, spacing, shadows, fonts and many other settings with global theme object',
  },
  {
    icon: "nodeJs",
    title: 'Flexible',
    description:
      'Customize colors, spacing, shadows, fonts and many other settings with global theme object',
  },
  {
    icon: "dotNet",
    title: 'Flexible',
    description:
      'Customize colors, spacing, shadows, fonts and many other settings with global theme object',
  },
  {
    icon: "wordpress",
    title: 'Flexible',
    description:
      'Customize colors, spacing, shadows, fonts and many other settings with global theme object',
  },
  {
    icon: "aws",
    title: 'Flexible',
    description:
      'Customize colors, spacing, shadows, fonts and many other settings with global theme object',
  },
  {
    icon: "azure",
    title: 'TypeScript based',
    description: 'Build type safe applications, all components and hooks export types',
  },
  {
    icon: "googleCloud",
    title: 'Flexible',
    description:
      'Customize colors, spacing, shadows, fonts and many other settings with global theme object',
  }
];

export function FeaturesWithTitle() {
  const { classes } = useStyles();

  const items = features.map((feature) => (
    <div key={feature.title}>
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
    <Container size="lg" className={classes.wrapper}>
      <Grid gutter={80}>
        
        <Col span={12} md={5}>
          <Title className={classes.title} order={2}>
            Our Tech Stack
          </Title>
          <Text color="dimmed">
            We are always learning and experimenting with new tech stach as it becomes available.
            We suggest and provide consultation to our clients based on which tech stack will be best for their software product.
            Following are some of the tech stack we have acquired knowledge and expertise on.
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
