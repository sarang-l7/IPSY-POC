"use client";

import React from "react";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { chakra, Flex, Icon } from "@chakra-ui/react";

export default function CartIcon() {
  const [count] = useState<number>(3);

  return (
    <Flex position="relative" align="center">
      <Icon as={FaShoppingCart} boxSize={7} />

      {count > 0 && (
        <chakra.span
          position="absolute"
          top="-6px"
          right="-6px"
          bg="accent"
          color="light"
          fontSize="xs"
          fontWeight="bold"
          px="2"
          py="0.5"
          borderRadius="full"
          display="flex"
          alignItems="center"
          justifyContent="center"
          minW="20px"
          minH="20px"
        >
          {count}
        </chakra.span>
      )}
    </Flex>
  );
}
