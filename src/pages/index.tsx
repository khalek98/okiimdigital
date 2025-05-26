import { FC } from "react";
import Head from "next/head";

import {
  About,
  CTA,
  Hero,
  Metrics,
  Solutions,
  WhatWeDo,
  WhyChooseUs,
} from "@/sections";
import MainLayout from "@/layouts/MainLayout";

const Home: FC = () => {
  return (
    <>
      <Head>
        <title>Okiimdigital Ltd</title>
      </Head>

      <MainLayout>
        <Hero />
        <About />
        <Metrics />
        <WhatWeDo />
        <WhyChooseUs />
        {/* <Solutions /> */}
        <CTA />
      </MainLayout>
    </>
  );
};

export default Home;
