"use client";

import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactElement } from "react";
import {
  FcAbout,
  FcAssistant,
  FcAutomatic,
  FcCollaboration,
  FcDonate,
  FcManager,
  FcPackage,
  FcApproval,
} from "react-icons/fc";
import { HiUserGroup } from "react-icons/hi";

const Card = ({ heading, description, icon, href }) => {
  return (
    <Box
      maxW={{ base: "full", md: "350px" }}
      w={"full"}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}
    >
      <Stack align={"start"} spacing={2}>
        <Flex
          w={16}
          h={16}
          align={"center"}
          justify={"center"}
          color={"white"}
          rounded={"full"}
          bg={useColorModeValue("gray.100", "gray.700")}
        >
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading size="md">{heading}</Heading>
          <Text mt={1} fontSize={"sm"}>
            {description}
          </Text>
        </Box>
      </Stack>
    </Box>
  );
};

export default function Specialities() {
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading
          fontSize={{ base: "2xl", sm: "4xl" }}
          fontWeight={"bold"}
          color={"#00234F"}
        >
          Our Specialties
        </Heading>
        <Text color={"gray.600"} fontSize={{ base: "sm", sm: "lg" }}>
          We possess the necessary experience, expertise, and resources to
          provide comprehensive solutions that will enhance the growth of both
          our partners and customers
        </Text>
      </Stack>

      <Container maxW={"6xl"} mt={12}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
          <Card
            heading={"Skills"}
            icon={<Icon as={FcAutomatic} w={10} h={10} />}
            description={"Unparalleled technical abilities and proficiency."}
          />
          <Card
            heading={"Team"}
            icon={<Icon as={HiUserGroup} w={10} h={10} color={"black"} />}
            description={
              "Our team is growing day by day with the best talents."
            }
          />
          <Card
            heading={"Experience"}
            icon={<Icon as={FcApproval} w={10} h={10} />}
            description={
              "We are a team of experienced professionals with a proven track record."
            }
          />
        </Flex>
      </Container>
    </Box>
  );
}
