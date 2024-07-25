import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair_display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair_display",
});

export const fonts = {
  inter,
  playfair_display,
};
