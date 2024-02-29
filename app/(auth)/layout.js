import { Flex } from "@chakra-ui/react";

export default function Layout({ children }) {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      height="100vh"
      bg="#f2f2f2"
    >
      {children}
    </Flex>
  );
}
