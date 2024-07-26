"use client";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React from "react";

const ProductListCmp = ({ productInfo }) => {
  const router = useRouter();
  return (
    <Box borderRadius={"16px"} cursor={"pointer"} bg={"white"} w="full">
      <Box
        aspectRatio={1 / 1}
        borderTopRadius={"16px"}
        bg={"lightgray"}
        bgImage={
          `url(${productInfo?.images[0]})` || "/sample_product_image.png"
        }
        bgPosition={"center"}
        bgSize={"cover"}
        bgRepeat={"no-repeat"}
        onClick={() => router.push(`/product/${productInfo?._id}`)}
      ></Box>
      <Flex alignItems={"center"} padding={"16px"}>
        <Box>
          <Text fontSize={"20px"}>{productInfo?.product_name}</Text>
          <Text fontSize={"20px"} fontWeight={600}>
            {`$`} {productInfo?.price}
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default ProductListCmp;
