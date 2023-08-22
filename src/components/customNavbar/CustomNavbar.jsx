import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Image,
  chakra,
  Fade,
  ScaleFade,
  Slide,
  SlideFade,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import CustomHeader from "../customHeader/CustomHeader";
import logo from "../../assets/logo.png";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function CustomNavbar() {
  const { isOpen, onToggle } = useDisclosure();
  const [hoverdItem, setHoverdItem] = useState(null);
  const [hoverdLink, setHoverdLink] = useState(null);
  const navigate = useNavigate();
  console.log(hoverdLink);
  return (
    <>
      <CustomHeader />
      <Box>
        <Flex
          bg={useColorModeValue("white", "gray.800")}
          color={useColorModeValue("gray.600", "white")}
          minH={"60px"}
          py={{ base: 2 }}
          px={{ base: 5 }}
          borderBottom={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.900")}
          align={"center"}
        >
          <Flex
            flex={{ base: 1, md: "auto" }}
            ml={{ base: -2 }}
            display={{ base: "flex", md: "flex", lg: "none" }}
          >
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
              variant={"ghost"}
              aria-label={"Toggle Navigation"}
            />
          </Flex>
          <Flex
            flex={{ base: 1 }}
            justify={{ base: "center", md: "start" }}
            align={"center"}
          >
            <Image
              src={logo}
              alt="logo"
              cursor={"pointer"}
              width={{ base: "180px", md: "180px" }}
              height={{ base: "40px", md: "45px" }}
              onClick={() => navigate("/")}
            />

            <Flex display={{ base: "none", md: "none", lg: "flex" }} ml={10}>
              <DesktopNav
                hoverdItem={hoverdItem}
                setHoverdItem={setHoverdItem}
                isOpen={isOpen}
                hoverdLink={hoverdLink}
                setHoverdLink={setHoverdLink}
              />
            </Flex>
          </Flex>

          <Stack
            flex={{ base: 1, md: 0 }}
            justify={"flex-end"}
            direction={"row"}
            spacing={6}
          >
            <Button
              as={"a"}
              display={{ base: "none", md: "inline-flex" }}
              fontSize={"sm"}
              fontWeight={600}
              color={"white"}
              bg={"#00234F"}
              cursor={"pointer"}
              onClick={() => navigate("/contact")}
              _hover={{
                bg: "#023a7f",
              }}
            >
              Contact Us
            </Button>
          </Stack>
        </Flex>

        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    </>
  );
}

const DesktopNav = ({
  hoverdItem,
  setHoverdItem,
  isOpen,
  hoverdLink,
  setHoverdLink,
}) => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");
  const [currentWidth, setCurrentWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setCurrentWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const navigate = useNavigate();

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => {
        console.log(navItem);
        return (
          <Box key={navItem.label}>
            <Popover
              trigger={"hover"}
              placement={"bottom-start"}
              onClose={() => {
                setHoverdItem(null);
                setHoverdLink(null);
              }}
            >
              <PopoverTrigger>
                <Box
                  p={2}
                  fontSize={"md"}
                  fontWeight={600}
                  color={linkColor}
                  rounded={"sm"}
                  sx={{
                    color: linkHoverColor,
                    borderBottom:
                      hoverdLink && hoverdLink.label === navItem.label
                        ? "2px solid #00234F"
                        : "none",
                    transition: "border-color 0.3s",
                    bg:
                      hoverdLink && hoverdLink.label === navItem.label
                        ? "rgba(1,33,73,0.1029586834733894)"
                        : "none",
                  }}
                  cursor={"pointer"}
                  onMouseEnter={() => {
                    const delay = 200; // 1 second delay
                    setTimeout(() => {
                      setHoverdLink(navItem);
                    }, delay);
                  }}
                >
                  {navItem.label}
                  <ChevronDownIcon ml={1} />
                </Box>
              </PopoverTrigger>

              {navItem.children && (
                <PopoverContent
                  border={1}
                  boxShadow={"xl"}
                  bg={popoverContentBgColor}
                  p={0}
                  width={currentWidth - 20}
                  mt={0.99999}
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    position: "relative",
                    _before: {
                      content: "''",
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "2px",
                      background: "rgba(0, 0, 0, 0.1)",
                      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                    },
                  }}
                >
                  <Stack bg={"gray.100"} p={"2"} minW="20%">
                    {navItem.children.map((child) => (
                      <DesktopSubNav
                        key={child.label}
                        {...child}
                        hoverdItem={hoverdItem}
                        setHoverdItem={setHoverdItem}
                      />
                    ))}
                  </Stack>
                  <Stack>
                    <Box flex="1">
                      {hoverdItem && hoverdItem.innerChild ? (
                        <Box p={4}>
                          <chakra.h3 fontWeight="900" fontSize="xl">
                            {hoverdItem.label}
                          </chakra.h3>
                          <chakra.span fontSize=".8rem">
                            {hoverdItem.subLabel}
                          </chakra.span>
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "row",
                              flexWrap: "wrap",
                              justifyContent: "start",
                              alignItems: "center",
                              alignContent: "center",
                              gap: "1rem",
                            }}
                          >
                            {hoverdItem.innerChild.map((item) => (
                              <Box
                                sx={{
                                  display: "flex",
                                  flexDirection: "column",
                                  justifyContent: "space-between",
                                  alignItems: "start",
                                  paddingTop: "1rem",
                                  paddingBottom: "1rem",
                                  paddingRight: "1rem",
                                  width: "250px",
                                  cursor: "pointer",
                                  borderRadius: "3px",
                                  marginTop: "1rem",
                                  transition: "border 0.3s, color 0.3s", // Add transitions for border and color
                                  border: "2px solid transparent",
                                }}
                                _hover={{
                                  color: "#00234F",
                                  borderRight: "2px solid #00234F",
                                  borderTop: "2px solid #00234F",
                                }}
                                onClick={() => navigate(item.href)}
                              >
                                <chakra.span
                                  fontSize=".9rem"
                                  fontWeight="900"
                                  key={item.innerLabel}
                                >
                                  {item.innerLabel}
                                </chakra.span>
                                <chakra.span fontSize="0.8rem" fontWeight="500">
                                  {item.context}
                                </chakra.span>
                              </Box>
                            ))}
                          </Box>
                        </Box>
                      ) : (
                        <Box p={4}>
                          <chakra.h3 fontWeight="900" fontSize="xl">
                            {navItem.children[0].label}
                          </chakra.h3>
                          <chakra.span fontSize=".8rem">
                            {navItem.children[0].subLabel}
                          </chakra.span>
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "row",
                              flexWrap: "wrap",
                              justifyContent: "start",
                              alignItems: "center",
                              alignContent: "center",
                              gap: "1rem",
                            }}
                          >
                            {navItem.children[0].innerChild.map((item) => (
                              <Box
                                sx={{
                                  display: "flex",
                                  flexDirection: "column",
                                  justifyContent: "space-between",
                                  alignItems: "start",
                                  paddingTop: "1rem",
                                  paddingBottom: "1rem",
                                  paddingRight: "1rem",
                                  width: "250px",
                                  cursor: "pointer",
                                  borderRadius: "3px",
                                  marginTop: "1rem",
                                  transition: "border 0.3s, color 0.3s", // Add transitions for border and color
                                  border: "2px solid transparent",
                                }}
                                _hover={{
                                  color: "#00234F",
                                  borderRight: "2px solid #00234F",
                                  borderTop: "2px solid #00234F",
                                }}
                                onClick={() => navigate(item.href)}
                              >
                                <chakra.span
                                  fontSize=".9rem"
                                  fontWeight="900"
                                  key={item.innerLabel}
                                >
                                  {item.innerLabel}
                                </chakra.span>
                                <chakra.span fontSize="0.8rem" fontWeight="500">
                                  {item.context}
                                </chakra.span>
                              </Box>
                            ))}
                          </Box>
                        </Box>
                      )}
                    </Box>
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        );
      })}
    </Stack>
  );
};

const DesktopSubNav = ({
  label,
  href,
  subLabel,
  innerChild,
  hoverdItem,
  setHoverdItem,
}) => {
  return (
    <Box
      as="a"
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      mt={2}
      rounded={"md"}
      width="100%"
      _hover={{
        bg: useColorModeValue("rgba(1,33,73,0.3029586834733894)", "#00234F"),
      }}
      bg={
        hoverdItem && hoverdItem.label === label
          ? "rgba(1,33,73,0.3029586834733894)"
          : "none"
      }
      onMouseEnter={() => setHoverdItem({ label, subLabel, innerChild })}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "#00234F" }}
            fontWeight={600}
            fontSize={{ base: ".8rem", md: ".9rem" }}
          >
            {label}
          </Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={hoverdItem && hoverdItem.label === label ? 1 : 0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"#00234F"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Box>
  );
};

const MobileNav = () => {
  return (
    <Stack bg="rgba(1,33,73,0.3029586834733894)" p={4} display={{ md: "flex" }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();
  const navigate = useNavigate();
  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Box
        py={2}
        as="a"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text fontWeight={900} fontSize="1rem" color="#00234F">
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Box>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Box as="a" key={child.label} py={2}>
                <chakra.span fontSize=".9rem" fontWeight={900} color="#00234F">
                  {child.label}
                </chakra.span>
                {child.innerChild && (
                  <Stack mt={1}>
                    {child.innerChild.map((item) => (
                      <chakra.span
                        fontSize=".8rem"
                        px={1}
                        fontWeight="500"
                        key={item.innerLabel}
                        onClick={() => navigate(item.href)}
                      >
                        {item.innerLabel}
                      </chakra.span>
                    ))}
                  </Stack>
                )}
              </Box>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: "Blockchain",
    children: [
      {
        label: "Blockchain Development",
        subLabel:
          "Navigate your journey towards blockchain with diligently crafted solutions",
        href: "#",
        innerChild: [
          {
            innerLabel: "Blockchain Development",
            context:
              "Tap into the potential of blockchain technology with our strategic blockchain services",
            href: "#",
          },
        ],
      },
      {
        label: "Blockchain Frameworks",
        subLabel:
          "Cross-chain network environment to achieve high transaction throughput with no fail",
        href: "#",
        innerChild: [
          {
            innerLabel: "Substrate",
            context:
              "Check out the opportunities provided by substrate blockchain development",
            href: "#",
          },
          {
            innerLabel: "Cosmos",
            context:
              "Tap onto the possibilities of cosmos blockchain for your business",
            href: "#",
          },
          {
            innerLabel: "Algorand Blockchain",
            context:
              "Utilize the potential of Algorand blockchain for the benefit of your business",
            href: "#",
          },
          {
            innerLabel: "Polygon Edge",
            context:
              "High-end Polygon Edge development solutions to craft innovative Layer 2 solutions for Ethereum",
            href: "#",
          },
          {
            innerLabel: "Tezos",
            context:
              "Explore the potential of Tezos blockchain to conveniently host smart contracts, dApps, and NFTs",
            href: "#",
          },
          {
            innerLabel: "Polygon Blockchain",
            context:
              "Capitalize on the capabilities of Polygon Blockchain for your business’s benefit",
            href: "#",
          },
        ],
      },
      {
        label: "Layer 1 & Layer 2 Solutions",
        subLabel:
          "Participate in the blockchain market with a secure blockchain network",
        href: "#",
        innerChild: [
          {
            innerLabel: "BSC",
            context:
              "Use BSC as the right option for decentralized application developmen",
            href: "#",
          },
          {
            innerLabel: "Solana",
            context:
              "Empower decentralized application development in a more efficient manner",
            href: "#",
          },
          {
            innerLabel: "Layer 1 Solutions",
            context:
              "Layer 1 blockchain development to bring transformative trust & transparency",
            href: "#",
          },
          {
            innerLabel: "Cardano",
            context:
              "Develop & deploy fast, scalable, and eco-friendly dApps with Cardano blockchain",
            href: "#",
          },
          {
            innerLabel: "Ethereum",
            context:
              "Launch next-gen secure and scalable platforms with Ethereum Blockchain solutions",
            href: "#",
          },
          {
            innerLabel: "Polkadot",
            context:
              "Cover data across public, private, open & permission-less blockchain networks",
            href: "#",
          },
        ],
      },
      {
        label: "Enterprise Blockchain",
        subLabel:
          "Modular blockchain solutions for a smart, safe, and sustainable enterprise ecosystem",
        href: "#",
        innerChild: [
          {
            innerLabel: "Supply Chain",
            context:
              "Check out the opportunities provided by substrate blockchain development",
            href: "#",
          },
          {
            innerLabel: "Transport & Logistics",
            context:
              "Tap onto the possibilities of cosmos blockchain for your business",
            href: "#",
          },
          {
            innerLabel: "Entertainment",
            context:
              "Utilize the potential of Algorand blockchain for the benefit of your business",
            href: "#",
          },
          {
            innerLabel: "Education",
            context:
              "Utilize the potential of Algorand blockchain for the benefit of your business",
            href: "#",
          },
          {
            innerLabel: "Finance",
            context:
              "Utilize the potential of Algorand blockchain for the benefit of your business",
            href: "#",
          },
          {
            innerLabel: "Healthcare",
            context:
              "Utilize the potential of Algorand blockchain for the benefit of your business",
            href: "#",
          },
          {
            innerLabel: "Real Estate",
            context:
              "Utilize the potential of Algorand blockchain for the benefit of your business",
            href: "#",
          },
          {
            innerLabel: "Procure to pay",
            context:
              "Utilize the potential of Algorand blockchain for the benefit of your business",
            href: "#",
          },
          {
            innerLabel: "Carbon Credits",
            context:
              "Utilize the potential of Algorand blockchain for the benefit of your business",
            href: "#",
          },
        ],
      },
      {
        label: "Smart Contract",
        subLabel:
          "Secure and dependable smart contracts on Ethereum, EOS, Hyperledger, TRON and more",
        href: "#",
        innerChild: [
          {
            innerLabel: "Smart Contract Development",
            context:
              "Achieve business automation with advanced smart contract development",
            href: "#",
          },
          {
            innerLabel: "Smart Contract Audit",
            context:
              "Audit smart contracts for errors, security flaws, & compilation issues",
            href: "#",
          },
        ],
      },
      {
        label: "Asset Tokenization",
        subLabel:
          "Navigate towards an era of asset-backed tokenization for new possibilities",
        href: "#",
        innerChild: [
          {
            innerLabel: "Asset Tokenization",
            context:
              "Transfer ownership & storage speedily without any centralized finance entity",
            href: "#",
          },
          {
            innerLabel: "Crypto Asset Management",
            context:
              "Steer funds in high-performing asset tokens and crypto products across exchanges",
            href: "#",
          },
        ],
      },
      {
        label: "Securitization (STO)",
        subLabel:
          "Amplify your project funding at a stellar pace with security token offerings",
        href: "#",
        innerChild: [
          {
            innerLabel: "STO",
            context:
              "Strategy-driven approach to lay a solid foundation for STO",
            href: "#",
          },
        ],
      },
      {
        label: "P2P Lending",
        subLabel:
          "Market-leading features that expedite deployment and quickly launch your brand name",
        href: "#",
        innerChild: [
          {
            innerLabel: "P2P Lending",
            context:
              "Tap into the billion-dollar lending market with a P2P lending platform",
            href: "#",
          },
        ],
      },
    ],
  },
  {
    label: "Solutions",
    children: [
      {
        label: "Exchange",
        subLabel:
          "Enter the market with the best-in-class crypto exchange development services",
        href: "#",
        innerChild: [
          {
            innerLabel: "Cryptocurrency Exchange",
            context:
              "Gear up for revenue stream with future ready white label crypto exchange",
            href: "#",
          },
          {
            innerLabel: "White Label Exchange",
            context:
              "Launch your own white label crypto exchange effortlessly using a ready-made infrastructure and customizable features.",
            href: "#",
          },
          {
            innerLabel: "Hybrid Exchange",
            context:
              "Get the best of both centralized and decentralized exchanges for high liquidity",
            href: "#",
          },
          {
            innerLabel: "Margin Trading Exchange",
            context:
              "Secure and feature-rich margin trading exchange to disrupt the crypto market",
            href: "#",
          },
          {
            innerLabel: "Security Exchange",
            context:
              "STO exchange platform that ensured world class security & user experience",
            href: "#",
          },
          {
            innerLabel: "P2P Exchange",
            context:
              "Use a smart contract-based Escrow system to foster reliable transactions",
            href: "#",
          },
          {
            innerLabel: "Market Making Services",
            context:
              "Intensify liquidity provisioning with perfect market making strategies",
            href: "#",
          },
          {
            innerLabel: "Derivatives Exchange",
            context:
              "Assured platform liquidity & returns for a huge pool of crypto investors",
            href: "#",
          },
          {
            innerLabel: "Decentralized Exchange",
            context:
              "Reduce your time-to-market with a customized DEX exchange script solution",
            href: "#",
          },
        ],
      },
      {
        label: "Wallet",
        subLabel:
          "Solutions that help users enjoy transactions in a speedier & secure environment",
        href: "#",
        innerChild: [
          {
            innerLabel: "Cryptocurrency Wallet",
            context:
              "Robust & secure wallet solutions for storing & transferring crypto assets",
            href: "#",
          },
          {
            innerLabel: "Web3 Wallet",
            context:
              "Access data in real time with trustless Web3 blockchain ecosystems",
            href: "#",
          },
          {
            innerLabel: "White Label Wallet",
            context:
              "Ready-to-deploy white label wallet with high-grade security features",
            href: "#",
          },
          {
            innerLabel: "Multicurrency Wallet",
            context:
              "Deploy wallets that are intuitive, user-friendly, secure & scalable",
            href: "#",
          },
          {
            innerLabel: "NFT Wallet",
            context:
              "Private key-based solutions to buy, sell and exchange non fungible tokens",
            href: "#",
          },
          {
            innerLabel: "TRON Wallet",
            context:
              "Tron wallet hold private keys & TRX coins securely within itself.",
            href: "#",
          },
          {
            innerLabel: "Bitcoin Wallet",
            context:
              "Launch your Bitcoin wallet, enabling speedier transactions & storage.",
            href: "#",
          },
          {
            innerLabel: "Mobile Wallet App",
            context: "Mobile wallet makes payments & transfer process simple.",
            href: "#",
          },
          {
            innerLabel: "Defi Wallet",
            context:
              "A wallet that is fortified from hacks, & immune to cross-border regulations",
            href: "#",
          },
        ],
      },
      {
        label: "NFT",
        subLabel:
          "Solutions that help users enjoy transactions in a speedier & secure environment",
        href: "#",
        innerChild: [
          {
            innerLabel: "NFT Development",
            context:
              "Build decentralized non-fungible tokens aligned with different business needs",
            href: "#",
          },
          {
            innerLabel: "White Label NFT Marketplace",
            context:
              "Get a customized white label NFT marketplace with multi-platform support",
            href: "#",
          },
          {
            innerLabel: "NFT Music",
            context:
              "Customer-centric marketplace for selling, trading and auctioning music NFTs",
            href: "#",
          },
          {
            innerLabel: "NFT Marketplace",
            context:
              "Top-performing marketplaces for users to mint, sell, buy, and trade NFTs",
            href: "#",
          },
          {
            innerLabel: "NFT Loan",
            context:
              "Facilitate your participation in revolutionized borrowing & lending world",
            href: "#",
          },
          {
            innerLabel: "Semi Fungible Token",
            context:
              "Easy batch token transfers that support both NFTs and fungible tokens",
            href: "#",
          },
          {
            innerLabel: "NFT Gaming",
            context:
              "Exclusive gameplay with rare digital assets like characters, tickets, weapons, & skins",
            href: "#",
          },
          {
            innerLabel: "NFT Art",
            context:
              "Tokenize digital and physical assets into a one-of-a-kind, untransferable NFT",
            href: "#",
          },
          {
            innerLabel: "NFT Generative Art",
            context:
              "Future ready NFT generative art marketplace that supports pictures, videos and GIFs",
            href: "#",
          },
        ],
      },
      {
        label: "DeFi",
        subLabel:
          "DeFi development services for connecting networks of collaborative ecosystems",
        href: "#",
        innerChild: [
          {
            innerLabel: "DeFi Development",
            context:
              "Drive resiliency and facilitate trust with exceptional DeFi development",
            href: "#",
          },
          {
            innerLabel: "DeFi Yield Farming",
            context:
              "Deliver business-oriented DeFi yield farming platforms that accomplish business goals",
            href: "#",
          },
          {
            innerLabel: "DeFi Staking",
            context:
              "Staking software with market-leading features and institutional-grade security",
            href: "#",
          },
          {
            innerLabel: "DeFi Lending And Borrowing",
            context:
              "Borrowing and lending platforms that fill the gap lagging in traditional banking",
            href: "#",
          },
          {
            innerLabel: "DeFi Lottery",
            context:
              "Decentralized lottery ecosystem reinforced with greater security, and traceability",
            href: "#",
          },
          {
            innerLabel: "DAO Blockchain",
            context:
              "100% transparent transactions, mandatory voting and handle services in a standardized way",
          },
          {
            innerLabel: "Olympus DAO Development",
            context:
              "Introduce unique economic and game-theoretic dynamics through staking and bonding",
          },
          {
            innerLabel: "Dapp Development Company",
            context:
              "Business growth with unique, innovative, secure and engaging applications",
          },
        ],
      },
      {
        label: "Web3",
        subLabel:
          "Augment your marketing infrastructure with Big Data, AI, & machine learning",
        href: "#",
        innerChild: [
          {
            innerLabel: "Web 3.0 Development",
            context:
              "Develop an en evolved web that is open, intelligent, and autonomous",
          },
          {
            innerLabel: "Web3 Game Development",
            context: "Amplify your gaming experience with the help of web 3.0",
          },
        ],
      },
      {
        label: "Whitepaper",
        subLabel:
          "Craft detailed & technically sound whitepapers that investors want to read",
        href: "#",
        innerChild: [
          {
            innerLabel: "White Paper Development",
            context:
              "Build a strong foundation for your crypto project with a mission-driven white paper",
          },
        ],
      },
      {
        label: "Crypto Banking",
        subLabel:
          "Empowering millions of digital assets holders to use crypto banking facilities",
        href: "#",
        innerChild: [
          {
            innerLabel: "Crypto Banking",
            context:
              "Crypto bank with industry-leading features and state-of-the-art infrastructure",
          },
        ],
      },
      {
        label: "Coin Development",
        subLabel:
          "Cryptocurrency development services for secure & transparent transactions",
        href: "#",
        innerChild: [
          {
            innerLabel: "Coin/Token Development",
            context:
              "Best services for crypto coin/token development to match your business goals",
            href: "#",
          },
          {
            innerLabel: "Crypto Launchpad Development",
            context:
              "Build a launchpad to capitalize on the revenue generation opportunity",
            href: "#",
          },
          {
            innerLabel: "IDO Development",
            context:
              "Create a coherent roadmap to navigate your IDO development journey",
            href: "#",
          },
          {
            innerLabel: "ICO Development",
            context:
              "Maximize fundraising opportunities and drive innovation with ICO development",
            href: "#",
          },
          {
            innerLabel: "Stablecoin Development",
            context:
              "Deploy gold-backed stablecoins to navigate your coin development journey",
            href: "#",
          },
        ],
      },
    ],
  },
  {
    label: "Consulting",
    children: [
      {
        label: "Blockchain",
        subLabel:
          "We empower your business through blockchain consulting expertise that provides lasting gains.",
        href: "#",
        innerChild: [
          {
            innerLabel: "Blockchain Consulting Company",
            context:
              "Ours is a blockchain consulting and solution provider company. You idealize, we realize!",
            href: "#",
          },
        ],
      },
      {
        label: "Web 3",
        subLabel:
          "Strategizing your Web3 journey with our extensive blockchain experience & expertise",
        href: "#",
        innerChild: [
          {
            innerLabel: "Web3 Consulting Company",
            context:
              "Ours is a blockchain consulting and solution provider company. You idealize, we realize!",
            href: "#",
          },
        ],
      },
      {
        label: "Metaverse",
        subLabel:
          "Delve deep into the world of metaverse to explore its offerings",
        href: "#",
        innerChild: [
          {
            innerLabel: "Metaverse Consulting Company",
            context:
              "Metaverse consulting services to guide you on the right path",
            href: "#",
          },
        ],
      },
      {
        label: "Artificial Intelligence",
        subLabel:
          "Provide more to your business with the help of an AI consulting company",
        href: "#",
        innerChild: [
          {
            innerLabel: "AI Consulting Company",
            context:
              "Our motive is to fully realise business benefits using our expertise in AI, the transformative technology.",
            href: "#",
          },
        ],
      },
      {
        label: "DeFi",
        subLabel:
          "Unlock DeFi potential to empower your crypto-based business to enjoy uninterrupted gains",
        href: "#",
        innerChild: [
          {
            innerLabel: "Defi Consulting Services",
            context:
              "Maximize your DeFi project’s success with tailored DeFi consulting services. Unlock new business opportunities.",
            href: "#",
          },
        ],
      },
      {
        label: "DAO",
        subLabel:
          "Uncover the potential of DAO for your business with our incredible expertise",
        href: "#",
        innerChild: [
          {
            innerLabel: "DAO Consulting Services",
            context:
              "Get goal-specific DAO consulting services from our industry experts",
            href: "#",
          },
        ],
      },
      {
        label: "Marketing As a Service",
        subLabel:
          "Elevate Your Web3 Projects with Our Comprehensive Marketing Approach",
        href: "#",
        innerChild: [
          {
            innerLabel: "Marketing As A Service",
            context:
              "We deliver tailor-made and agile marketing solutions that unlock your project’s full potential.",
            href: "#",
          },
        ],
      },
    ],
  },
  {
    label: "Metaverse",
    children: [
      {
        label: "Metaverse",
        subLabel:
          "Build larger-than-life, immersive & real 3D experiences for your customers",
        href: "#",
        innerChild: [
          {
            innerLabel: "Metaverse Development",
            context:
              "End-to-end solutions to facilitate your entry and participation in the metaverse",
            href: "#",
          },
          {
            innerLabel: "Metaverse App Development",
            context:
              "Tap into the metaverse with enterprise-focused application development",
            href: "#",
          },
          {
            innerLabel: "Metaverse For Education",
            context:
              "Enter into the future of learning by implementing metaverse in education",
            href: "#",
          },
          {
            innerLabel: "Metaverse In The Manufacturing",
            context:
              "Empower design engineers to collaborate and create visual designs remotely",
            href: "#",
          },
          {
            innerLabel: "Metaverse In The Healthcare",
            context:
              "Deliver cost-effective treatments and improve healthcare outcomes with Metaverse",
            href: "#",
          },
          {
            innerLabel: "Metaverse In Ecommerce",
            context:
              "Accelerate your business with our cutting-edge Metaverse e-commerce platform development.",
            href: "#",
          },
          {
            innerLabel: "Metaverse Events",
            context:
              "Organize unforgettable metaverse events using our expertise",
            href: "#",
          },
          {
            innerLabel: "Metaverse Real Estate",
            context: "Unlock a new dimension of real estate with Metaverse",
            href: "#",
          },
          {
            innerLabel: "Metaverse Game",
            context:
              "Bring About a Revolution in the World of Gaming with the Metaverse",
            href: "#",
          },
        ],
      },
    ],
  },
  {
    label: "Industries",
    children: [
      {
        label: "Govt.",
        subLabel:
          "Share data over a distributed ledger that is secured using cryptography",
        href: "#",
        innerChild: [
          {
            innerLabel: "G2C",
            context:
              "Improve existing G2C services with blockchain-driven intelligent analytics",
            href: "#",
          },
          {
            innerLabel: "Digital Identity",
            context:
              "Secure digital identities with a decentralized digital identity management system",
            href: "#",
          },
          {
            innerLabel: "Government Data Storage",
            context:
              "Utilize Blockchain-based data storage systems to store and secure data",
            href: "#",
          },
          {
            innerLabel: "E-Voting System",
            context:
              "Securing the way e-voting works through decentralized blockchain technology",
            href: "#",
          },
          {
            innerLabel: "Government Regulatory Systems",
            context:
              "Enhancing democratic, open, and self-reliance government regulatory system",
            href: "#",
          },
        ],
      },
      {
        label: "BFSI",
        subLabel:
          "Launch your digital asset bank with crypto-friendly banking solutions",
        href: "#",
        innerChild: [
          {
            innerLabel: "CBDC",
            context:
              "Leverage near real-time data with a monetary system to solidify banking systems",
            href: "#",
          },
          {
            innerLabel: "KYC & AML",
            context:
              "Streamline the KYC process and manage the entire user lifecycle",
            href: "#",
          },
          {
            innerLabel: "Trade Finance",
            context:
              "Embrace greater speed, security, & transparency in transactions",
            href: "#",
          },
          {
            innerLabel: "Insurance",
            context:
              "BFSI products that help cut costs, save resources, and stay compliant",
            href: "#",
          },
        ],
      },
    ],
  },
  {
    label: "About Us",
    children: [
      {
        label: "Company",
        subLabel:
          "Seize opportunities from disruption to deliver transformational outcomes for a decentralized digital world",
        href: "#",
        innerChild: [
          {
            innerLabel: "About Us",
            context:
              "Know more about our company, our vision, mission and values",
            href: "/about",
          },
          {
            innerLabel: "Services",
            context:
              "Know more about our services, our vision, mission and values",
            href: "/services",
          },
          {
            innerLabel: "Projects",
            context: "Go through our projects and know more about us",
            href: "/projects",
          },
          {
            innerLabel: "Blogs",
            context:
              "Read our blogs to attain more knowledge about domains we work in",
            href: "/blogs",
          },
          {
            innerLabel: "Contact Us",
            context: "Get in touch with us to know more about our services",
            href: "/contact",
          },
          {
            innerLabel: "Become our Partner",
            context: "Become our partners and grow with us",
            href: "/partner-with-us",
          },
        ],
      },
    ],
  },
];
