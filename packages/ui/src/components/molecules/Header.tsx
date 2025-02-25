"use client";

import React from "react";
import { Flex, Box } from "@chakra-ui/react";

import NotificationBanner from "./NotificationBanner";
import { CartIcon, Link } from "../atoms";
import { ColorModeButton } from "../../chakraUI";

export default function Header({onRoute}) {
  return (
    <>
      <Box w="full" bg="bg.light">
        <Flex as="nav" align="center" justify="flex-end" gap={4} p={4}>
          <Link
            href="/"
            _hover={{ textDecoration: "underline" }}
            color={"text.dark"}
          >
            Home
          </Link>
          <Link
            href="/categories"
            _hover={{ textDecoration: "underline" }}
            color={"text.dark"}
          >
            Get Your Products
          </Link>
          <Link href="/login" _hover={{ textDecoration: "underline" }}>
            Login
          </Link>
          <ColorModeButton />
          <CartIcon onClick={() => onRoute('/cart')} />
        </Flex>
      </Box>
      <NotificationBanner />
    </>
  );
}
