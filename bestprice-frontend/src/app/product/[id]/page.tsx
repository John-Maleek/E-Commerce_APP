"use client";
import { Box, Center, Flex, Spinner, Text, useToast } from "@chakra-ui/react";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";
import { useGetProduct } from "../../../api/products";
import ButtonCmp from "../../../components/ButtonCmp";
import { useAddToCart, useGetCart, usePostToCart } from "../../../api/cart";
import { useDispatch, useSelector } from "react-redux";
import { useQueryClient } from "@tanstack/react-query";
import { addToCart } from "../../../store/slices/cartSlice";

const ProductDetails = () => {
  const toastNotification = useToast();
  const { id } = useParams();
  const { user } = useSelector((state: any) => state.auth);
  const { cart } = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const { data, isLoading } = useGetProduct({ productId: id });
  const { data: cartData, isLoading: isFetchingCart } = useGetCart({
    userId: user?.userId,
  });
  const { mutate: postToCart, isPending: postingToCart } = usePostToCart();
  const { mutate: addProductToCart, isPending: addingToCart } = useAddToCart();

  useEffect(() => {
    if (cartData) {
      dispatch(addToCart(cartData?.products?.length));
    }
  }, [cartData, dispatch, isFetchingCart]);

  const handleAddToCart = () => {
    if (cart === 0) {
      postToCart(
        {
          data: {
            userId: user?.userId,
            products: [{ productId: id }],
          },
        },
        {
          onSuccess: (res) => {
            toastNotification({
              title: `Product added to cart successfully`,
              position: "top-right",
              status: "success",
              variant: "left-accent",
              isClosable: true,
            });
            dispatch(addToCart(res?.products?.length));
          },
          onError: (err) => {
            toastNotification({
              title: `Something went wrong`,
              position: "top-right",
              status: "error",
              variant: "left-accent",
              isClosable: true,
            });
          },
        }
      );
    } else {
      addProductToCart(
        {
          userId: user?.userId,
          data: {
            userId: user?.userId,
            products: [{ productId: id }, ...cartData?.products],
          },
        },
        {
          onSuccess: (res) => {
            toastNotification({
              title: `Product added to cart successfully`,
              position: "top-right",
              status: "success",
              variant: "left-accent",
              isClosable: true,
            });
            dispatch(addToCart(res?.products?.length));
          },
          onError: (err) => {
            toastNotification({
              title: `Something went wrong`,
              position: "top-right",
              status: "error",
              variant: "left-accent",
              isClosable: true,
            });
          },
        }
      );
    }
    queryClient.refetchQueries({ queryKey: ["getCart"] });
  };

  return (
    <main>
      {isLoading || isFetchingCart ? (
        <Center h="80vh">
          <Spinner size={"lg"} />
        </Center>
      ) : (
        <Flex gap={"20px"} justify={"center"}>
          <Box w="60%" maxW={"700px"}>
            <Box
              aspectRatio={1 / 1}
              borderRadius={"20px"}
              bg={"gray"}
              bgImage={`url(${data?.images[0]})`}
              bgPosition={"center"}
              bgSize={"cover"}
              bgRepeat={"no-repeat"}
            ></Box>
            {data?.images?.length > 0 && (
              <Flex gap={"12px"} mt={"16px"}>
                {data?.images?.map((image, index) => (
                  <Box
                    key={index}
                    boxSize={"93px"}
                    borderRadius={"16px"}
                    bg={"gray"}
                    bgImage={`url(${image})`}
                    bgPosition={"center"}
                    bgSize={"cover"}
                    bgRepeat={"no-repeat"}
                  ></Box>
                ))}
              </Flex>
            )}
          </Box>
          <Box
            bg={"white"}
            borderRadius={"20px"}
            maxW={"430px"}
            w="40%"
            padding={"30px"}
            h={"fit-content"}
          >
            <Box borderBottom={"1px solid lightgray"} pb={"70px"}>
              <Text fontSize={"24px"} fontWeight={500}>
                {data?.product_name}
              </Text>

              <Text fontSize={"20px"} fontWeight={600} mt={"28px"}>
                {`$`}
                {data?.price}
              </Text>
            </Box>
            <Box pt={"20px"}>
              <Text color={"gray"} mt={"4px"}>
                {data?.description}
              </Text>
            </Box>
            <ButtonCmp
              label="Add to cart"
              width={"full"}
              mt={"32px"}
              onClick={handleAddToCart}
              isLoading={postingToCart || addingToCart}
            />
          </Box>
        </Flex>
      )}
    </main>
  );
};

export default ProductDetails;
