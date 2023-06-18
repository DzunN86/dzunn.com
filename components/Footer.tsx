import { Box, HStack, Image, Link, Text, VStack, useColorModeValue } from "@chakra-ui/react";
import React from "react";

export default function Footer() {
  return (
    <Box as="footer" pb="3rem" px={{ base: "1rem", md: "2rem" }} pt={{ base: "6rem", md: "12rem" }}>
      <VStack spacing={4} justifyContent="center" alignItems="center">
        <Text fontSize="sm">Made by Dzun Nurroin</Text>
        <HStack spacing={{ base: 1, md: 6 }} alignItems="center" justifyContent="space-between">
          <Text fontSize="sm">Build with</Text>
          <Link href="https://nextjs.org" isExternal>
            <HStack spacing={2} alignItems="center">
              <Image src={useColorModeValue("/nextjs-dark.png", "/nextjs.png")} alt="Github" maxW="1.2rem" display={{ base: "none", md: "block" }} />
              <Text fontSize="sm">Next.js</Text>
            </HStack>
          </Link>
          <Link href="https://chakra-ui.com/" isExternal>
            <HStack spacing={2} alignItems="center">
              <Image src="/chakra-ui.svg" alt="Github" maxW="1.2rem" display={{ base: "none", md: "block" }} />
              <Text fontSize="sm">Chakra UI</Text>
            </HStack>
          </Link>
          <Link href="https://github.com/DzunN86" isExternal>
            <HStack spacing={2} alignItems="center">
              <Image src="/github.png" alt="Github" maxW="1.3rem" display={{ base: "none", md: "block" }} />
              <Text fontSize="sm">Github</Text>
            </HStack>
          </Link>
          <Link href="https://vercel.com" isExternal>
            <HStack spacing={2} alignItems="center">
              <Image src={useColorModeValue("/vercel-dark.svg", "/vercel.svg")} alt="Github" maxW="1.14rem" display={{ base: "none", md: "block" }} />
              <Text fontSize="sm">Vercel</Text>
            </HStack>
          </Link>
        </HStack>
      </VStack>
    </Box>
  );
}
