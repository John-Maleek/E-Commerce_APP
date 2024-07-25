import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Request } from "./request";

// Get User cart
export const useGetProduct = ({ userId }) => {
  return useQuery({
    queryKey: ["getCart"],
    queryFn: () =>
      Request.get(`/cart/${userId}`)
        .then((res) => res)
        .catch((err) => {
          throw err;
        }),
  });
};
