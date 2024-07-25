import Image from "next/image";
import styles from "./page.module.css";
import { Box, Center, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import ProductListCmp from "../components/ProductListCmp";
import ButtonCmp from "../components/ButtonCmp";

export default function Home() {
  return (
    <main>
      <Box
        bg={"gray"}
        bgImage={"/store_hero-image.png"}
        bgSize={"cover"}
        bgRepeat={"no-repeat"}
        bgPosition={"center"}
        h={"670px"}
        w="full"
        borderRadius={"20px"}
      >
        <Center
          textAlign={"center"}
          flexDirection={"column"}
          h={"100%"}
          w="full"
        >
          <Heading color={"white"} fontSize={"56px"} fontWeight={600}>
            Shop from{" "}
            <span
              style={{
                fontWeight: 400,
                fontFamily: "nav",
                fontStyle: "italic",
              }}
            >
              summmer
            </span>
          </Heading>
          <Text fontWeight={400} color={"white"} fontSize={"20px"}>
            Get the best outfit and items to help bring your summer
            <br /> experience to life
          </Text>
          <ButtonCmp
            label="Start shopping"
            height={"52px"}
            width={"178px"}
            mt={"16px"}
          />
        </Center>
      </Box>
      <section>
        <Flex w="full" mt={"50px"}>
          <Text fontSize={"24px"} fontWeight={500}>
            Available products: (102)
          </Text>
        </Flex>
        <SimpleGrid gridGap={"16px"} minChildWidth={"317px"} mt={"32px"}>
          {[1, 2, 3, 4, 5].map((i) => (
            <ProductListCmp key={i} productId={i} />
          ))}
        </SimpleGrid>
      </section>
    </main>
  );
}
