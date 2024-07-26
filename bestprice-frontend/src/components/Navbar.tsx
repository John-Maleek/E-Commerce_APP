"use client";
import { Box, Circle, Flex, Heading, Icon } from "@chakra-ui/react";
import { CiSearch } from "react-icons/ci";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import Image from "next/image";
import React from "react";
import { redirect, usePathname } from "next/navigation";
import ButtonCmp from "./ButtonCmp";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/slices/authSlice";

const Navbar = () => {
  const pathname = usePathname();
  const dispatch = useDispatch();

  const { cart } = useSelector((state: any) => state.cart);

  return (
    <Box
      display={pathname === "/auth" ? "none" : "block"}
      bg={"white"}
      w="full"
      p={"20px"}
      position={"fixed"}
      top={0}
      zIndex={2}
    >
      <Flex alignItems={"center"} w="full">
        <Flex alignItems={"center"} gap={"6px"}>
          <Image src={"/logo.svg"} alt="logo" width={32} height={32} />
          <Heading fontFamily={"nav"} fontSize={"32px"} fontWeight={400}>
            Bestprice
          </Heading>
        </Flex>
        <Flex alignItems={"center"} gap={"12px"} ml={"auto"}>
          <CiSearch fontSize={"30px"} />
          <Circle
            border={"1px solid lightgray"}
            size={"48px"}
            position={"relative"}
          >
            <PiShoppingCartSimpleLight fontSize={"30px"} />
            {cart > 0 && (
              <Circle
                color={"white"}
                fontSize={"10px"}
                fontWeight={500}
                size={"16px"}
                bg={"black"}
                position={"absolute"}
                top={0}
                right={0}
              >
                {cart}
              </Circle>
            )}
          </Circle>
          <ButtonCmp
            label="Logout"
            onClick={() => {
              localStorage.clear();
              dispatch(logout());
              redirect("/auth");
            }}
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
