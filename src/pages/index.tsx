/* eslint-disable react/no-unescaped-entities */
import PageTransition from "@/components/PageTransition";
import MainLayout from "@/layouts/MainLayout";
import { Heading } from "@chakra-ui/react";
export default function Home() {
  return (
    <MainLayout>
      <Heading as="h1" size="2xl">
        Hey, I'm Dzun!
      </Heading>
    </MainLayout>
  );
}
