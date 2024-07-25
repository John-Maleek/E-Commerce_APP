"use client";
import { Box, Flex, Text } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import React from "react";

const Footer = () => {
  const pathname = usePathname();

  return (
    <Box
      display={pathname === "/auth" ? "none" : "block"}
      bg={"white"}
      px={"60px"}
      pt={"40px"}
      pb={"70px"}
    >
      <Flex color={"grey"} justify={"space-between"}>
        <Text>Edwin Anthony @2024</Text>
        <Text>Designed by EdwinDCreator, Developed by Hafeez Abdulmaleek</Text>
      </Flex>
    </Box>
  );
};

export default Footer;
