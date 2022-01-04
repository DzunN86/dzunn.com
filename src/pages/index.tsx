import Hero from "@/components/hero";
import PageTransition from "@/components/PageTransition";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <PageTransition>
      <Hero />
    </PageTransition>
  );
};

export default Home;
