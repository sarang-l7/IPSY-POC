"use client";
import React from "react";
import { Flex, Box } from "@chakra-ui/react";

import NotificationBanner from "./NotificationBanner";
import { CartIcon, Link } from "../atoms";
import { ColorModeButton } from "../../chakraUI";
// import { getServerSession } from "next-auth";
import Login from "./Login";
import { useSession } from "next-auth/react";

export default function Header({onRoute}) {
  const { data: session } = useSession();
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
          {session && (
            <>
              <Link
                href="/categories"
                _hover={{ textDecoration: "underline" }}
                color={"text.dark"}
              >
                Get Your Products
              </Link>
              <Link
                href="/orders"
                _hover={{ textDecoration: "underline" }}
                color={"text.dark"}
              >
                Orders
              </Link>
              <CartIcon onClick={() => onRoute('/cart')}  />
            </>
          )}
          <ColorModeButton />
          <Login session={session} />
        </Flex>
      </Box>
      <NotificationBanner />
    </>
  );
}
