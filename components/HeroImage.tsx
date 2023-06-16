import { AspectRatio, Box, Flex } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import StatusIndicator from "./StatusIndicator";
import { getBlurDataURL } from "@/utils/blurDataURL";

export default function HeroImage() {
  return (
    <Flex justifyContent="flex-end" alignItems="center" position="relative">
      <Flex position="relative" pb={4} justifyContent="center" role="group">
        <AspectRatio flexShrink={0} ratio={1} w="18rem" h="18rem" as="figure">
          <Box rounded="full" overflow="hidden">
            <Image alt="Dzun" priority src="/medium-avatar-1.jpg" width={700} height={700} placeholder="blur" blurDataURL={getBlurDataURL(700, 700)} />
          </Box>
        </AspectRatio>
        <StatusIndicator />
      </Flex>
    </Flex>
  );
}
