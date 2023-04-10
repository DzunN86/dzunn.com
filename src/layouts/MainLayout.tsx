import {
  Box,
  Button,
  Container,
  HStack,
  Heading,
  Image,
  VStack,
  useColorMode,
  LinkProps,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { PropsWithChildren } from "react";

const links = [
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/projects", label: "Projects" },
];

interface NavLinkProps extends LinkProps {
  children?: string | React.ReactNode;
  href: string;
  _hover?: LinkProps;
}

function NavLink({ href, children, _hover, ...props }: LinkProps) {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <NextLink href={href || "/"} passHref>
      <Box
        {...props}
        fontSize="lg"
        fontWeight="medium"
        _after={{
          content: '""',
          position: "absolute",
          bottom: "-5px",
          left: 0,
          width: "100%",
          height: "2.5px",
          backgroundColor: "orange.400",
          transform: isActive ? "scaleX(1)" : "scaleX(0)",
          transformOrigin: "left",
          transition: "transform 0.2s ease",
        }}
        _hover={{
          "&:after": {
            transform: "scaleX(1)",
          },
          ..._hover,
        }}
        position="relative"
      >
        {children}
      </Box>
    </NextLink>
  );
}

type Props = PropsWithChildren<{}>;

export default function MainLayout({ children }: Props) {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box>
      <Container
        display="flex"
        maxW={{ base: "container.sm", md: "container.lg" }}
        minH="100vh"
        px="0"
      >
        <VStack flex={1} alignItems="stretch" w="full">
          <Box as="header" pt="2rem">
            <HStack
              spacing={4}
              alignItems="center"
              justifyContent="space-between"
            >
              <VStack spacing={4} alignItems="flex-start">
                <NextLink href="/" passHref>
                  <HStack spacing={4} alignItems="center">
                    {colorMode === "light" ? (
                      <Image
                        src="/logo.svg"
                        alt="Dzun Nurroin"
                        boxSize="3.5rem"
                      />
                    ) : (
                      <Image
                        src="/logo-light.svg"
                        alt="Dzun Nurroin"
                        boxSize="3.5rem"
                      />
                    )}
                    <Heading as="h1" size="lg" mb="0">
                      Dzun.
                    </Heading>
                  </HStack>
                </NextLink>
                <HStack spacing="2rem" alignItems="flex-start" as="nav">
                  {links.map((link) => (
                    <NavLink key={link.href} href={link.href}>
                      {link.label}
                    </NavLink>
                  ))}
                </HStack>
              </VStack>
              <Button onClick={toggleColorMode} variant="ghost">
                {colorMode === "light" ? (
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    aria-hidden="true"
                    focusable="false"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"></path>
                  </svg>
                ) : (
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    aria-hidden="true"
                    focusable="false"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"></path>
                  </svg>
                )}
              </Button>
            </HStack>
          </Box>
          <VStack
            pt="5rem"
            spacing={16}
            w="full"
            alignItems="stretch"
            as="main"
          >
            {children}
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
}
