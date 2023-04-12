import { useRouter } from "next/router";
import NextLink from "next/link";
import { Box, LinkProps } from "@chakra-ui/react";

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
        fontSize={{ base: "small", md: "md" }}
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

export default NavLink;
