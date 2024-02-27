import React from "react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";

export default function MenuAction() {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<RxHamburgerMenu />}
        variant="outline"
        color="white"
      />
      <MenuList>
        <MenuItem>New Tab</MenuItem>
        <MenuItem>New Window</MenuItem>
        <MenuItem>Open Closed Tab</MenuItem>
      </MenuList>
    </Menu>
  );
}
