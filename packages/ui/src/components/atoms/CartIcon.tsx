"use client";

import React, { useEffect } from "react";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { chakra, Flex, Icon } from "@chakra-ui/react";

export default function CartIcon({onClick}) {
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
    <Flex position="relative" align="center" onClick={onClick}>
      <Icon as={FaShoppingCart} boxSize={6} color={"text.dark"} />

      {count > 0 && (
        <chakra.span
          position="absolute"
          top="-13px"
          right="-15px"
          bg="bg.accent"
          color="text.light"
          fontSize="xs"
          fontWeight="bold"
          px="1"
          py="0.5"
          borderRadius="full"
          display="flex"
          alignItems="center"
          justifyContent="center"
          minW="15px"
          minH="15px"
        >
          {count}
        </chakra.span>
      )}
    </Flex>
  );
}
