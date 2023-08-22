import { Fragment } from "react";
import { useRef, useEffect } from "react";
import {
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  Button,
  Link,
  Icon,
  Flex,
  Box,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { FaGithub } from "react-icons/fa";
import Lottie from "lottie-react";
import animation_llb5teqj from "../../assets/animation_llb5teqj.json";
import { useNavigate } from "react-router-dom";
import Typed from "typed.js";
import { BsPeopleFill } from "react-icons/bs";
import { SiKnowledgebase } from "react-icons/si";
const features = [
  {
    title: "Team member's",
    detail: "50+ increasing with team of experienced individuals",
    icon: <BsPeopleFill size={28} />,
  },
  {
    title: "Experience",
    detail: "More than 10 years of experience in the industry",
    icon: <SiKnowledgebase size={28} />,
  },
  {
    title: "Delivered Projects",
    detail: "Have delivered more than 500 projects",
    icon: (
      <svg
        aria-hidden="true"
        role="img"
        viewBox="0 0 24 24"
        width="28"
        height="28"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d={`M10.157 1.154a11.07 11.07 0 013.686 0 .75.75 0 01-.25 1.479 9.568 9.568 0 00-3.186 0 .75.75 0 
          01-.25-1.48zM6.68 3.205a.75.75 0 01-.177 1.046A9.558 9.558 0 004.25 6.503a.75.75 0 01-1.223-.87 
          11.058 11.058 0 012.606-2.605.75.75 0 011.046.177zm10.64 0a.75.75 0 011.046-.177 11.058 11.058 0 
          012.605 2.606.75.75 0 11-1.222.869 9.558 9.558 0 00-2.252-2.252.75.75 0 01-.177-1.046zM2.018 
          9.543a.75.75 0 01.615.864 9.568 9.568 0 000 3.186.75.75 0 01-1.48.25 11.07 11.07 0 010-3.686.75.75 
          0 01.865-.614zm19.964 0a.75.75 0 01.864.614 11.066 11.066 0 010 3.686.75.75 0 01-1.479-.25 9.56 9.56 
          0 000-3.186.75.75 0 01.615-.864zM3.205 17.32a.75.75 0 011.046.177 9.558 9.558 0 002.252 2.252.75.75 
          0 11-.87 1.223 11.058 11.058 0 01-2.605-2.606.75.75 0 01.177-1.046zm17.59 0a.75.75 0 01.176 1.046 
          11.057 11.057 0 01-2.605 2.605.75.75 0 11-.869-1.222 9.558 9.558 0 002.252-2.252.75.75 0 011.046-.177zM9.543 
          21.982a.75.75 0 01.864-.615 9.56 9.56 0 003.186 0 .75.75 0 01.25 1.48 11.066 11.066 0 01-3.686 0 .75.75 0 01-.614-.865z`}
        ></path>
      </svg>
    ),
  },
];
const HeroSection = () => {
  const navigate = useNavigate();
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Transforming businesses <br /> with cutting-edge blockchain solutions.",
      ],
      typeSpeed: 80,
      loop: false,
      backDelay: 950,
      backSpeed: 40,
      cursorChar: "|",
      showCursor: false,
    });

    // return () => {
    //   // Destroy Typed instance during cleanup to stop animation
    //   typed.destroy();
    // };
  }, []);
  return (
    <Fragment>
      <Container
        maxW={{ base: "8xl", xl: "7xl" }}
        px={{ base: 6, md: 10 }}
        py={14}
      >
        <Stack
          direction={{ base: "column", md: "row" }}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          alignContent={"center"}
        >
          <Stack direction="column" spacing={10} justifyContent="center" ml={2}>
            <chakra.h1
              fontSize="xl"
              lineHeight={1}
              height={{ base: "100%", md: "100px" }}
              fontWeight="bold"
              textAlign="left"
              color={"#00234F"}
              ref={el}
            ></chakra.h1>
            <Text
              color={useColorModeValue("gray.500", "gray.400")}
              fontSize="lg"
              textAlign="left"
              fontWeight="400"
              maxW="700px"
            >
              Revolutionize Your Industry with Blockchain Technology Explore the
              Possibilities. Drive a paradigm shift in the way businesses
              operate.
            </Text>
            <Stack
              direction={{ base: "column", md: "row" }}
              spacing={{ base: 5, md: 10 }}
              flexWrap="wrap"
            >
              {features.map((feature, index) => (
                <Stack
                  key={index}
                  direction={{ base: "row", md: "column" }}
                  spacing={2}
                >
                  <Flex
                    p={3}
                    maxH="52px"
                    w="max-content"
                    color="white"
                    bg={"#00234F"}
                    rounded="md"
                  >
                    {feature.icon}
                  </Flex>
                  <Stack direction="column" spacing={2}>
                    <Text fontSize="md" fontWeight="500">
                      {feature.title}
                    </Text>
                    <Text
                      fontSize="sm"
                      color="gray.400"
                      maxW={{ base: "100%", md: "200px" }}
                    >
                      {feature.detail}
                    </Text>
                  </Stack>
                </Stack>
              ))}
            </Stack>
            <Stack
              direction={{ base: "column", sm: "row" }}
              spacing={{ base: 0, sm: 2 }}
              flexWrap="wrap"
            >
              <chakra.button
                h={12}
                px={6}
                bg="#00234F"
                color="white"
                variant="solid"
                size="lg"
                rounded="md"
                fontWeight="bold"
                mb={{ base: 2, sm: 0 }}
                onClick={() => navigate("/projects")}
                cursor={"pointer"}
              >
                <chakra.span> Our Previous Projects </chakra.span>
              </chakra.button>
              <Flex
                border="1px solid"
                borderColor="gray.700"
                justify="center"
                p={3}
                px={4}
                lineHeight={1.18}
                rounded="md"
                boxShadow="md"
                fontWeight="bold"
                alignItems="center"
                onClick={() => navigate("/about")}
                cursor="pointer"
              >
                <chakra.span ml={1}> About us</chakra.span>
              </Flex>
            </Stack>
          </Stack>
          <Lottie animationData={animation_llb5teqj} loop={true} />
        </Stack>
      </Container>
      <Box overflow="hidden">
        <svg
          fill={useColorModeValue("#f7fafc", "#171923")}
          width="150%"
          height="56px"
          transform="scaleX(-1)"
          filter="drop-shadow(10px 5px 5px rgba(0, 0, 0, 0.05))"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d={`M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 
            250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 
            3V0H0v27.35a600.21 600.21 0 00321.39 29.09z`}
          ></path>
        </svg>
      </Box>
    </Fragment>
  );
};

export default HeroSection;
