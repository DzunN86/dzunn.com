import { Tags } from "@/types";
import { Button, Card, CardBody, Flex, Heading, useColorModeValue } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

export default function CardTags({ tags }: { tags: Tags }) {
  const router = useRouter();
  return (
    <Card shadow="none" rounded="md" overflow="hidden" border="1px solid" borderColor={useColorModeValue("gray.200", "gray.800")} bg={useColorModeValue("white", "blackAlpha.900")}>
      <CardBody>
        <Heading as="h2" size="md" mb="1.5rem">
          Tags
        </Heading>
        <Flex flexWrap="wrap" gap={1}>
          {Object.keys(tags).map((tag: any) => (
            <Button key={tag} size="xs" variant="outline" onClick={() => router.push(`/tags/${tags[tag].slug}`)}>
              {tag} ({tags[tag].count})
            </Button>
          ))}
        </Flex>
      </CardBody>
    </Card>
  );
}
