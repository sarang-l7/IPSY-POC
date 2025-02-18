"use client";
import Content from "@/components/orders/content";
import { SessionProvider } from "next-auth/react";

export default function Orders() {
  return <SessionProvider><Content /></SessionProvider>;
}
