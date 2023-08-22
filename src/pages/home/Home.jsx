import React, { useEffect, useRef, useState } from "react";
import data from "../../database/data";
import style from "./homepage.module.css";
import aboutImage from "../../assets/check.png";
import Whyus from "../../components/whyUs/Whyus";
import SolidBtns from "../../components/buttons/SolidBtns";
import OutlineBtns from "../../components/buttons/OutlineBtns";
import Footer1 from "../../components/footer1/Footer1";
import Homeproject from "../../components/homeProject/Homeproject";
import { HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";
import Readytotake from "../../components/readyToTake/Readytotake";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS CSS file for styling
import Typed from "typed.js";
import Marquee from "react-fast-marquee";
import avalanche from "../../assets/avalanche-avax-logo-1.svg";
import Binance from "../../assets/Binance-1.png";
import Cardano from "../../assets/Cardano-1.png";
import Corda from "../../assets/Corda.png";
import Cosmos from "../../assets/Cosmos.png";
import Ethereum from "../../assets/Ethereum-Smart.png";
import Harmony from "../../assets/Harmony.png";
import Hyperledger from "../../assets/Hyperledger.png";
import HyperledgerTwo from "../../assets/Hyperledger-logo.png";
import Near from "../../assets/Near.png";
import polkadot from "../../assets/polkadot-dot-logo-ED40B3633D-seeklogo.com_.png";
import polygon from "../../assets/polygon-matic-logo-1.png";
import Solana from "../../assets/Solana-3.png";
import Tezos from "../../assets/Tezos.png";
import tron from "../../assets/tron.svg";
import zetachain from "../../assets/zetachain-icon.svg";
import US from "../../assets/usa.jpeg";
import UK from "../../assets/uk.jpeg";
import BH from "../../assets/bahrain.jpeg";
import Dubai from "../../assets/dubai.jpeg";
import TelegramFloatingBtn from "../../components/TelegramFloatingBtn/TelegramFloatingBtn";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  useToast,
  Box,
  Stack,
  Heading,
  Text,
  Container,
  Image,
  chakra,
} from "@chakra-ui/react";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import gurmit from "../../assets/gurmit.png";
import AnimatedCard from "../../components/animatedCard/AnimatedCard";
import HeroSection from "../../components/HeroSection/HeroSection";

const Home = () => {
  // __________________________________________________________________
  const dataCard = [
    {
      title: "Blockchain Development",
      slug: "blockchain-development",
      desc: "Designing, coding, and implementing decentralized applications, smart contracts, and blockchain networks to create transparent, secure, and immutable systems for various industries and use cases.",
    },
    {
      title: "Minting Engine",
      slug: "minting-engine",
      desc: "Facilitate the creation and issuance of unique digital assets on a blockchain, enabling individuals to transform their creations into non-fungible tokens.",
    },
    {
      title: "NFT Marketplace",
      slug: "nft-marketplace",
      desc: "Facilitate the creation and issuance of unique digital assets on a blockchain, enabling individuals to transform their creations into non-fungible tokens.",
    },
    {
      title: "NFT Artwork",
      slug: "nft-artwork",
      desc: "Authenticate and tokenize digital creations, granting artists ownership and enabling unique digital assets to be bought, sold, and collected in the form of non-fungible tokens",
    },
    {
      title: "NFT Staking",
      slug: "nft-staking",
      desc: "Allow holders of non-fungible tokens to lock and earn rewards by providing liquidity or participating in governance activities within a decentralized ecosystem",
    },
    {
      title: "ICO Launchpad",
      slug: "ico-launchpad",
      desc: "Host and supporting the launch of initial coin offerings (ICOs), providing technical, marketing, and regulatory assistance to projects seeking to raise funds through token sales",
    },
    {
      title: "Crypto Staking",
      slug: "crypto-staking",
      desc: "Securely lock digital assets in a cryptocurrency network to support its operations, secure the blockchain, and earn rewards in the form of additional tokens or fees.",
    },
    {
      title: "Crypto Gaming",
      slug: "crypto-gaming",
      desc: "Merging traditional gaming with blockchain to allow players to own, trade, and monetize in-game assets and currencies securely, providing new opportunities for ownership, decentralized economies, and unique gaming experiences",
    },
    {
      title: "Blockchain Based MLM",
      slug: "blockchain-mlm",
      desc: "Utilize the transparency and security of blockchain technology to create a decentralized network where participants can earn rewards and commissions through referrals, fostering trust, fairness, and traceability",
    },
    {
      title: "Crypto Funding",
      slug: "crypto-funding",
      desc: "Raising capital for projects, startups, or ventures through the issuance and sale of digital tokens, enabling decentralized fundraising and investment opportunities outside of traditional financial systems",
    },
    {
      title: "Crypto Swapping",
      slug: "crypto-swapping",
      desc: "Exchange one cryptocurrency for another directly, utilizing decentralized exchanges or automated platforms, enabling seamless and efficient transactions between different digital asset",
    },
    {
      title: "Crypto Bridging",
      slug: "crypto-bridging",
      desc: "Transfer of digital assets between different blockchain networks, enhancing interoperability and connectivity by establishing a link that allows tokens to be moved and utilized across different blockchain ecosystems",
    },
    {
      title: "Crypto Exchange",
      slug: "crypto-exchange",
      desc: "Buy, sell, and trade various cryptocurrencies, facilitating the conversion between digital assets and traditional fiat currencies",
    },
    {
      title: "Crypto Websites",
      slug: "crypto-websites",
      desc: "A bespoke online platform that provides information, resources, and services related to cryptocurrencies, blockchain technology, market data, wallet management, and news updates for users interested in the crypto industry",
    },
    {
      title: "Crypto Dashboard",
      slug: "crypto-dashboard",
      desc: "A comprehensive and centralized interface for users to monitor and manage their cryptocurrency holdings, track market prices, analyze data, and access various tools and features for effective portfolio management",
    },
    {
      title: "Crypto Claiming Token",
      slug: "crypto-claiming-token",
      desc: "Assert ownership of tokens that have been airdropped, distributed through a token sale, or earned through participation in a blockchain network, granting control and access to the associated digital assets",
    },
    {
      title: "ERC20 Token Creation",
      slug: "erc20-token-creation",
      desc: "Development and deployment of digital tokens on the Ethereum blockchain that comply with the ERC20 standard, enabling seamless integration with decentralized applications (DApps) and facilitating tokenization for various use cases",
    },
  ];

  const globalPresence = [
    {
      title: "UAE OFFICE",
      address:
        " South Zone, Dubai International Financial Centre (DIFC) Dubai, UAE",
      image: Dubai,
    },
    {
      title: "BH OFFICE",
      address:
        "Office 1236, Building 574 Road 31 Block 611 Area Al- Hamriya Kingdom of Bahrain",
      image: BH,
    },
    {
      title: "US OFFICE",
      address: "347 Fifth Ave. New York, NY, United States Of America  10016",
      image: US,
    },
    {
      title: "UK OFFICE",
      address: "Docklands Business Centre 10-16 Tiller Road London E14 8PX",
      image: UK,
    },
  ];
  const formRef = useRef(null);
  // const el = useRef(null);

  const scriptUrl =
    "https://script.google.com/macros/s/AKfycbzmG5HR_-qB0lV2pdiXXNrzgjjFL-9yId1ZPACpsrqnhgxrfPwCYfp4d7wJ_Lq7k18q4g/exec";

  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    fetch(scriptUrl, {
      method: "POST",
      body: new FormData(formRef.current),
    })
      .then((res) => {
        console.log("SUCCESSFULLY SUBMITTED");
        setLoading(false);
        toast({
          title: "Succesfully Registered",
          description: "We'll get back to you soon.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      })
      .catch((err) => console.log(err));
  };

  // ___________________________________________________________________

  // useEffect(() => {
  //   const typed = new Typed(el.current, {
  //     strings: [
  //       "Revolutionize Your Industry with Blockchain Technology Explore the Possibilities",
  //     ],
  //     typeSpeed: 80,
  //     loop: false,
  //     backDelay: 950,
  //     backSpeed: 40,
  //     cursorChar: "|",
  //     showCursor: false,
  //   });

  //   // return () => {
  //   //   // Destroy Typed instance during cleanup to stop animation
  //   //   typed.destroy();
  //   // };
  // }, []);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const testimonials = data.testimonials;
  // console.log(testimonials);

  const goToNextTestimonial = () => {
    setCurrentTestimonial((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPreviousTestimonial = () => {
    setCurrentTestimonial((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    AOS.init();
    // Auto-rotate testimonials every 5 seconds
    const interval = setInterval(goToNextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={style.homeMain}>
      {/* Hero Section */}
      {/* <div className={style.heroSection}>
        <div className={style.heroSectionContainer}>
          <div className={style.heroTextBox}>
            <p>
              Transforming businesses with cutting-edge blockchain solutions
            </p>
            <div
              style={{
                height: "220px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}
            >
              <h1 className={style.typinganimation} ref={el}></h1>
            </div>
            <div className={style.heroBtns}>
              <SolidBtns link="/projects" text="Our Previous Projects" />
              <OutlineBtns link="/about" text="More About Us" />
            </div>
          </div>
        </div>
      </div> */}
      <div className={style.heroSection}>
        <HeroSection />
      </div>

      {/* About Section */}
      <div className={style.aboutSection}>
        <div className={style.aboutSectionContainer}>
          <div className={style.aboutTextBox}>
            <h2>About</h2>
            <div>
              <h1>
                <span className={style.bold1}>We believe that</span>{" "}
                <span className={style.italic1}>technology</span>
              </h1>
              <h1 className={style.bold2}>can transform the world.</h1>
            </div>
            <p>
              <span className={style.paraBold1}>
                Your Gateway to Blockchain, Cloud, AI, and IoT:
              </span>{" "}
              AradChain Technologies driving digital transformation
            </p>
            <p>
              Transform your bold ideas into reality with AradChain, a leading
              blockchain development company. Our tailored outsourcing services
              encompass NFT Marketplace, Blockchain Development, Multi Level
              Marketing, Crowd Funding, Crypto Websites, and Other Cutting-Edge
              Blockchain Products.
            </p>
          </div>
          <div className={style.aboutImage}>
            <img src={aboutImage} alt="image" />
          </div>
        </div>
      </div>

      {/* Why Us Section */}
      <div className={style.whySection}>
        <div className={style.whySectionContainer}>
          <div className={style.whyContent}>
            <h1>Why Us?</h1>
            <div className={style.whyBoxes}>
              {data.whyUs.map((ele) => {
                return (
                  <Whyus
                    key={ele.id}
                    image={ele.image}
                    title={ele.title}
                    desc={ele.desc}
                    alt={ele.title}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* animatedCards */}
      <Stack spacing={0} align={"center"} mt={"5rem"} p={2}>
        <Heading
          as="h1"
          fontWeight={"900"}
          color={"#00234F"}
          textAlign={"center"}
          fontSize={"2rem"}
        >
          Our Services
        </Heading>
        <Text mt={1} color="#000" textAlign={"center"} maxW={"2xl"}>
          We provide customized solutions that meet our clients' unique needs
          and help them succeed in an increasingly digital world.
        </Text>
      </Stack>
      <div className={style.animatedCardArea}>
        <Box
          className={style.animatedCardArea}
          maxW={"7xl"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          {dataCard.map((ele) => {
            return <AnimatedCard ele={ele} />;
          })}
        </Box>
      </div>

      {/* Services Section */}
      {/* <div className={style.servicesSection}>
        <div className={style.servicesContainer}>
          <div className={style.servicesLeft}>
            <div>
              <Link
                to="/services/nft-marketplace"
                onClick={() => {
                  window.scroll(0, 0);
                }}
              >
                <h2>NFT Marketplace</h2>
              </Link>
              <Link
                to="/services/blockchain-development"
                onClick={() => {
                  window.scroll(0, 0);
                }}
              >
                <h2>Blockchain Development</h2>
              </Link>
              <Link
                to="/services/blockchain-mlm"
                onClick={() => {
                  window.scroll(0, 0);
                }}
              >
                <h2>Blockchain Based MLM</h2>
              </Link>
            </div>
          </div>
          <div className={style.servicesMid}>
            <div>
              <Link
                to="/services/crypto-funding"
                onClick={() => {
                  window.scroll(0, 0);
                }}
              >
                <h2>Crypto Funding</h2>
              </Link>
              <Link
                to="/services/crypto-websites"
                onClick={() => {
                  window.scroll(0, 0);
                }}
              >
                <h2>Crypto Websites</h2>
              </Link>
            </div>
          </div>
          <div className={style.servicesRight}>
            <h1>Services</h1>
            <p>
              We provide customized solutions that meet our clients' unique
              needs and help them succeed in an increasingly digital world.
            </p>
            <OutlineBtns link="/services" text="Explore Our Services" />
          </div>
        </div>
      </div> */}

      {/* Project Section */}
      <div className={style.projectsSection}>
        <div className={style.projectsContainer}>
          <div className={style.projectHeading}>
            <h1>Project</h1>
            <OutlineBtns text="More Projects" link="/projects" />
          </div>
          <div className={style.projectContent}>
            {data.projects.slice(0, 3).map((ele) => {
              return (
                <Homeproject
                  slug={ele.slug}
                  key={ele.id}
                  index={ele.id}
                  client={ele.client}
                  year={ele.year}
                  image={ele.image}
                  shortDesc={ele.shortDesc}
                />
              );
            })}
          </div>
        </div>
      </div>

      <Stack spacing={0} align={"center"} mt={"8rem"} p={2}>
        <Heading
          as="h1"
          fontWeight={"900"}
          color={"#00234F"}
          textAlign={"center"}
          fontSize={"2rem"}
        >
          Our Blockchain Expertise
        </Heading>
        <Text mt={1} color="#000" textAlign={"center"} maxW={"2xl"}>
          We utilize the capabilities of diverse Blockchain platforms to provide
          inventive blockchain solutions for enterprises that create a
          meaningful impact.
        </Text>
      </Stack>
      <Container
        maxW={{ base: "8xl", xl: "7xl" }}
        px={{ base: 6, md: 10 }}
        py={14}
      >
        <Marquee autoFill={true}>
          <Box
            p={2}
            m={3}
            boxShadow={"md"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={"1rem"}
          >
            <Image src={Near} alt="" width={"30px"} height={"30px"} />
            <chakra.span>Near</chakra.span>
          </Box>
          <Box
            p={2}
            m={3}
            boxShadow={"md"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={"1rem"}
          >
            <Image src={polkadot} alt="" width={"30px"} height={"30px"} />
            <chakra.span>Polkadot</chakra.span>
          </Box>
          <Box
            p={2}
            m={3}
            boxShadow={"md"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={"1rem"}
          >
            <Image src={polygon} alt="" width={"30px"} height={"30px"} />
            <chakra.span>Polygon</chakra.span>
          </Box>
          <Box
            p={2}
            m={3}
            boxShadow={"md"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={"1rem"}
          >
            <Image src={Solana} alt="" width={"30px"} height={"30px"} />
            <chakra.span>Solana</chakra.span>
          </Box>
          <Box
            p={2}
            m={3}
            boxShadow={"md"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={"1rem"}
          >
            <Image src={Tezos} alt="" width={"30px"} height={"30px"} />
            <chakra.span>Tezos</chakra.span>
          </Box>
          <Box
            p={2}
            m={3}
            boxShadow={"md"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={"1rem"}
          >
            <Image src={tron} alt="" width={"30px"} height={"30px"} />
            <chakra.span>Tron</chakra.span>
          </Box>
          <Box
            p={2}
            m={3}
            boxShadow={"md"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={"1rem"}
          >
            <Image src={zetachain} alt="" width={"30px"} height={"30px"} />
            <chakra.span>Zetachain</chakra.span>
          </Box>
        </Marquee>
        <Marquee autoFill={true} direction="right">
          <Box
            p={2}
            m={3}
            boxShadow={"md"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={"1rem"}
          >
            <Image src={avalanche} alt="" width={"30px"} height={"30px"} />
            <chakra.span>Avalanche</chakra.span>
          </Box>
          <Box
            p={2}
            m={3}
            boxShadow={"md"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={"1rem"}
          >
            <Image src={Binance} alt="" width={"30px"} height={"30px"} />
            <chakra.span>Binance</chakra.span>
          </Box>
          <Box
            p={2}
            m={3}
            boxShadow={"md"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={"1rem"}
          >
            <Image src={Cardano} alt="" width={"30px"} height={"30px"} />
            <chakra.span>Cardano</chakra.span>
          </Box>
          <Box
            p={2}
            m={3}
            boxShadow={"md"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={"1rem"}
          >
            <Image src={Corda} alt="" width={"30px"} height={"30px"} />
            <chakra.span>Corda</chakra.span>
          </Box>
          <Box
            p={2}
            m={3}
            boxShadow={"md"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={"1rem"}
          >
            <Image src={Cosmos} alt="" width={"30px"} height={"30px"} />
            <chakra.span>Cosmos</chakra.span>
          </Box>
          <Box
            p={2}
            m={3}
            boxShadow={"md"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={"1rem"}
          >
            <Image src={Ethereum} alt="" width={"20px"} height={"30px"} />
            <chakra.span>Ethereum</chakra.span>
          </Box>
          <Box
            p={2}
            m={3}
            boxShadow={"md"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={"1rem"}
          >
            <Image src={Harmony} alt="" width={"30px"} height={"30px"} />
            <chakra.span>Harmony</chakra.span>
          </Box>
          <Box
            p={2}
            m={3}
            boxShadow={"md"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={"1rem"}
          >
            <Image src={Hyperledger} alt="" width={"30px"} height={"30px"} />
            <chakra.span>Hyperledger Fabrics</chakra.span>
          </Box>
          <Box
            p={2}
            m={3}
            boxShadow={"md"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={"1rem"}
          >
            <Image src={HyperledgerTwo} alt="" width={"30px"} height={"30px"} />
            <chakra.span>Hyperledger</chakra.span>
          </Box>
        </Marquee>
      </Container>

      {/* Ready to take */}
      <div className={style.readyToTake}>
        <Readytotake />
      </div>

      {/* Testimonial Section */}
      <div className={style.testimonialSection}>
        <div className={style.testimonialContainer}>
          <div className={style.testimonialLeft}>
            <HiArrowSmLeft onClick={goToPreviousTestimonial} />
          </div>
          <div className={style.testimonialMid}>
            <h2>{testimonials[currentTestimonial].testimonial}</h2>
            <img src={testimonials[currentTestimonial].image} alt="" />
            <p>{testimonials[currentTestimonial].name}</p>
            <p>{testimonials[currentTestimonial].country}</p>
          </div>
          <div className={style.testimonialRight}>
            <HiArrowSmRight onClick={goToNextTestimonial} />
          </div>
        </div>
      </div>

      {/* Affiliate Section */}

      <div className={style.affiliateSection}>
        <div className={style.affiliateContainer}>
          <div>
            <h1>Are you a consultant or technology company?</h1>
            <p>Become an affiliate and start earning today..</p>
          </div>
          <SolidBtns text="Register Now" onClick={onOpen} />
        </div>
      </div>

      {/* Affiliate Form Popup- Chakra UI Component */}

      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Become an affiliate</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form ref={formRef} onSubmit={handleSubmit} name="google-sheet">
              <input
                required
                type="text"
                placeholder="Enter your name"
                name="Name"
              />
              <input
                required
                type="email"
                placeholder="Enter your email"
                name="Email"
              />
              <input
                type="submit"
                placeholder="Register"
                value={loading ? "Registering..." : "REGISTER"}
                name="submit"
              />
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>

      {/* Blog Section*/}

      <div className={style.blogSection}>
        <div className={style.blogContainer}>
          <h1>Blog</h1>
          <div className={style.blogContent}>
            <OutlineBtns text="READ MORE ARTICLES" link="/blogs" />
            {data.blogPosts.slice(0, 2).map((ele) => {
              return (
                <Link
                  to={ele.slug}
                  onClick={() => {
                    window.scroll(0, 0);
                  }}
                >
                  <div>
                    <img src={ele.image} alt="" />
                    <h2>{ele.title}</h2>
                    <p>{ele.date}</p>
                  </div>
                </Link>
              );
            })}

            {/* <Link to="article/blockchain-technology" onClick={() => {window.scroll(0, 0);}}>
              <div>
                <p>TECH</p>
                <h2>Blockchain Technology: Revolutionizing the Future</h2>
                <h3>30.06</h3>
              </div>
            </Link>
            
            <Link to="/article/nft-marketplaces" onClick={() => {window.scroll(0, 0);}}>
              <div>
                <p>TECH</p>
                <h2>NFT Marketplaces: Transforming the World of Digital Assets</h2>
                <h3>25.04</h3>
              </div>
            </Link> */}
          </div>
        </div>
      </div>

      {/* our global presence */}
      <Stack spacing={0} align={"center"} mt={"8rem"} p={2}>
        <Heading
          as="h1"
          fontWeight={"900"}
          color={"#00234F"}
          textAlign={"center"}
          fontSize={"2rem"}
        >
          Our Global Presense
        </Heading>
      </Stack>
      <Container
        maxW={"7xl"}
        px={{ base: 6, md: 10 }}
        py={14}
        display={"flex"}
        gap={"1rem"}
        flexWrap={{ base: "wrap", md: "wrap", lg: "nowrap" }}
        justifyContent={"center"}
        alignItems={"center"}
      >
        {globalPresence.map((ele) => {
          return (
            <Box
              width={{ base: "100%", md: "250px", lg: "300px" }}
              p={3}
              sx={{
                borderRight: "1px solid #DBDBDB",
              }}
            >
              <Image src={`${ele.image}`} width={"200px"}></Image>
              <Heading as="h2" fontSize={"2rem"} mt={2}>
                {ele.title}
              </Heading>
              <chakra.span fontSize={".8rem"}>{ele.address}</chakra.span>
            </Box>
          );
        })}
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

      {/* Footer Section */}
      <div className={style.footerSection}>
        <Footer1 />
      </div>
    </div>
  );
};

export default Home;
