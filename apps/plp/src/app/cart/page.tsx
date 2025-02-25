"use client";

import { products } from "@/utils/constants";
import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Image,
  Text,
} from "@chakra-ui/react";

import { useActor } from "@xstate/react";
import { CartMachineReactContext } from "@ipsy/x-state";

export default function Products() {
  // const data = CartMachineReactContext.useSelector(
  //   (state) => state.context.product
  // );

  const state = CartMachineReactContext.useSelector((state) => state);

  console.dir(state);

  const addTocart = CartMachineReactContext.useActorRef();

  function onClickShoppingCart() {
    addTocart.send({ type: "ADD_TO_CART" });
  }

  return (
    <Container height="100%">
      <Container maxW="container.xl" onClick={onClickShoppingCart}>
        Shopping Cart
      </Container>
      <Grid
        templateColumns={{
          base: "1fr",
        }}
        gap={5}
      >
        {state.context.cart.map((product: any) => (
          <Box key={product.id} p={1} shadow="xs" transition="transform 0.3s">
            <Flex>
              <Flex>
                <Image
                  src={product.image}
                  alt={product.title}
                  objectFit="cover"
                  h="130px"
                />
              </Flex>
              <Flex alignItems="center">
                <Text fontSize="lg" fontWeight="semibold" mt="2">
                  {product.title}
                </Text>
                <Text color="muted" mt="2">
                  {product.description}
                </Text>
                <Text>{product.price}</Text>
              </Flex>
            </Flex>
          </Box>
        ))}
      </Grid>
    </Container>
  );
}
