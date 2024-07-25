import { Box, Flex } from "@chakra-ui/react";
import React from "react";

const ProductDetails = () => {
  return (
    <main>
      <Flex gap={"20px"} justify={"center"}>
        <Box w="60%" maxW={"700px"}>
          <Box aspectRatio={1 / 1} borderRadius={"16px"} bg={"gray"}></Box>
          <Flex gap={"12px"} mt={"16px"}>
            <Box boxSize={"93px"} borderRadius={"16px"} bg={"gray"}></Box>
            <Box boxSize={"93px"} borderRadius={"16px"} bg={"gray"}></Box>
            <Box boxSize={"93px"} borderRadius={"16px"} bg={"gray"}></Box>
            <Box boxSize={"93px"} borderRadius={"16px"} bg={"gray"}></Box>
            <Box boxSize={"93px"} borderRadius={"16px"} bg={"gray"}></Box>
            <Box boxSize={"93px"} borderRadius={"16px"} bg={"gray"}></Box>
          </Flex>
        </Box>
        <Box bg={"white"} borderRadius={"16px"} maxW={"430px"} w="40%"></Box>
      </Flex>
    </main>
  );
};

export default ProductDetails;
