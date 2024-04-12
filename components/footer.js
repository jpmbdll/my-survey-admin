"use client";
import { Flex, Text, Box, Icon, Stack } from "@chakra-ui/react";
import { FaMap } from "react-icons/fa6";
import { FaEarthAmericas } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa6";

export function Footer() {
  return (
    <Box bg="red.700" color="white" p={{ base: 2, md: 6 }}>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        flexWrap="wrap"
        direction={{ base: "column", md: "row" }}
      >
        <Text fontSize="sm" flex="1 1 30%" mb={{ base: 2, lg: 0 }}>
          Leading Innovations, Transforming Lives, Building the Nation
        </Text>
        <Flex
          flex="1 1 70%"
          justifyContent={{ base: "flex-start", md: "flex-end" }}
          w="100%"
        >
          <Stack
            direction={{ base: "column", lg: "row" }}
            alignItems={{ base: "flex-start", md: "flex-end" }}
            spacing={{ base: 1, lg: 6 }}
          >
            <Text fontSize={14}>
              <Icon as={FaMap} pt={1} mr={0.5} />
              GCH Alangilan, Batangas City, Philippines
            </Text>
            <Text fontSize={14}>
              <Icon as={FaEarthAmericas} pt={1} mr={0.5} />
              www.batstate-u.edu.ph
            </Text>
            <Text fontSize={14}>
              <Icon as={FaPhone} pt={1} mr={0.5} />
              +6343425-0139 loc. 2010
            </Text>
            <Text fontSize={14}>
              <Icon as={FaEnvelope} pt={1} mr={0.5} />
              iemain2@g.batstate-u.edu.ph
            </Text>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
}
