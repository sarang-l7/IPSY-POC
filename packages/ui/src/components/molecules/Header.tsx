"use client";

import React from "react";
import { Flex, Box } from "@chakra-ui/react";

import NotificationBanner from "./NotificationBanner";
import { CartIcon, Link } from "../atoms";
import { ColorModeButton } from "../../chakraUI";

export default function Header() {
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
          <ColorModeButton />
          <CartIcon />
        </Flex>
      </Box>
      <NotificationBanner />
    </>
  );
}
