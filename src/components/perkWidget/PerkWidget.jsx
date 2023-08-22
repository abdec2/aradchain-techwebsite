"use client";

import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from "@chakra-ui/react";
import technical from "../../assets/technical.png";
import hands from "../../assets/hand.png";
import Partnership from "../../assets/partnership.png";
const Testimonial = (props) => {
  const { children } = props;

  return <Box>{children}</Box>;
};

const TestimonialContent = (props) => {
  const { children } = props;

  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"lg"}
      p={8}
      rounded={"xl"}
      align={"center"}
      pos={"relative"}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: "solid transparent",
        borderLeftWidth: 16,
        borderRight: "solid transparent",
        borderRightWidth: 16,
        borderTop: "solid",
        borderTopWidth: 16,
        borderTopColor: useColorModeValue("white", "gray.800"),
        pos: "absolute",
        bottom: "-16px",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      {children}
    </Stack>
  );
};

const TestimonialHeading = (props) => {
  const { children } = props;

  return (
    <Heading as={"h3"} fontSize={"xl"}>
      {children}
    </Heading>
  );
};

const TestimonialText = (props) => {
  const { children } = props;

  return (
    <Text
      textAlign={"center"}
      color={useColorModeValue("gray.600", "gray.400")}
      fontSize={"sm"}
    >
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({ src, name, title }) => {
  return (
    <Flex align={"center"} mt={8} direction={"column"}>
      <Avatar src={src} mb={2} />
      <Stack spacing={-1} align={"center"}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={"sm"} color={useColorModeValue("gray.600", "gray.400")}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

export default function PerkWidget() {
  return (
    <Box bg={useColorModeValue("gray.100", "gray.700")}>
      <Container maxW={"7xl"} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={"center"}>
          <Heading color={"#00234F"}>Perks Of Partnership</Heading>
          <Text mt={1}>
            Explore the Extended Benefits and Advantages with us
          </Text>
        </Stack>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: 10, md: 4, lg: 10 }}
        >
          <Testimonial>
            <TestimonialContent>
              <TestimonialText>
                We are strong proponents of sharing knowledge, and we invite you
                to delve deeply into the realm of blockchain alongside us.
                Leveraging our profound technical expertise, which stands as a
                valuable asset, we can forge ahead united in our pursuit.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar src={technical} name={"Technical Exposure"} />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialText>
                We span across the global market, fostering an expanding network
                of customers. Collaboratively, we stand to enhance our revenue
                streams. Our partners are entitled to limitless partnership
                advantages, with terms open to negotiation at all times.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar src={hands} name={"Revenue"} />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialText>
                We are actively seeking a relationship that is mutually
                advantageous and enduring. Our partnership would be founded upon
                principles of trust, transparency, excellence, equity, and
                responsibility, all of which will continue to flourish as time
                progresses.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar src={Partnership} name={"Relationship"} />
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  );
}
