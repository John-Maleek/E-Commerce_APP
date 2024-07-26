import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Request } from "./request";

// Get all products
export const useGetProducts = () => {
  return useQuery({
    queryKey: ["getProducts"],
    queryFn: () =>
      Request.get(`/products`)
        .then((res) => res?.data)
        .catch((err) => {
          throw err;
        }),
  });
};

// Get Single product
export const useGetProduct = ({ productId }) => {
  return useQuery({
    queryKey: ["getProduct"],
    queryFn: () =>
      Request.get(`/products/${productId}`)
        .then((res) => res?.data)
        .catch((err) => {
          throw err;
        }),
  });
};
