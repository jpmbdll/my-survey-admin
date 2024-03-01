import React from "react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { FaBars } from "react-icons/fa6";
import { FaHouse, FaChartColumn } from "react-icons/fa6";
import { useRouter, usePathname } from "next/navigation";

export default function MenuAction() {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<FaBars />}
        variant="outline"
        color="red.700"
        borderColor="red.700"
        bg="white"
        _hover={{ color: "red.700" }}
      />
      <MenuList>
        <MenuItem
          _hover={{ color: "red.700" }}
          icon={<FaHouse />}
          color={pathname === "/" ? "red.700" : "gray.700"}
          onClick={() => router.push("/")}
        >
          Home
        </MenuItem>
        <MenuItem
          _hover={{ color: "red.700" }}
          icon={<FaChartColumn />}
          color={pathname === "/statistics" ? "red.700" : "gray.700"}
          onClick={() => router.push("/statistics")}
        >
          Statistics
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
