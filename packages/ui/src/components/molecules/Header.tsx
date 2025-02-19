"use client";

import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import { signOut, useSession } from "next-auth/react";

import NotificationBanner from "./NotificationBanner";
import { CartIcon, Link } from "../atoms";
import { ColorModeButton } from "../../chakraUI";

export default function Header() {
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
              <CartIcon />
            </>
          )}
          <ColorModeButton />
          {session ? (
            <Link
              href="/"
              color={"text.dark"}
              _hover={{ textDecoration: "underline" }}
              onClick={() => signOut({ callbackUrl: "/" })}
            >
              Logout
            </Link>
          ) : (
            <Link
              href="/login"
              _hover={{ textDecoration: "underline" }}
              color={"text.dark"}
            >
              Login
            </Link>
          )}
        </Flex>
      </Box>
      <NotificationBanner />
    </>
  );
}
