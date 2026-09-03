import type { Metadata } from "next";
import { CtaBand } from "@/components/sections";
import {
  AboutHero,
  HowWeWork,
  OurMission,
  TrackRecord,
  WelcomeFromGm,
  WhatMakesUsDifferent,
} from "./_components";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "An established premium finance company with an excellent reputation across the insurance " +
    "financing market, serving general agents and producers since 1999.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <WelcomeFromGm />
      <TrackRecord />
      <WhatMakesUsDifferent />
      <HowWeWork />
      <OurMission />
      <CtaBand
        title="You Dial, We File."
        body="We provide our services anywhere in the United States of America."
      />
    </>
  );
}
