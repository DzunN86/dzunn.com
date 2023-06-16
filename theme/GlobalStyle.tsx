import { useColorMode } from "@chakra-ui/react";
import { Global, css } from "@emotion/react";
import React from "react";
import { prismDarkTheme, prismLightTheme } from "./prism";

export const GlobalStyle = ({ children }: { children: React.ReactNode }) => {
  const { colorMode } = useColorMode();

  return (
    <>
      <Global
        styles={css`
          ${colorMode === `light` ? prismLightTheme : prismDarkTheme};
          @font-face {
            font-family: "Hubot Sans";
            src: url("/fonts/Hubot-Sans.woff2") format("woff2 supports variations"), url("/fonts/Hubot-Sans.woff2") format("woff2-variations");
            font-weight: 200 900;
            font-stretch: 75% 125%;
          }
          @keyframes wave {
            0% {
              transform: rotate(0deg);
            }
            10% {
              transform: rotate(14deg);
            } /* The following five values can be played with to make the waving more or less extreme */
            20% {
              transform: rotate(-8deg);
            }
            30% {
              transform: rotate(14deg);
            }
            40% {
              transform: rotate(-4deg);
            }
            50% {
              transform: rotate(10deg);
            }
            60% {
              transform: rotate(0deg);
            } /* Reset for the last half to pause */
          }
        `}
      />
      {children}
    </>
  );
};
