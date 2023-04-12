import { extendTheme } from "@chakra-ui/react";
import { globalStyles } from "./styles";
import { headingStyles } from "./components/heading";

export default extendTheme(globalStyles, headingStyles);
