import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const headingStyles = {
  components: {
    Heading: {
      baseStyle: {
        fontFamily: inter.style.fontFamily,
      },
    },
  },
};
