"use client";
import { trpc } from "@myorg/trpc/src/client";
import React from "react";

export default function Generator() {
  const { data, isLoading, error } = trpc.getEntry.useQuery({
    id: "6HNwKZQL64q2rby85XPvEb",
  });
  console.log(data);
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return <div>{data?.productName}</div>;
}
