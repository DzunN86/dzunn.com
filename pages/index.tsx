/* eslint-disable react/no-unescaped-entities */
import { PageSEO } from "@/components/SEO";
import MainLayout from "@/layouts/MainLayout";
import { Grid, GridItem, Heading, Text } from "@chakra-ui/react";

export default function Home({ posts }: any) {
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
            a software engineer specialized in Frontend Development creating web
            based application from landing page and company profile, to internal
            dashboard and information system.
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
