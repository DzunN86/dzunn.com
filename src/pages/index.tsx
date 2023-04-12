/* eslint-disable react/no-unescaped-entities */
import MainLayout from "@/layouts/MainLayout";
import { getAllFilesFrontMatter } from "@/libs/mdx";
import { Box, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter("blog");

  return { props: { posts } };
}

export default function Home({ posts }: any) {
  return (
    <MainLayout>
      <Grid templateColumns="repeat(12, 1fr)" gap={6} alignItems="center">
        <GridItem colSpan={{ base: 12, md: 7 }}>
          <Heading as="h1" size="2xl">
            Hey, I'm Dzun!
          </Heading>
          <Text mt="2rem" fontSize="xl">
            Likes Cats 😸 but doesn't hate 🐼
            <br />
            <br />
            I'm a software developer specialized in Frontend Development. I love
            to build things that live on the internet, whether that be websites,
            applications, or anything in between.
          </Text>
        </GridItem>
        <GridItem colSpan={{ base: 12, md: 5 }}>
          <Image
            src="/static/ram.png"
            alt="Dzun Nurroin"
            width={500}
            height={500}
            priority
          />
        </GridItem>
      </Grid>
      <Box h="100vh" />
    </MainLayout>
  );
}
