"use client";

import { products } from "@/utils/constants";
import { Box, Button, Container, Grid, Image, Text } from "@chakra-ui/react";

export default function Products() {
  const addToCart = () => {
    let cartCount = Number(localStorage.getItem("cartCount") || 0);
    cartCount += 1;

    localStorage.setItem("cartCount", cartCount.toString());

    // Send event to Header
    window.parent.postMessage(
      { type: "ADD_TO_CART", count: cartCount },
      "*" // Use specific origin if needed for security
    );

    console.log("PLP MFE", cartCount);
  };

  return (
    <Container maxW="container.xl" px={14} py={5}>
      <Grid
        templateColumns={{
          base: "1fr",
          sm: "repeat(2, 1fr)",
          md: "repeat(4, 1fr)",
        }}
        gap={5}
      >
        {products.map((product) => (
          <Box
            key={product.id}
            p={4}
            shadow="xs"
            _hover={{ shadow: "xl", transform: "scale(1.05)" }}
            transition="transform 0.3s"
          >
            <Image src={product.image} alt={product.title} objectFit="cover" />
            <Text fontSize="lg" fontWeight="semibold" mt="2">
              {product.title}
            </Text>
            <Text color="text.muted" mt="2">
              {product.description}
            </Text>
            <Text>{product.price}</Text>
            <Button
              mt={4}
              p="2"
              bg="button.tertiary"
              color="button.dark"
              onClick={addToCart}
            >
              Add to Cart
            </Button>
          </Box>
        ))}
      </Grid>
    </Container>
  );
}
