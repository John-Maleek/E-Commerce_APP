import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Request } from "./request";

interface ISignUp {
  username: string;
  password: string;
  email?: string;
  fullname?: string;
}
export const useRegisterUser = () => {
  return useMutation({
    mutationFn: ({ data }: { data: ISignUp }) =>
      Request.post(`/auth/sign-up`, data)
        .then((res) => res?.data)
        .catch((err) => {
          throw err;
        }),
  });
};

export const useLoginUser = () => {
  return useMutation({
    mutationFn: ({ data }: { data: ISignUp }) =>
      Request.post(`/auth/login`, data)
        .then((res) => {
          console.log(res?.data);
          return res?.data;
        })
        .catch((err) => {
          throw err;
        }),
  });
};
