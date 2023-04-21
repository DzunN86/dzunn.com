/* eslint-disable react/no-unescaped-entities */
import { PageSEO } from "@/components/SEO";
import MainLayout from "@/layouts/MainLayout";
import { getAllFilesFrontMatter } from "@/libs/mdx";
import {
  Box,
  Grid,
  GridItem,
  Heading,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter("blog");

  return { props: { posts } };
}

export default function Home({ posts }: any) {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <MainLayout>
      <PageSEO
        title="Dzun Nurroin"
        description="Dzun Nurroin's personal blog"
      />
      <Grid templateColumns="repeat(12, 1fr)" gap={6} alignItems="center">
        <GridItem colSpan={{ base: 12, md: 9 }}>
          <Heading as="h1" size="2xl">
            Hey, I'm Dzun!
          </Heading>
          <Text mt="2rem" fontSize="lg" fontStyle="italic">
            Likes Cats 😸 but doesn't hate 🐼
          </Text>
          <Text mt="2rem" fontSize="xl">
            I'm a software developer specialized in Frontend Development. I love
            to build things that live on the internet, whether that be websites,
            applications, or anything in between.
          </Text>
        </GridItem>
        {/* <GridItem colSpan={{ base: 12, md: 4 }}>
          <Image
            src="/static/ram.png"
            alt="Dzun Nurroin"
            width={500}
            height={500}
            priority
          />
        </GridItem> */}
      </Grid>
    </MainLayout>
  );
}
