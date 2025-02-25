"use client";
import { Link } from "../atoms";
import { signOut } from "@ipsy/trpc";
import React from "react";

interface LoginProps {
  session: any;
}

export default function Login({ session }: LoginProps) {
  return (
    <>
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
    </>
  );
}
