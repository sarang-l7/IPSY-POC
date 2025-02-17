"use client";

import React from "react";
import { Flex, Box } from "@chakra-ui/react";

import NotificationBanner from "./NotificationBanner";
import { CartIcon, Link } from "../atoms";

export default function Header() {
  return (
    <>
      <Box w="full">
        <Flex as="nav" align="center" justify="flex-end" gap={4} p={4}>
          <Link href="/" _hover={{ textDecoration: "underline" }}>
            Home
          </Link>
          <Link href="/categories" _hover={{ textDecoration: "underline" }}>
            Get Your Products
          </Link>
          <Link href="/login" _hover={{ textDecoration: "underline" }}>
            Login
          </Link>
          <CartIcon />
        </Flex>
      </Box>
      <NotificationBanner />
    </>
  );
}
