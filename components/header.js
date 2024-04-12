"use client";
import { useRouter, usePathname } from "next/navigation";
import React from "react";
import { Flex, Heading, Button, Stack, Icon } from "@chakra-ui/react";
import { useBreakpointValue } from "@chakra-ui/react";
import { UserButton } from "@clerk/nextjs";
import { FaHouse, FaChartColumn } from "react-icons/fa6";
import MenuAction from "./menu-action";
import { Image } from "@chakra-ui/react";

export function Header() {
  const isSmallScreen = useBreakpointValue({ base: true, md: false });
  const router = useRouter();
  const pathname = usePathname();

  return (
    <Flex
      align="center"
      justify="space-between"
      paddingY={{ base: "0.5rem", md: "1rem" }}
      paddingX={{ base: "1rem", md: "2.5rem" }}
      boxShadow="md"
      bg="white"
      spacing={2}
      borderBottom={"1px solid"}
      borderColor={"gray.200"}
      position={"fixed"}
      zIndex={999}
      width={"100%"}
    >
      <Stack direction="row" spacing={3}>
        <Image
          src="/bsu_logo.png"
          width={{ base: 8, md: 10 }}
          height={{ base: 8, md: 10 }}
          alt="logo"
        />
        <Heading
          size={{ base: "sm", md: "md" }}
          fontWeight="600"
          color="gray.700"
          pt={1.5}
        >
          My Survey Admin
        </Heading>
      </Stack>
      {!isSmallScreen && (
        <Stack spacing={10} direction={"row"}>
          <Stack spacing={3} direction={"row"}>
            <Button
              leftIcon={<Icon pb={0.5} as={FaHouse} />}
              variant="ghost"
              color={pathname === "/" ? "red.700" : "gray.600"}
              fontWeight="600"
              fontSize="md"
              px={2}
              py={1}
              _hover={{ color: "red.700" }}
              onClick={() => router.push("/")}
            >
              Home
            </Button>
            <Button
              leftIcon={<Icon pb={0.5} as={FaChartColumn} />}
              variant="ghost"
              color={pathname === "/statistics" ? "red.700" : "gray.600"}
              fontWeight="600"
              fontSize="md"
              px={2}
              py={1}
              _hover={{ color: "red.700" }}
              onClick={() => router.push("/statistics")}
            >
              Statistics
            </Button>
          </Stack>
          <UserButton afterSignOutUrl="/sign-in" />
        </Stack>
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
