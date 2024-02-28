import React from "react";
import { Stat, StatLabel, StatNumber, Card, Icon } from "@chakra-ui/react";
import {
  FaUser,
  FaUserGraduate,
  FaUserTie,
  FaUserSecret,
  FaUserShield,
} from "react-icons/fa6";

export default function CardStat({ title, count, main = false }) {
  let icon = null;
  switch (title) {
    case "Students":
      icon = <Icon as={FaUser} />;
      break;
    case "Alumni":
      icon = <Icon as={FaUserGraduate} />;
      break;
    case "Faculty":
      icon = <Icon as={FaUserTie} />;
      break;
    case "Non-teaching Staff":
      icon = <Icon as={FaUserShield} />;
      break;
    case "Administrator":
      icon = <Icon as={FaUserSecret} />;
      break;
    default:
      icon = null;
      break;
  }
  return (
    <Card
      p={5}
      bg={main ? "red.700" : "white"}
      textColor={main ? "white" : "black"}
    >
      <Stat>
        <StatLabel>
          {icon} {title}
        </StatLabel>
        <StatNumber>{count}</StatNumber>
      </Stat>
    </Card>
  );
}
