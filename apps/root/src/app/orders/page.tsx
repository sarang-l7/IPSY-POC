// "use client";
import { Box, Flex } from "@chakra-ui/react";
// import { trpc } from "@ipsy/trpc/client";
import { getServerSession } from "next-auth";
// import { useSession } from "next-auth/react";
import React from "react";

export default async function Orders() {
  const session = await getServerSession();
  // const { data, error } = trpc.commerce.getOrders.useQuery();
  console.log(session);
  return (
    <Box spaceY={4} width={"100%"} padding={4} justifyItems="center">
      <Flex>
        {/* <List.Root as="ol" listStyle="decimal">
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
        {error ? "Error" : ""} */}
      </Flex>
    </Box>
  );
}
