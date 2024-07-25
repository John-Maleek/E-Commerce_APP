"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./theme";
import { fonts } from "./fonts";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --font-inter: ${fonts.inter.style.fontFamily};
            --font-playfair_display: ${fonts.playfair_display.style.fontFamily};
          }
        `}
      </style>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </>
  );
}
