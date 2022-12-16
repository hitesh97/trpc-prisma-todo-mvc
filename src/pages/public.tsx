import { Container } from "@mantine/core";
import type { NextPage } from "next";
import { ActionCardsGrid } from "../components/ActionCardsGrid";
import { FeaturesWithCards } from "../components/FeaturesWithCards";
import { FeaturesWithIcons } from "../components/FeaturesWithIcons";
import { FeaturesWithImageIcons } from "../components/FeaturesWithImageIcons";
import { FeaturesWithMontoneIcons } from "../components/FeaturesWithMontoneIcons";
// import Link from "next/link";
import { FeaturesWithTitle } from "../components/FeaturesWithTitle";
import { HeroCarousel } from "../components/HeroCarousel";
import { HeroWithBullets } from "../components/HeroWithBullets";
import { HeroWithText } from "../components/HeroWithText";

const PublicArea: NextPage = () => {
  return (
    <>
      {/*<HeroCarousel />*/}
      <HeroWithBullets />
      <FeaturesWithImageIcons /> 
      <HeroWithText />
      <FeaturesWithTitle />
      {/* <FeaturesWithCards />
      <FeaturesWithIcons />
  <ActionCardsGrid /> 
      <FeaturesWithMontoneIcons /> */}

    </>
  );
};

export default PublicArea;
