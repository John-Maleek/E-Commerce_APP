import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    nav: "var(--font-playfair_display)",
    heading: "var(--font-inter)",
    body: "var(--font-inter)",
  },
  colors: {
    gray: { 0: "#f6f6f8" },
  },
});
