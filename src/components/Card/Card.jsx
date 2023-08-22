import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Box,
  Heading,
} from "@chakra-ui/react";

export default function CardComponent({ item }) {
  console.log(item);
  return (
    <>
      <Card
        bgGradient="linear(to-l, #0A6796, #0D8DCD)"
        p={{ base: "2", md: "7" }}
        maxW={"550px"}
        height={{ base: "100%", md: "450px !important" }}
      >
        <CardHeader
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"start"}
          alignItems={"center"}
        >
          <Box
            rounded={"50%"}
            bg={"#fff"}
            display={"flex"}
            justifyContent={"center"}
            alignContent={"center"}
            p={4}
            fontSize={"2xl"}
          >
            {item?.icon}
          </Box>
          <Heading
            as={"h3"}
            color={"#fff"}
            ml={2}
            fontSize={{
              base: "1rem",
              md: "1.8rem",
            }}
          >
            {item?.title}
          </Heading>
        </CardHeader>
        <CardBody bg={"#fff"} p={{ base: "4", md: "12" }} rounded={"md"}>
          <Text color={"#000"} fontSize={"sm"}>
            {item?.body}
          </Text>
        </CardBody>
      </Card>
    </>
  );
}
