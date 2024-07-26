"use client";
import { Box, Flex, Heading, Stack, Text, useToast } from "@chakra-ui/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import InputCmp from "../../components/InputCmp";
import ButtonCmp from "../../components/ButtonCmp";
import { FormikProvider, useFormik } from "formik";
import { useLoginUser, useRegisterUser } from "../../api/auth";
import { redirect, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/slices/authSlice";

interface IForm {
  onClick: () => void;
  formik: any;
  isLoading: boolean;
}

const Login = ({ onClick, formik, isLoading }: IForm) => {
  return (
    <>
      <Heading>Login</Heading>
      <form autoComplete="off" onSubmit={formik.handleSubmit}>
        <Stack spacing={"24px"} mt={"24px"}>
          <InputCmp
            label="Username"
            id="username"
            name="username"
            type="text"
            value={formik.values?.username}
            onChange={formik.handleChange}
          />
          <InputCmp
            label="Password"
            id="password"
            name="password"
            type="password"
            value={formik.values?.password}
            onChange={formik.handleChange}
          />
          <ButtonCmp
            label="Login"
            onClick={formik.submitForm}
            isLoading={isLoading}
          />
        </Stack>
      </form>
      <Box mt={"16px"}>
        <Text>
          Don&amps;t have an account?{" "}
          <span
            style={{ color: "blue", fontWeight: 600, cursor: "pointer" }}
            onClick={onClick}
          >
            Sign up
          </span>
        </Text>
      </Box>
    </>
  );
};

const SignUp = ({ onClick, formik, isLoading }: IForm) => {
  return (
    <>
      <Heading>Sign up</Heading>
      <form autoComplete="off" onSubmit={formik.handleSubmit}>
        <Stack spacing={"24px"} mt={"24px"}>
          <InputCmp
            label="Full name"
            type="text"
            id="fullname"
            name="fullname"
            value={formik.values?.fullname}
            onChange={formik.handleChange}
          />
          <InputCmp
            label="Email"
            type="email"
            name="email"
            id="email"
            value={formik.values?.email}
            onChange={formik.handleChange}
          />
          <InputCmp
            label="Username"
            type="text"
            id="username"
            name="username"
            value={formik.values?.username}
            onChange={formik.handleChange}
          />
          <InputCmp
            label="Password"
            type="password"
            id="password"
            name="password"
            value={formik.values?.password}
            onChange={formik.handleChange}
          />
          <ButtonCmp
            label="Sign up"
            onClick={formik.submitForm}
            isLoading={isLoading}
          />
        </Stack>
      </form>
      <Box mt={"16px"}>
        <Text>
          Have an account?{" "}
          <span
            style={{ color: "blue", fontWeight: 600, cursor: "pointer" }}
            onClick={onClick}
          >
            Login{" "}
          </span>
        </Text>
      </Box>
    </>
  );
};

const Auth = () => {
  const { isLoggedIn } = useSelector((state: any) => state.auth);
  useEffect(() => {
    if (isLoggedIn) {
      redirect("/");
    }
  }, [isLoggedIn]);

  const router = useRouter();
  const toastNotification = useToast();
  const { mutate: registerUser, isPending } = useRegisterUser();
  const { mutate: loginUser, isPending: logginIn } = useLoginUser();
  const dispatch = useDispatch();

  const [view, setView] = useState<"register" | "login">("login");

  const handleSubmit = (values, type) => {
    if (type === "register") {
      registerUser(
        { data: values },
        {
          onSuccess: (res) => {
            const { _id: userId, isAdmin, email, username } = res;
            localStorage.setItem("user", JSON.stringify({ userId, isAdmin }));
            dispatch(login({ userId, isAdmin }));
            router.push("/");
          },
          onError: (err) => {
            toastNotification({
              title: `${err?.message}`,
              position: "top-right",
              status: "error",
              variant: "left-accent",
              isClosable: true,
            });
          },
        }
      );
      return;
    } else {
      const { username, password } = values;
      loginUser(
        { data: { username, password } },
        {
          onSuccess: (res) => {
            const { _id: userId, isAdmin, email, username } = res;
            localStorage.setItem("user", JSON.stringify({ userId, isAdmin }));
            dispatch(login({ userId, isAdmin, email, username }));
            router.push("/");
          },
          onError: (err) => {
            toastNotification({
              title: `${err?.message}`,
              position: "top-right",
              status: "error",
              variant: "left-accent",
              isClosable: true,
            });
          },
        }
      );
    }
  };

  const formik = useFormik({
    initialValues: {
      ...(view === "register" && { fullname: "", email: "" }),
      username: "",
      password: "",
    },
    onSubmit: async (values) => {
      handleSubmit(values, view);
      formik.resetForm();
    },
  });

  const views = {
    register: (
      <SignUp
        formik={formik}
        onClick={() => setView("login")}
        isLoading={isPending}
      />
    ),
    login: (
      <Login
        formik={formik}
        onClick={() => setView("register")}
        isLoading={logginIn}
      />
    ),
  };

  return (
    <main>
      <Box
        bg={"white"}
        borderRadius={"16px"}
        maxW={"500px"}
        w={"full"}
        minH={"600px"}
        mx={"auto"}
        px={"24px"}
        py={"32px"}
        textAlign={"center"}
      >
        <Flex alignItems={"center"} gap={"6px"} w={"fit-content"} mx={"auto"}>
          <Image src={"/logo.svg"} alt="logo" width={32} height={32} />
        </Flex>
        <Box mt={"32px"}>
          <FormikProvider value={formik}>{views[view]}</FormikProvider>
        </Box>
      </Box>
    </main>
  );
};

export default Auth;
