/* eslint-disable react/no-unescaped-entities */
import HeroImage from "@/components/HeroImage";
import { PageSEO } from "@/components/SEO";
import MainLayout from "@/layouts/MainLayout";
import { getBlurDataURL } from "@/utils/blurDataURL";
import { Grid, GridItem, HStack, Heading, Show, Text, useColorModeValue } from "@chakra-ui/react";
import NextImage from "next/image";

export default function Home({ posts }: any) {
  return (
    <MainLayout>
      <PageSEO title="Dzun Nurroin" description="Dzun Nurroin's personal blog" />
      <Grid templateColumns="repeat(12, 1fr)" gap={{ base: 5, md: "2rem" }} alignItems="center">
        <GridItem colSpan={{ base: 12, md: 7 }}>
          <HStack spacing={5}>
            <Show below="md">
              <NextImage
                src={useColorModeValue("/logo.svg", "/logo-light.svg")}
                alt="Dzun Nurroin"
                placeholder="blur"
                blurDataURL={getBlurDataURL(700, 475)}
                width={50}
                height={50}
                style={{ width: "3.5rem", height: "auto" }}
              />
            </Show>
            <Heading as="h1" size="2xl">
              Hey, I'm Dzun!
            </Heading>
          </HStack>
          <Text mt="1.5rem" fontSize="lg">
            Likes Cats 😸 but doesn't hate 🐼
          </Text>
          <Text mt="1.5rem" fontSize={{ base: "md", md: "xl" }}>
            a Software Engineer specialized in Frontend Development creating web based application from landing page and company profile, to internal dashboard and information system.
          </Text>
        </GridItem>
        <GridItem colSpan={{ base: 12, md: 5 }} display={{ base: "none", lg: "block" }}>
          <HeroImage />
        </GridItem>
      </Grid>
    </MainLayout>
  );
}
