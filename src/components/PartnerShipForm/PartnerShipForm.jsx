"use client";

import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  Stack,
} from "@chakra-ui/react";
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from "react-icons/md";
import {
  BsGithub,
  BsDiscord,
  BsPerson,
  BsTelephoneForwardFill,
} from "react-icons/bs";
import { BiSolidBusiness } from "react-icons/bi";
import { AiOutlineLink, AiOutlineLinkedin } from "react-icons/ai";

export default function PartnershipForm() {
  return (
    <Container bg="#EDF2F7" maxW="full" mt={0} centerContent overflow="hidden">
      <Flex>
        <Box
          bg="transparent"
          color="white"
          borderRadius="lg"
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
          p={{ base: "1px", md: "5rem" }}
        >
          <Stack spacing={0} align={"center"}>
            <Heading color={"#00234F"} textAlign={"center"}>
              Interested In becoming Our Partner?
            </Heading>
            <Text mt={1} color="#000" textAlign={"center"}>
              Please fill in the details below. We'll get back to you soon.
            </Text>
          </Stack>
          <Box p={{ base: "0", md: "4" }}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }} mt={2}>
              <WrapItem>
                <Box
                  bg="white"
                  borderRadius="lg"
                  width={{
                    base: "100%",
                    md: "2xl",
                    lg: "4xl",
                    xl: "6xl",
                  }}
                >
                  <Box m={8} color="#0B0E3F">
                    <VStack spacing={5}>
                      <FormControl id="name">
                        <FormLabel>Your Name</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement pointerEvents="none">
                            <BsPerson color="gray.800" />
                          </InputLeftElement>
                          <Input type="text" size="md" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Your Official Mail</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement pointerEvents="none">
                            <MdOutlineEmail color="gray.800" />
                          </InputLeftElement>
                          <Input type="text" size="md" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="companyName">
                        <FormLabel>Company Name</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement pointerEvents="none">
                            <BiSolidBusiness color="gray.800" />
                          </InputLeftElement>
                          <Input type="text" size="md" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="companyURL">
                        <FormLabel>Company URL</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement pointerEvents="none">
                            <AiOutlineLink color="gray.800" />
                          </InputLeftElement>
                          <Input type="text" size="md" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="contactNumber">
                        <FormLabel>Contact Number</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement pointerEvents="none">
                            <BsTelephoneForwardFill color="gray.800" />
                          </InputLeftElement>
                          <Input type="number" size="md" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="placeOfBusiness">
                        <FormLabel>Place of Business</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement pointerEvents="none">
                            <BiSolidBusiness color="gray.800" />
                          </InputLeftElement>
                          <Input type="number" size="md" />
                        </InputGroup>
                      </FormControl>
                      <FormControl
                        id="name"
                        display={"flex"}
                        justifyContent={"center"}
                        alignItems={"center"}
                      >
                        <Button
                          variant="solid"
                          color="white"
                          alignSelf={"center"}
                          bg="#00234F"
                          display={"flex"}
                          alignItems={"center"}
                          justifyContent={"center"}
                          _hover={{}}
                        >
                          Submit
                        </Button>
                      </FormControl>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}
