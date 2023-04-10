/* eslint-disable react/no-unescaped-entities */
import MainLayout from "@/layouts/MainLayout";
import {
  Box,
  Button,
  Container,
  HStack,
  Heading,
  Image,
  VStack,
  useColorMode,
  LinkProps,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
export default function Home() {
  return (
    <MainLayout>
      <Heading as="h1" size="2xl">
        Hey, I'm Dzun!
      </Heading>
    </MainLayout>
  );
}
