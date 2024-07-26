import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Request } from "./request";

// Get User cart
export const useGetCart = ({ userId }) => {
  return useQuery({
    queryKey: ["getCart"],
    queryFn: () =>
      Request.get(`/cart/${userId}`)
        .then((res) => res?.data)
        .catch((err) => {
          throw err;
        }),
  });
};

export const useAddToCart = () => {
  return useMutation({
    mutationFn: ({ userId, data }: { userId: string; data: any }) =>
      Request.patch(`/cart/${userId}`, data)
        .then((res) => res?.data)
        .catch((err) => {
          throw err?.response?.data;
        }),
  });
};

export const usePostToCart = () => {
  return useMutation({
    mutationFn: ({ data }: { data: any }) =>
      Request.post(`/cart`, data)
        .then((res) => res?.data)
        .catch((err) => {
          throw err?.response?.data;
        }),
  });
};
