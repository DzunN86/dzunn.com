import { ThemeConfig, extendTheme } from "@chakra-ui/react";
import { globalStyles } from "./styles";
import { headingStyles } from "./components/heading";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

export default extendTheme({ config }, globalStyles, headingStyles);