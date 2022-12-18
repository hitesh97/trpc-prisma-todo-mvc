import { useRef, useState } from "react";
import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { createStyles, Image, useMantineTheme, ThemeIcon, Container } from '@mantine/core';
import IMAGES from '../images/clients';
import Autoplay from 'embla-carousel-autoplay';

const useStyles = createStyles((theme) => ({
  card: {
    height: 440,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  titleContainer: {
    marginBottom: '50px',
  },
  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    color: theme.white,
    lineHeight: 1.2,
    fontSize: 32,
    marginTop: theme.spacing.xs,
  },

  category: {
    color: theme.white,
    opacity: 0.7,
    fontWeight: 700,
    textTransform: 'uppercase',
  },
}));

interface CardProps {
  image: string;
}


const data = [
  {
    image:
      'oneE',
  },
  {
    image:
      'bmigroup',
  },
  {
    image:
      'britInsurance',
  },
  {
    image:
      'bskyb',
  },
  {
    image:
      'haysRecruitment',
  },
  {
    image:
      'mclaren',
  },{
    image:
      'merrillLynch',
  },{
    image:
      'reedExhibitions',
  },{
    image:
      'samsung',
  },{
    image:
      'siemens',
  }
];

function Card({ image }: CardProps) {
  const { classes } = useStyles();

  return (
    <ThemeIcon variant="light"  size={64} radius="md" sx={{stroke: "green", backgroundColor:"transparent"}}>
      <Image src={IMAGES[image]} style={{stroke: "red"}}/></ThemeIcon>
  );
}

export function ClientsCarousel() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  const slides = data.map((item) => (
    <Carousel.Slide key={item.image}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <Container size="lg" py="xl">
    <Carousel
      breakpoints={[{ maxWidth: 'sm', slideSize: '100%', slideGap: 2 }]}
      slideGap="xl"
      align="start"
      slidesToScroll={mobile ? 2 : 3}
      loop
      slideSize="20%"
      withControls={false}
      withIndicators={false}
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={ autoplay.current.reset}
    >
      {slides}
    </Carousel></Container>
  );
}
