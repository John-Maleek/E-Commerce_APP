"use client";
import { fonts } from "./fonts";
import { Providers } from "./providers";
import "./globals.css";
import Navbar from "../components/Navbar";
import { Box } from "@chakra-ui/react";
import Footer from "../components/Footer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient();

  return (
    <html lang="en">
      <body>
        <QueryClientProvider client={queryClient}>
          <Providers>
            <Navbar />
            <Box mt={"100px"}>{children}</Box>
            <Footer />
          </Providers>
        </QueryClientProvider>
      </body>
    </html>
  );
}
