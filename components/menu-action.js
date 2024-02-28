import React from "react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { FaBars } from "react-icons/fa6";

export default function MenuAction() {
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
        <MenuItem>New Tab</MenuItem>
        <MenuItem>New Window</MenuItem>
        <MenuItem>Open Closed Tab</MenuItem>
      </MenuList>
    </Menu>
  );
}
