"use client";
import { List } from "@chakra-ui/react";
import { trpc } from "@ipsy/trpc/client";
import React from "react";

export default function DataList() {
  const { data } = trpc.commerce.getOrders.useQuery();
  return (
    <List.Root as="ol" listStyle="decimal">
      {data?.results.map((order) => {
        return (
          <List.Item key={order.id}>
            <p>{order.customerEmail}</p>
            <p>{order.orderState}</p>
            <p>{order.shipmentState}</p>
          </List.Item>
        );
      })}
    </List.Root>
  );
}
