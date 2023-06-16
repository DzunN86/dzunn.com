import { HStack, StackProps, Text, useBreakpointValue, useColorModeValue as mode, Box } from "@chakra-ui/react";
import { css } from "@emotion/react";

const status = {
  emoji: "😉",
  text: "Hi There",
};

const StatusIndicator = () => {
  const isMobile = useBreakpointValue({ base: true, lg: false });

  let stackStyles: StackProps;

  if (isMobile) {
    stackStyles = {
      width: "fit-content",
      shadow: "lg",
      spacing: 3,
    };
  } else {
    stackStyles = {
      width: 10,
      shadow: "none",
      spacing: 0,
    };
  }

  return (
    <HStack
      _groupHover={{
        width: "10rem",
        shadow: "xl",
      }}
      position="absolute"
      overflow="hidden"
      bottom={0}
      marginLeft="auto"
      borderWidth={1}
      borderColor={mode("gray.300", "gray.600")}
      borderStyle="solid"
      height={10}
      alignItems="center"
      justifyContent="center"
      // bg={mode("white", "gray.800")}
      bgGradient={mode("linear(to-br, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.2))", "linear(to-br, rgba(26, 32, 44, 0.5), rgba(26, 32, 44, 0.2))")}
      backdropFilter="blur(10px)"
      rounded="3xl"
      px={2}
      {...stackStyles}
      transition="all 0.3s ease-in-out"
    >
      <Text
        _groupHover={{
          animation: "wave 1.5s ease-in-out infinite",
        }}
      >
        {status.emoji}
      </Text>
      <Text
        isTruncated
        maxWidth="full"
        transition="all 0.7s ease-in-out"
        opacity={0}
        _groupHover={{
          opacity: 1,
          marginLeft: 3,
        }}
        sx={{
          "@media(hover: none)": {
            opacity: 1,
            width: "fit-content",
            marginLeft: 3,
          },
        }}
      >
        {status.text}
        <Box as="span" ms={2} aria-label="wave" role="img" animation="wave 1.5s ease-in-out infinite" display="inline-block">
          👋
        </Box>
      </Text>
    </HStack>
  );
};

export default StatusIndicator;
