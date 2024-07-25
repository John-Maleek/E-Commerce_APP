import { Button, ButtonProps } from "@chakra-ui/react";
import React from "react";

interface IButton extends ButtonProps {
  label: string;
}
const ButtonCmp = ({ label, ...props }: IButton) => {
  return (
    <Button
      borderRadius={"100px"}
      bg={"black"}
      color={"white"}
      height={"42px"}
      _hover={{ bgColor: "#131316" }}
      {...props}
    >
      {label}
    </Button>
  );
};

export default ButtonCmp;
