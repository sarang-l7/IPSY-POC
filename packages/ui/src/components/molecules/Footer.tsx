import React from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Flex direction="column">
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="center"
        bg="bg.tertiary"
        p={6}
        gap={6}
      >
        <Box
          p={6}
          textAlign={{ base: "center", md: "left" }}
          w={{ base: "full", md: "33%" }}
        >
          <Heading size="lg" mb={1}>
            Address
          </Heading>
          <Text>
            Suzhou Road, 32/F 3205/Flat, Phoenix International Building, Wuzhong
            District, Suzhou City
          </Text>
        </Box>

        <Box
          p={6}
          textAlign={{ base: "center", md: "left" }}
          w={{ base: "full", md: "33%" }}
        >
          <Heading size="lg" mb={1}>
            Help
          </Heading>
          <Text>
            Community Guidelines, Help Center, IPSY Support center, Subscription
            management
          </Text>
        </Box>

        <Box
          p={6}
          textAlign={{ base: "center", md: "left" }}
          w={{ base: "full", md: "33%" }}
        >
          <Heading size="lg" mb={1}>
            Services
          </Heading>
          <Text>
            IPSY Icon Box, BoxyCharm, Glam Bag, IPSY Shop, IPSY Blog,
            Refreshments, IPSY Mexico, About, Our Mission, Life at IPSY,
            Careers, Sitemap
          </Text>
        </Box>
      </Flex>

      <Box bg="bg.secondary" color="text.light" textAlign="center" p={2}>
        <Text fontSize="xs">Copyright &copy; - All rights reserved</Text>
      </Box>
    </Flex>
  );
}
