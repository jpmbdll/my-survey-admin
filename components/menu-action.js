import React from "react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { FaBars } from "react-icons/fa6";
import { FaHouse, FaChartColumn } from "react-icons/fa6";
import { useDataContext } from "@/contexts/useDataContext";

export default function MenuAction() {
  const { page, setPage } = useDataContext();
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
          onClick={() => {
            setPage("home");
          }}
        >
          Home
        </MenuItem>
        <MenuItem
          _hover={{ color: "red.700" }}
          icon={<FaChartColumn />}
          onClick={() => {
            setPage("stats");
          }}
        >
          Statistics
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
