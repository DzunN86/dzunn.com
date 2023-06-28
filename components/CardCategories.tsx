import { Categories } from "@/types";
import { Card, CardBody, HStack, Heading, Text, VStack, useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

export default function CardCategories({ categories }: { categories: Categories }) {
  const hoverStyles = useColorModeValue("gray.100", "gray.900");
  return (
    <Card mb="1.5rem" shadow="none" rounded="md" overflow="hidden" border="1px solid" borderColor={useColorModeValue("gray.200", "gray.800")} bg={useColorModeValue("white", "blackAlpha.900")}>
      <CardBody>
        <Heading as="h2" size="md" mb="1.5rem">
          Categories
        </Heading>

        <VStack spacing={1} alignItems="stretch">
          {Object.keys(categories).map((category: any) => (
            <Link key={category} href={`/categorie/${categories[category].slug}`} passHref>
              <HStack
                spacing="1rem"
                alignItems="center"
                justifyContent="space-between"
                px={2}
                rounded="md"
                _hover={{
                  backgroundColor: hoverStyles,
                }}
                role="group"
              >
                <Text fontSize="md" fontWeight="semibold" _groupHover={{ color: "green.400" }}>
                  {category}
                </Text>
                <Text fontSize="sm" whiteSpace="nowrap" color="green.400">
                  {categories[category].count}
                </Text>
              </HStack>
            </Link>
          ))}
        </VStack>
      </CardBody>
    </Card>
  );
}
