import { Flex, Grid, GridItem, HStack, Heading, Text, VStack, useColorModeValue } from "@chakra-ui/react";
import MainLayout from "./MainLayout";
import { dateFormatter } from "@/utils/formatter";

type Props = {
  children: React.ReactNode;
  title: string;
  publishedAt: string;
  readingTime?: string;
};

export default function BlogLayout({ children, title, publishedAt, readingTime }: Props) {
  return (
    <MainLayout>
      <VStack spacing={{ base: 2, md: 3 }} alignItems="stretch" mb={{ base: "2rem", md: "5rem" }}>
        <Text as="h1" fontSize={{ base: "1.8rem", md: "4xl" }} fontWeight="bold" lineHeight="1.3">
          {title}
        </Text>
        <HStack spacing={3} color="gray.500" fontSize={{ base: "sm", md: "md" }} alignItems="center">
          <Text>{dateFormatter(publishedAt)}</Text>
          <Text>&middot;</Text>
          <Text>{readingTime}</Text>
        </HStack>
      </VStack>
      <Grid templateColumns="repeat(12, 1fr)" gap={{ base: 5, md: "2rem", lg: "4rem", xl: "6rem" }} alignItems="flex-start">
        <GridItem colSpan={{ base: 12, lg: 8 }}>{children}</GridItem>
        <GridItem colSpan={{ base: 12, lg: 4 }} h="full">
          <Heading as="h1" size={{ base: "xl", md: "2xl" }} position="sticky" top="1rem" mb="1rem">
            Writing
          </Heading>
        </GridItem>
      </Grid>
    </MainLayout>
  );
}
