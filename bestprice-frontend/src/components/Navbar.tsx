"use client";
import { Box, Circle, Flex, Heading, Icon } from "@chakra-ui/react";
import { CiSearch } from "react-icons/ci";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import Image from "next/image";
import React from "react";
import { useParams, usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <Box
      display={pathname === "/auth" ? "none" : "block"}
      bg={"white"}
      w="full"
      p={"20px"}
      position={"fixed"}
      top={0}
    >
      <Flex alignItems={"center"} w="full">
        <Flex alignItems={"center"} gap={"6px"}>
          <Image src={"/logo.svg"} alt="logo" width={32} height={32} />
          <Heading fontFamily={"nav"} fontSize={"32px"} fontWeight={400}>
            Summer
          </Heading>
        </Flex>
        <Flex alignItems={"center"} gap={"12px"} ml={"auto"}>
          <CiSearch fontSize={"30px"} />
          <Circle border={"1px solid lightgray"} size={"48px"}>
            <PiShoppingCartSimpleLight fontSize={"30px"} />
          </Circle>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
