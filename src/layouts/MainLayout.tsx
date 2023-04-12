import Navbar from "@/components/Navbar";
import { Box, Container, VStack } from "@chakra-ui/react";
import { PropsWithChildren } from "react";
import PageTransition from "../components/PageTransition";

type Props = PropsWithChildren<{}>;

export default function MainLayout({ children }: Props) {
  return (
    <Box>
      <Container
        display="flex"
        maxW={{ base: "container.sm", md: "container.lg" }}
        minH="100vh"
        px="0"
      >
        <VStack flex={1} alignItems="stretch" w="full">
          <Navbar />
          <VStack
            pt={{ base: "2rem", md: "5rem" }}
            spacing={16}
            w="full"
            alignItems="stretch"
            as="main"
            px={{ base: "1rem", md: "2rem" }}
          >
            <PageTransition>{children}</PageTransition>
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
}
