"use client";
import Image from "next/image";
import styles from "./page.module.css";
import {
  Box,
  Center,
  Flex,
  Heading,
  SimpleGrid,
  Spinner,
  Text,
} from "@chakra-ui/react";
import ProductListCmp from "../components/ProductListCmp";
import ButtonCmp from "../components/ButtonCmp";
import { useDispatch, useSelector } from "react-redux";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import { useGetProducts } from "../api/products";
import { useGetCart } from "../api/cart";
import { addToCart } from "../store/slices/cartSlice";

export default function Home() {
  const { isLoggedIn, user } = useSelector((state: any) => state.auth);
  useEffect(() => {
    if (!isLoggedIn) {
      redirect("/auth");
    }
  }, [isLoggedIn]);

  const element = document.getElementById("product-section");

  const { data: products, isLoading } = useGetProducts();
  const { data: cart } = useGetCart({ userId: user?.userId });
  const dispatch = useDispatch();
  useEffect(() => {
    if (cart) {
      dispatch(addToCart(cart?.products?.length));
    }
  }, [cart, dispatch]);

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
            onClick={() =>
              element?.scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "start",
              })
            }
          />
        </Center>
      </Box>
      <section id="product-section">
        {isLoading ? (
          <Center h="400px">
            <Spinner size={"lg"} />
          </Center>
        ) : (
          <>
            <Flex w="full" mt={"50px"}>
              <Text fontSize={"24px"} fontWeight={500}>
                Available products: ({products?.length})
              </Text>
            </Flex>
            <SimpleGrid gridGap={"16px"} minChildWidth={"317px"} mt={"32px"}>
              {(products as any)?.map((product, index) => (
                <Box key={index} maxW={"350px"}>
                  <ProductListCmp productInfo={product} />
                </Box>
              ))}
            </SimpleGrid>
          </>
        )}
      </section>
    </main>
  );
}
