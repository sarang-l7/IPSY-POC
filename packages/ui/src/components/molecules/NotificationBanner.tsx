import React from "react";
import { Box, Text } from "@chakra-ui/react";

export default function NotificationBanner() {
  return (
    <Box bg="primary" color="light" textAlign="center" m={0} p={7}>
      <Text fontSize="md">
        Gift them once. Delight them for months. Give your subscription today!
      </Text>
    </Box>
  );
}
