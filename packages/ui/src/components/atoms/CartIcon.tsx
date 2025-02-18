"use client";

import React, { useEffect } from "react";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { chakra, Flex, Icon } from "@chakra-ui/react";

export default function CartIcon() {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const storedCount = Number(localStorage.getItem("cartCount") || 0);
    setCount(storedCount);

    const handleCartUpdate = (event: any) => {
      console.log("Header MFE", event.detail?.count || event.data?.count);
      setCount(event.detail?.count || event.data?.count);
    };

    window.addEventListener("ADD_TO_CART", handleCartUpdate);
    window.addEventListener("message", handleCartUpdate);

    return () => {
      window.removeEventListener("ADD_TO_CART", handleCartUpdate);
      window.removeEventListener("message", handleCartUpdate);
    };
  }, []);

  return (
    <Flex position="relative" align="center">
      <Icon as={FaShoppingCart} boxSize={7} color={"text.dark"} />

      {count > 0 && (
        <chakra.span
          position="absolute"
          top="-6px"
          right="-6px"
          bg="bg.accent"
          color="text.light"
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
