/* eslint-disable react/no-unescaped-entities */
import { PageSEO } from "@/components/SEO";
import MainLayout from "@/layouts/MainLayout";
import { getBlurDataURL } from "@/utils/blurDataURL";
import NextImage from "next/image";
import {
  Box,
  Grid,
  GridItem,
  HStack,
  Heading,
  Show,
  Text,
  useColorMode,
} from "@chakra-ui/react";

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
          <HStack spacing={5}>
            <Show below="md">
              <NextImage
                src={colorMode === "light" ? "/logo.svg" : "/logo-light.svg"}
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
          <Text mt="1.5rem" fontSize="xl">
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
