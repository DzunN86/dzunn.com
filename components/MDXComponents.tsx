import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Alert, Box, Code, Divider, Heading, Image, Link, Table, Tbody, Td, Text, Th, Thead, Tr, useBreakpointValue, useColorMode, useColorModeValue } from "@chakra-ui/react";
import NextLink from "next/link";

const CustomLink = (props: any) => {
  const { colorMode } = useColorMode();
  const color = {
    light: "orange.500",
    dark: "orange.500",
  };

  const href = props.href;
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  if (isInternalLink) {
    return (
      <NextLink href={href} passHref>
        <Link
          as="span"
          color={color[colorMode]}
          {...props}
          _hover={{
            backgroundColor: "orange.500",
            color: "white",
          }}
          style={{
            textDecoration: "underline",
            textDecorationColor: "orange.500",
          }}
          transition="all 0.3s ease-in-out"
        />
      </NextLink>
    );
  }

  return (
    // <Tooltip hasArrow label={props.href} bg="gray.300" color="black" placement="top">
    <Link
      color={color[colorMode]}
      isExternal
      {...props}
      _hover={{
        backgroundColor: "orange.500",
        color: "white",
      }}
      style={{
        textDecoration: "underline",
        textDecorationColor: "orange.500",
      }}
      transition="all 0.3s ease-in-out"
    >
      {props.children} <ExternalLinkIcon mx="2px" />
    </Link>
    // </Tooltip>
  );
};

const Quote = (props: any) => {
  const { colorMode } = useColorMode();
  const bgColor = {
    light: "orange.50",
    dark: "orange.900",
  };

  return (
    <Alert
      mt={4}
      w="98%"
      bg={bgColor[colorMode]}
      variant="left-accent"
      status="warning"
      css={{
        "> *:first-of-type": {
          marginTop: 0,
          marginLeft: 8,
        },
      }}
      {...props}
    />
  );
};

const DocsHeading = (props: any) => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const borderColor = useColorModeValue("gray.200", "gray.700");
  return (
    <Heading
      css={{
        scrollMarginTop: isMobile ? "0.5rem" : "-2rem",
        scrollSnapMargin: isMobile ? "0.5rem" : "-2rem", // Safari
        "&[id]": {
          pointerEvents: "none",
        },
        "&[id]:before": {
          display: "block",
          height: " 6rem",
          marginTop: "-6rem",
          visibility: "hidden",
          content: `""`,
        },
        "&[id]:hover a": { opacity: 1 },
      }}
      {...props}
      mb="1em"
      mt="2em"
      position="relative"
      pointerEvents="auto"
      borderBottomWidth="1px"
      borderBottomColor={borderColor}
      paddingBottom="0.3rem"
    >
      <Box pointerEvents="auto" display="flex" alignItems="center" gap={3} className="heading-group">
        {props.children}
        {props.id && (
          <Box
            aria-label="anchor"
            as="a"
            color="blue.500"
            fontWeight="normal"
            outline="none"
            _focus={{
              opacity: 1,
              boxShadow: "outline",
            }}
            opacity="0"
            fontSize="0.6em"
            href={`#${props.id}`}
          >
            🔗
          </Box>
        )}
      </Box>
    </Heading>
  );
};

const Hr = () => {
  const { colorMode } = useColorMode();
  const borderColor = {
    light: "gray.200",
    dark: "gray.600",
  };

  return <Divider borderColor={borderColor[colorMode]} my={4} w="100%" />;
};

const MDXComponents = {
  h1: (props: any) => <DocsHeading as="h1" size="xl" fontWeight="bold" {...props} />,
  h2: (props: any) => <DocsHeading as="h2" size="lg" fontWeight="bold" {...props} />,
  h3: (props: any) => <DocsHeading as="h3" size="md" fontWeight="bold" {...props} />,
  h4: (props: any) => <DocsHeading as="h4" size="sm" fontWeight="bold" {...props} />,
  h5: (props: any) => <DocsHeading as="h5" size="sm" fontWeight="bold" {...props} />,
  h6: (props: any) => <DocsHeading as="h6" size="xs" fontWeight="bold" {...props} />,
  code: (props: any) => <Code colorScheme="orange" fontSize="0.84em" {...props} />,
  br: (props: any) => <Box height="24px" {...props} />,
  hr: Hr,
  // pre: (props: any) => <Box my="2em" rounded="sm" borderWidth="1px" borderColor="gray.200" {...props} />,
  a: (props: any) => <CustomLink {...props} />,
  p: (props: any) => <Text as="p" mt={0} lineHeight="tall" {...props} mb="1em" />,
  ul: (props: any) => <Box as="ul" pt={2} pl={4} ml={2} {...props} />,
  ol: (props: any) => <Box as="ol" pt={2} pl={4} ml={2} {...props} />,
  li: (props: any) => (
    <Box
      as="li"
      pb={2}
      {...props}
      css={{
        "::marker": {
          color: "#DD6B20",
          fontSize: "1.1rem",
          lineHeight: 1,
        },
        paddingLeft: "0.5rem",
      }}
    />
  ),
  blockquote: Quote,
  table: (props: any) => <Table {...props} />,
  thead: (props: any) => <Thead {...props} />,
  th: (props: any) => <Th {...props} />,
  tbody: (props: any) => <Tbody {...props} />,
  tr: (props: any) => <Tr {...props} />,
  td: (props: any) => <Td {...props} />,
  img: (props: any) => <Image {...props} alt="blog image" rounded="lg" />,
};

export { CustomLink };
export default MDXComponents;
