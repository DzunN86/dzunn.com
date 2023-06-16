import Navbar from "@/components/Navbar";
import { Box, Container, Image, VStack } from "@chakra-ui/react";
import { PropsWithChildren } from "react";
import PageTransition from "@/components/PageTransition";
import Footer from "./Footer";

type Props = PropsWithChildren<{}>;

export default function MainLayout({ children }: Props) {
  return (
    <Box position="relative">
      <Box position="absolute" top="-300" left="0">
        <Image src="/bg-gradient.avif" alt="Background Gradient" w="full" h="full" objectFit="cover" />
      </Box>
      <Container display="flex" flexDirection="column" maxW={{ base: "container.sm", md: "container.xl" }} minH="100vh" px="0" position="relative">
        <VStack flex={1} alignItems="stretch" w="full">
          <Navbar />
          <VStack pt={{ base: "2rem", md: "5rem" }} spacing={16} w="full" alignItems="stretch" as="main" px={{ base: "1rem", md: "2rem" }}>
            <PageTransition>{children}</PageTransition>
          </VStack>
        </VStack>
        <Footer />
      </Container>
    </Box>
  );
}
