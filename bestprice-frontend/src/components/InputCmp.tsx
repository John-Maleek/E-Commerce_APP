"use client";
import { MdOutlineVisibilityOff, MdOutlineVisibility } from "react-icons/md";
import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputProps,
  InputRightElement,
} from "@chakra-ui/react";
import React, { useState } from "react";

interface IInput extends InputProps {
  label: string;
  type: string;
}

const InputCmp = ({ label, type, ...props }: IInput) => {
  const [show, setShow] = useState<boolean>();
  return (
    <FormControl>
      <FormLabel htmlFor={label} fontSize={"16px"} fontWeight={600}>
        {label}
      </FormLabel>
      <InputGroup>
        <Input
          type={type === "password" && show ? "text" : type}
          borderRadius={"12px"}
          bg={"gray.0"}
          height={"48px"}
          _focusVisible={{
            border: "2px solid black",
            backgroundColor: "white",
          }}
          {...props}
        />
        {type === "password" && (
          <InputRightElement
            height={"48px"}
            onClick={() => setShow((prev) => !prev)}
          >
            {show ? (
              <MdOutlineVisibility fontSize={"24px"} />
            ) : (
              <MdOutlineVisibilityOff />
            )}
          </InputRightElement>
        )}
      </InputGroup>
    </FormControl>
  );
};

export default InputCmp;
