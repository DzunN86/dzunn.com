import { BlogItemProps } from "@/types";
import { dateFormatter } from "@/utils/formatter";
import { HStack, Heading, Text, useBreakpointValue } from "@chakra-ui/react";
import Link from "next/link";
import { format } from "timeago.js";

export default function BlogItem({ post }: BlogItemProps) {
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <Link key={post.title} href={`/blog/${post.slug}`} passHref>
      <HStack spacing="2rem" alignItems="flex-start" justifyContent="space-between" role="group">
        <Heading
          fontSize="1.1rem"
          fontWeight="semibold"
          position="relative"
          // _after={{
          //   content: '""',
          //   position: "absolute",
          //   bottom: "0",
          //   zIndex: -1,
          //   left: 0,
          //   width: "100%",
          //   height: "2px",
          //   backgroundColor: "green.400",
          //   transform: "scaleX(0)",
          //   transformOrigin: "left",
          //   transition: "transform 0.3s ease",
          // }}
          _groupHover={{
            // "&:after": {
            //   transform: "scaleX(1)",
            // },
            textDecoration: "underline",
            textDecorationThickness: "2px",
            textDecorationColor: "green.400",
          }}
        >
          {post.title}
        </Heading>
        <Text fontSize="sm" whiteSpace="nowrap" color="green.400">
          {isMobile ? format(post.publishedAt, "en_US") : dateFormatter(post.publishedAt)}
        </Text>
      </HStack>
    </Link>
  );
}
