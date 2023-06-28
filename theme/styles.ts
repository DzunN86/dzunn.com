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
        bg: mode("gray.50", "blackAlpha.900")(props),
        fontFamily: "Hubot Sans",
      },
      html: {
        fontFamily: "Hubot Sans",
      },
    }),
  },
};
