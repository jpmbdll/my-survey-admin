import { Flex, Image } from "@chakra-ui/react";

export default function Layout({ children }) {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      height="100vh"
      bg="#f2f2f2"
    >
      <Image
        maxH={370}
        w="100%"
        objectFit="fill"
        alt="banner.png"
        src="/banner.png"
        mb={50}
      />
      {children}
    </Flex>
  );
}
