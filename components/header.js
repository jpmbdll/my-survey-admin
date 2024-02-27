"use client";

import React from "react";
import { Flex, Box, Heading, Button, Stack } from "@chakra-ui/react";
import { useBreakpointValue } from "@chakra-ui/react";
import { UserButton } from "@clerk/nextjs";
import { GiHamburgerMenu } from "react-icons/gi";
import MenuAction from "./menu-action";

export function Header() {
  const isSmallScreen = useBreakpointValue({ base: true, md: false });
  return (
    <Flex
      align="center"
      justify="space-between"
      padding="1rem"
      boxShadow="md"
      bg="gray.800"
      spacing={2}
    >
      <Box>
        <Heading size="sm" color="white">
          My Survey Admin
        </Heading>
      </Box>
      {!isSmallScreen && (
        <Stack spacing={4} direction="row">
          <Button colorScheme="messenger" fontSize="sm" w={100}>
            Home
          </Button>
          <Button colorScheme="messenger" fontSize="sm" w={100}>
            About
          </Button>
          <Button colorScheme="messenger" fontSize="sm" w={100}>
            Contact
          </Button>
        </Stack>
      )}
      {!isSmallScreen && (
        <Box>
          <UserButton />
        </Box>
      )}
      {isSmallScreen && (
        <Stack align="center" direction="row" spacing={3}>
          <UserButton />
          <MenuAction />
        </Stack>
      )}
    </Flex>
  );
}
