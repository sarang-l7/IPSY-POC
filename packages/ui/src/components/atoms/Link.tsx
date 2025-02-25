import React from "react";
import { Link as ChakraLink, LinkProps } from "@chakra-ui/react";
import NextLink from "next/link";

export default function Link(props: LinkProps) {
  return (
    <ChakraLink asChild _hover={{ textDecoration: "underline" }} {...props}>
      <NextLink href={`${props.href}`} prefetch>{props.children}</NextLink>
    </ChakraLink>
  );
}
