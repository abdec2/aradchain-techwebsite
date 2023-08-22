import * as React from "react";
import {
  Container,
  Heading,
  Stack,
  HStack,
  Text,
  Button,
  Image,
  SlideFade,
  Box,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import style from "./partnerpage.module.css";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS CSS file for styling
import Footer1 from "../../components/footer1/Footer1";
import Globe from "../../assets/globe.png";
import PerkWidget from "../../components/perkWidget/PerkWidget";
import Specialities from "../../components/Specialities/Specialities";
import PartnershipForm from "../../components/PartnerShipForm/PartnerShipForm";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import gurmit from "../../assets/gurmit.png";
import CardComponent from "../../components/Card/Card";
import { FaSearchLocation } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { HiOutlineLightBulb } from "react-icons/hi";
import { MdCleanHands } from "react-icons/md";
import TelegramFloatingBtn from "../../components/TelegramFloatingBtn/TelegramFloatingBtn";
const companiesImages = [
  "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&auto=format&fit=crop&w=334&q=80",
  "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&auto=format&fit=crop&w=334&q=80",
  "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&auto=format&fit=crop&w=334&q=80",
  "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&auto=format&fit=crop&w=334&q=80",
  "https://images.unsplash.com/photo-1614680376408-81e91ffe3db7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&auto=format&fit=crop&w=334&q=80",
  "https://images.unsplash.com/photo-1611162617263-4ec3060a058e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&auto=format&fit=crop&w=334&q=80",
];

const PartnerWithUs = () => {
  const data = [
    {
      title: "Transform into Solutions Provider",
      icon: <FaSearchLocation fontSize={"lg"} />,
      body: "As someone who offers solutions, you'll gain the necessary skills and tools to deliver a wide range of technologies, solutions, and services to your final clients. Collaborate with Aradchain as your solution partner to enhance your technical capacities, and create tools and workflows that accelerate the effective implementation of solutions.",
    },
    {
      title: "Join as a Tech Partner",
      icon: <MdCleanHands fontSize={"lg"} />,
      body: "The network of partnerships we've established generates tangible business value and speeds up market entry. We collaborate closely with our partners to drive their revenue growth, extend their market presence, simplify their sales procedures, and elevate their range of products and services.In collaboration with our alliance partners, we provide comprehensive business solutions tailored to address our clients' technological challenges.",
    },
    {
      title: "Become a Service Provider",
      icon: <IoSettingsSharp fontSize={"lg"} />,
      body: "If you operate as a service provider offering solutions such as hosting or other services linked to financial instruments, collaborate with us to harness service provider-focused solutions, versatile business models, and a cohesive go-to-market partnership. Seize advantages such as a worldwide market presence, expedited market entry, and remarkable business expansion.",
    },
    {
      title: "Embrace Solution Seeking",
      icon: <HiOutlineLightBulb fontSize={"lg"} />,
      body: "As someone in search of solutions, you have the opportunity to leverage Antier's extensive expertise, wealth of experience, and profound domain knowledge to access timely and fitting solutions that guide clients through their technical endeavors. Partnering with Antier will act as a catalyst for expanding your global presence, strengthening your capabilities, and achieving substantial growth.",
    },
  ];
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => {
        const ismobile = window.innerWidth < 768;
        if (ismobile !== isMobile) setIsMobile(ismobile);
      },
      false
    );
  }, [isMobile]);
  return (
    <>
      {/* Hero section */}
      <div className={style.main}>
        <Container
          maxW="100vw"
          p={4}
          pt={{
            base: "1rem",
            md: "5rem",
          }}
          className={style.partnerHero}
        >
          <Stack
            direction="column"
            spacing={6}
            alignItems="center"
            mt={8}
            mb={16}
          >
            <Heading
              as="h1"
              fontSize={{ base: "2xl", md: "4xl" }}
              fontWeight="bold"
              textAlign="center"
              maxW="800px"
              className={style.partnerHeroHeading}
              color={"#fff"}
            >
              Let's unite our efforts to collaboratively <br /> construct a
              decentralized ecosystem.
            </Heading>
            <Text
              maxW="700px"
              fontSize="lg"
              textAlign="center"
              color="#fff"
              className={style.partnerHeroText}
            >
              Placing our partners at the forefront, we prioritize investing in
              their achievements. Through our partner-centric initiatives, we
              empower our partners with the necessary resources to provide
              outstanding services and assistance to customers.
            </Text>
            <HStack spacing={5}>
              <Button
                bg={"#00234F"}
                variant="solid"
                border={"1px solid #fff"}
                _hover={{ bg: "#012149" }}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                rounded="md"
                size="lg"
                color={"#fff"}
              >
                Get Started
              </Button>
            </HStack>
          </Stack>
          <Box
            sx={{
              height: "100px",
            }}
          ></Box>
        </Container>
      </div>

      {/* Become partner  */}
      <Container
        maxW="6xl"
        p={4}
        mt={20}
        pb={10}
        className={style.becomePartner}
      >
        <Stack
          display={"flex"}
          flexDirection={"row"}
          justify={{ base: "start", md: "space-between" }}
          flexWrap={isMobile ? "wrap-reverse" : "nowrap"}
          alignItems={"center"}
        >
          <Stack
            width={isMobile ? "100%" : "50%"}
            display={"flex"}
            justifyContent={isMobile ? "center" : "start"}
            alignItems={isMobile ? "center" : "start"}
          >
            <Image
              src={Globe}
              width={"350px"}
              height={"350px"}
              sx={{
                mixBlendMode: "multiply",
                background: "transparent",
              }}
              className={style.becomePartnerImage}
            ></Image>
          </Stack>
          <Stack
            display={"flex"}
            direction={"column"}
            justifyContent={"start"}
            alignItems={"start"}
            width={isMobile ? "100%" : "50%"}
          >
            <Heading as="h3" fontSize="2xl" fontWeight="bold" color={"#012149"}>
              Partner with a Global blockchain leader!
            </Heading>
            <Text fontSize="lg" textAlign="start" color="gray.500">
              Let's work together to create blockchain solutions and shape a
              decentralized future. Aradchain seeks partnerships with
              organizations to mutually benefit and make business impacts. Join
              us as a partner to contribute, seek, or share technical solutions
              for blockchain ecosystem growth.
            </Text>
          </Stack>
        </Stack>
      </Container>

      {/* perks of Partner */}
      <Container maxW="100vw" p={4} mt={10} className={style.perksOfPartner}>
        <PerkWidget />
      </Container>

      {/* specialities section */}
      <Container maxW="100vw" p={4} mt={10} className={style.specialities}>
        <Specialities />
      </Container>

      <Container maxW="100vw" p={4} mt={10} className={style.companies}>
        <Stack
          maxW="full"
          display={"flex"}
          flexDirection={"row"}
          flexWrap={"wrap"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={10}
          p={{ base: "1px", md: "2rem" }}
        >
          <Stack spacing={0} align={"center"}>
            <Heading color={"#00234F"} textAlign={"center"}>
              Choose The Right Partnership
            </Heading>
            <Text mt={1} color="#000" maxW={"2xl"} textAlign={"center"}>
              Forming a partnership boosts a company's profitability and
              stability. Choose the type of partnership that aligns with your
              goals to ensure a mutually beneficial coexistence.
            </Text>
          </Stack>
          {data?.map((item, index) => {
            return <CardComponent key={index} item={item} />;
          })}
        </Stack>
      </Container>

      {/* partnerShip Form */}
      <Container maxW="100vw" p={4} mt={10} className={style.partnerShipForm}>
        <PartnershipForm />
      </Container>
      <TelegramFloatingBtn />
      <FloatingWhatsApp
        phoneNumber="447778222221"
        accountName="Jennie"
        allowEsc
        allowClickAway
        notification
        notificationSound
        buttonStyle={{
          position: "fixed",
          bottom: "2rem",
          left: "2rem",
        }}
      />
      <div className={style.footerSection}>
        <Footer1 />
      </div>
    </>
  );
};

export default PartnerWithUs;
