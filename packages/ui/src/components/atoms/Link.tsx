import React from "react";
import { Link as ChakraLink, LinkProps } from "@chakra-ui/react";

export default function Link(props: LinkProps) {
  return (
    <ChakraLink href="/" _hover={{ textDecoration: "underline" }} {...props} />
  );
}
