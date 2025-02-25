import { Box, Flex, List } from "@chakra-ui/react";
import { trpc } from "@ipsy/trpc/server";
import React from "react";

export default async function Orders() {
  const data = await trpc.commerce.getOrders();
  return (
    <Box spaceY={4} width={"100%"} padding={4} justifyItems="center">
      <Flex>
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
        {/* {error ? "Error" : ""} */}
      </Flex>
    </Box>
  );
}
