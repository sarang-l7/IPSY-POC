"use client";
import { Box, Flex, List } from "@chakra-ui/react";
import { trpc } from "@ipsy/trpc/src/client";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

export default function Content() {
  const { data: session } = useSession();
  const { data, error } = trpc.commerce.getProducts.useQuery();

  return (
    <Box spaceY={4} width={"100%"} padding={4}>
      <Flex>
        {!session ? (
          <button onClick={() => signIn()}>Sign In</button>
        ) : (
          <button onClick={() => signOut()}>Sign Out</button>
        )}
      </Flex>
      <Flex>
        <List.Root as="ol" listStyle="decimal">
          {session &&
            data?.results.map((order) => {
              return (
                <List.Item key={order.id}>
                  <p>{order.customerEmail}</p>
                  <p>{order.orderState}</p>
                  <p>{order.shipmentState}</p>
                </List.Item>
              );
            })}
          {!session && <p>Unauthorized</p>}
        </List.Root>
        {error ? "Error" : ""}
      </Flex>
    </Box>
  );
}
