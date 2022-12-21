import { useRef, useState } from "react";
import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import {
  createStyles,
  Image,
  useMantineTheme,
  ThemeIcon,
  Container,
  Title,
} from "@mantine/core";
import IMAGES from "../images/clients";
import Autoplay from "embla-carousel-autoplay";
import Autoheight from "embla-carousel-auto-height";

const useStyles = createStyles((theme) => ({
  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 36,
    fontWeight: 900,
    lineHeight: 1.3,
    marginBottom: theme.spacing.md,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
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

interface CardProps {
  image: string;
}

const data = [
  {
    image: "oneE",
  },
  {
    image: "bmigroup",
  },
  {
    image: "britInsurance",
  },
  {
    image: "bskyb",
  },
  {
    image: "haysRecruitment",
  },
  {
    image: "mclaren",
  },
  {
    image: "merrillLynch",
  },
  {
    image: "reedExhibitions",
  },
  {
    image: "samsung",
  },
  {
    image: "siemens",
  },
];

function Card({ image }: CardProps) {
  return (
    <ThemeIcon
      variant="light"
      size={64}
      radius="md"
      sx={{ stroke: "green", backgroundColor: "transparent" }}
    >
      <Image src={IMAGES[image]} style={{ stroke: "red" }} />
    </ThemeIcon>
  );
}

export function ClientsCarousel() {
  const { classes } = useStyles();

  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  const autoheight = useRef(Autoheight({ destroyHeight: "auto" }));
  const slides = data.map((item) => (
    <Carousel.Slide key={item.image}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <Container size="lg" py={2 * theme.spacing.xl}>
      <Title className={classes.title}>Our <span className={classes.highlight}>Clients</span></Title>
      <Carousel
        breakpoints={[{ maxWidth: "sm", slideSize: "50%" }]}
        slideGap="sm"
        align="start"
        slidesToScroll={mobile ? 1 : 1}
        loop
        slideSize="20%"
        withControls={false}
        withIndicators={false}
        plugins={[autoplay.current, autoheight.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
      >
        {slides}
      </Carousel>
    </Container>
  );
}
