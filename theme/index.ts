import { ThemeConfig, extendTheme } from "@chakra-ui/react";
import { globalStyles } from "./styles";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: true,
  cssVarPrefix: "hifumi",
};

export default extendTheme({ config }, globalStyles);
