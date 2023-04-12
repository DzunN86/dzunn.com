import { mode } from "@chakra-ui/theme-tools";

export const globalStyles = {
  colors: {
    gray: {
      700: "#1f2733",
    },
  },
  styles: {
    global: (props: any) => ({
      body: {
        bg: mode("white", "gray.900")(props),
        fontFamily: "Inter",
      },
      html: {
        fontFamily: "Inter",
      },
    }),
  },
};
