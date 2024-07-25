"use client";
import { Box, Flex, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React from "react";

const ProductListCmp = ({ productId }) => {
  const router = useRouter();
  return (
    <Box borderRadius={"16px"} cursor={"pointer"} bg={"white"} w="full">
      <Box
        aspectRatio={1 / 1}
        borderTopRadius={"16px"}
        bg={"lightgray"}
        bgImage={"/sample_product_image.png"}
        bgPosition={"center"}
        bgSize={"contain"}
        bgRepeat={"no-repeat"}
        onClick={() => router.push(`/product/${productId}`)}
      ></Box>
      <Flex alignItems={"center"} padding={"16px"}>
        <Box>
          <Text fontSize={"20px"}>Product name</Text>
          <Text fontSize={"20px"} fontWeight={600}>
            {`$`} amount
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default ProductListCmp;
