import { CtaBand } from "@/components/sections";
import {
  Advantages,
  GetAQuote,
  Hero,
  HowWeDeliver,
  OurRates,
  Statement,
  WhatWeFinance,
  WhoWeAre,
  WhoWeServe,
} from "./_components";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Statement />
      <WhoWeAre />
      <WhatWeFinance />
      <HowWeDeliver />
      <WhoWeServe />
      <OurRates />
      <GetAQuote />
      <Advantages />
      <CtaBand
        title="You Dial, We File."
        body="We are well known for our friendly services and are totally focused on the needs of our clients."
      />
    </>
  );
}
