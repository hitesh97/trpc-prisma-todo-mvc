import { Image, Text, Container, ThemeIcon, Title, SimpleGrid, createStyles, UnstyledButton, Box } from '@mantine/core';
import IMAGES from '../images';

const mainData = {
    "supTitle": "Our services",
    "description": "",
    "data": [
      {
        "image": "frontEnd",
        "title": "Fronend Development",
        "description": "The main objective of front-end development is to ensure that everything a user sees and interacts with on the screen is understandable, intuitive, and responsive. These values are kept in mind from the ground up."
      },
      {
        "image": "backendCloud",
        "title": "Cloud platform development support",
        "description": "We help you to start your first project on market leading cloud platforms or we can migrate from one provider to another, with our in house experts."
      },
      {
        "image": "businessProcess",
        "title": "Cross-Platform Development",
        "description": "We can cater for writing cross-platform applications and frameworks that provide native experience on the UI."
      },
      {
        "image": "softwareSolutions",
        "title": "Turn key technology solutions",
        "description": "We provide some of the existing and open source solutions to your needs, which are very simple and easy to start developing on."
      },
      {
        "image": "technologyAdvisory",
        "title": "Customer service solutions",
        "description": "Provide excellent customer service and fast response times to our clients."
      },
      {
        "image": "testingServices",
        "title": "Software Testing",
        "description": "We provide maual and automated testing to allow our clients to have confidence on the product releases."
      },
      // {
      //   "image": "dataServices",
      //   "title": "Data analytic services",
      //   "description": "Phanpy uses its long nose to shower itself"
      // },
      // {
      //   "image": "architecture",
      //   "title": "Architecture services",
      //   "description": "Phanpy uses its long nose to shower itself"
      // }
    ]
  }

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: 80,
    paddingBottom: 50,
  },

  item: {
    display: 'flex',
    boxShadow: `${theme.shadows.sm} !important`,
  },

  itemIcon: {
    padding: theme.spacing.xs,
    marginRight: theme.spacing.md,
  },
  itemIcon2:{
    padding: theme.spacing.xs,
    marginRight: theme.spacing.md,
  },

  itemTitle: {
    marginBottom: theme.spacing.xs / 2,    
    marginRight: theme.spacing.md,
  },

  supTitle: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 800,
    fontSize: theme.fontSizes.sm,
    color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
    letterSpacing: 0.5,
  },

  title: {
    lineHeight: 1,
    textAlign: 'center',
    marginTop: theme.spacing.xl,
  },

  description: {
    textAlign: 'center',
    marginTop: theme.spacing.xs,
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

interface FeatureImage {
  image: string;
  title: React.ReactNode;
  description: React.ReactNode;
}

interface FeaturesImagesProps {
  supTitle?: React.ReactNode;
  description?: React.ReactNode;
  data?: FeatureImage[];
}

export function FeaturesWithImageIcons({ supTitle = mainData.supTitle, description = mainData.description, data = mainData.data }: FeaturesImagesProps) {
  const { classes } = useStyles();

  const items = data.map((item) => (
    <div className={classes.item} key={item.image} style={{padding: "20px"}}>

        {/* <ThemeIcon variant="light" className={classes.itemIcon} size={60} radius="md">
          <Image src={IMAGES[item.image]} />
        </ThemeIcon> */}
        <ThemeIcon variant="light"  size={64} className={classes.itemIcon2} radius="md" sx={{stroke: "green"}}>
          <Image src={IMAGES[item.image]} style={{stroke: "red"}} />
        </ThemeIcon>


      <div>
        <Text weight={700} size="lg" className={classes.itemTitle}>
          {item.title}
        </Text>
        <Text color="dimmed">{item.description}</Text>
      </div>
    </div>
  ));

  return (
    <Container size={"lg"} className={classes.wrapper}>
      <Text className={classes.supTitle}>{supTitle}</Text>

      <Title className={classes.title} order={2}>
        Your <span className={classes.highlight}>one stop shop</span> for next big SaaS product!
      </Title>

      <Container size={660} p={0}>
        <Text color="dimmed" className={classes.description}>
          {description}
        </Text>
      </Container>

      <SimpleGrid
        cols={3}
        spacing={30}
        breakpoints={[{ maxWidth: 920, cols: 1, spacing: 40 }]}
        style={{ marginTop: 30 }}
      >
        {items}
      </SimpleGrid>
    </Container>
  );
}