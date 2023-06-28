import { Box, HStack, Heading, Image, Show, VStack, useColorMode } from "@chakra-ui/react";
import NextImage from "next/image";
import NextLink from "next/link";
import NavLink from "./NavLink";
// import useSound from "use-sound";
import { getBlurDataURL } from "@/utils/blurDataURL";

const links = [
  { href: "/me", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/projects", label: "Projects" },
  // { href: "/resume", label: "Resume" },
  { href: "/illustration", label: "Illustration" },
];

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  // const [play] = useSound(
  //   colorMode === "dark"
  //     ? "/static/sounds/public_sounds_switch-on.mp3"
  //     : "/static/sounds/public_sounds_switch-off.mp3"
  // );

  const handleToggleColorMode = () => {
    // play();
    toggleColorMode();
  };

  const genereateColor = (idx: number) => {
    const colors = ["red", "green", "purple", "blue", "pink", "twitter", "orange", "teal", "cyan", "gray"];
    return colors[idx % colors.length] + ".400";
  };
  return (
    <Box
      as="header"
      borderBottom={{
        base: "1px solid",
        md: "none",
      }}
      borderColor={colorMode === "light" ? "gray.200" : "gray.700"}
      pt={{
        base: "1rem",
        md: "2rem",
      }}
      pb="1rem"
      position={{
        base: "sticky",
        md: "relative",
      }}
      top="0"
      bg={{
        base: colorMode === "light" ? "white" : "blackAlpha.900",
        md: "transparent",
      }}
      backdropFilter="blur(10px)"
      zIndex={1000}
    >
      <HStack spacing={4} alignItems="center" justifyContent="space-between" px={{ base: "1rem", md: "2rem" }}>
        <VStack spacing={{ base: 0, md: 6 }} alignItems="flex-start">
          <Box display={{ base: "none", md: "block" }}>
            <NextLink href="/" passHref>
              <HStack spacing={4} alignItems="center">
                <NextImage
                  src={colorMode === "light" ? "/logo.svg" : "/logo-light.svg"}
                  alt="Dzun Nurroin"
                  placeholder="blur"
                  blurDataURL={getBlurDataURL(700, 475)}
                  width={50}
                  height={50}
                  style={{ width: "3.5rem", height: "auto" }}
                />
                <Heading as="h1" size="md" mb="0">
                  Dzun Nurroin
                </Heading>
              </HStack>
            </NextLink>
          </Box>
          <HStack
            spacing={{
              base: "0.8rem",
              md: "2rem",
            }}
            alignItems="flex-start"
            as="nav"
          >
            <Show below="md">
              <NavLink href="/" bgColor="yellow.400">
                Home
              </NavLink>
            </Show>
            {links.map((link, index) => (
              <NavLink key={link.href} href={link.href} bgColor={genereateColor(index)}>
                {link.label}
              </NavLink>
            ))}
          </HStack>
        </VStack>
        <Box
          as="button"
          rounded="lg"
          w={{ base: "2rem", md: "2.5rem" }}
          h={{ base: "2rem", md: "2.5rem" }}
          display="flex"
          alignItems="center"
          justifyContent="center"
          onClick={handleToggleColorMode}
          border="1.5px solid"
          borderColor={colorMode === "light" ? "gray.200" : "gray.700"}
          bg={colorMode === "light" ? "gray.50" : "gray.800"}
          _hover={{
            bg: colorMode === "light" ? "gray.100" : "gray.700",
          }}
        >
          <NextImage src={colorMode === "light" ? "/static/icons/half-moon.png" : "/static/icons/sun.png"} alt="moon" width={17} height={17} />
        </Box>
      </HStack>
    </Box>
  );
}
