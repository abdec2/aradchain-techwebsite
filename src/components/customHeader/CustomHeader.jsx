import React from "react";
import {
  useDisclosure,
  MenuItem,
  Menu,
  MenuButton,
  MenuList,
  Box,
  Icon,
  chakra,
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon, EmailIcon } from "@chakra-ui/icons";
import logo from "../../assets/logo2.png";
import "/node_modules/flag-icons/css/flag-icons.min.css";
export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // finding if the screen is mobile or not
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
      <Box
        sx={{
          width: "100%",
          height: "4px",
          backgroundColor: "#009EE0",
        }}
      ></Box>
      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#00234F",
          height: isMobile ? "auto" : "3rem",
          flexWrap: isMobile ? "wrap" : "nowrap",
        }}
      >
        <Box
          style={{ marginLeft: "2rem", display: isMobile ? "none" : "inline" }}
        >
          <EmailIcon color="white" />
          <chakra.span
            sx={{
              color: "white",
              marginLeft: "0.5rem",
              _hover: "#B1EDEB",
              cursor: "pointer",
            }}
            fontSize=".9rem"
          >
            info@aradchain.tech
          </chakra.span>
        </Box>
        <Box
          style={{
            marginRight: "2rem",
            marginLeft: isMobile ? "1.2rem" : "none",
            display: "flex",
            gap: "1rem",
            alignItems: isMobile ? "center" : "center",
            justifyContent: isMobile ? "center" : "center",
            flexWrap: isMobile ? "wrap" : "nowrap",
            marginBottom: isMobile ? "1rem" : "0",
          }}
        >
          <chakra.span
            sx={{
              color: "white",
              marginLeft: isMobile ? "0.5rem" : "0.5rem",
              _hover: "#B1EDEB",
              cursor: "pointer",
            }}
            fontSize=".9rem"
          >
            <chakra.span fontSize="1.2rem" sx={{ marginRight: "0.5rem" }}>
              &#127760;
            </chakra.span>
            Our Global Presence :
          </chakra.span>
          <chakra.span
            className="fi fi-gb"
            sx={{
              borderRight: "1px solid white",
              width: "4rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          ></chakra.span>
          <chakra.span
            className="fi fi-bh"
            sx={{
              borderRight: "1px solid white",
              width: "4rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          ></chakra.span>
          <chakra.span
            className="fi fi-um"
            sx={{
              borderRight: "1px solid white",
              width: "4rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          ></chakra.span>
          <chakra.span
            className="fi fi-ae"
            sx={{
              borderRight: "1px solid white",
              width: "4rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          ></chakra.span>
        </Box>
        <Box
          style={{
            marginLeft: "0",
            display: isMobile ? "flex" : "none",
            alignItems: isMobile ? "center" : "center",
            width: "100%",
            justifyContent: isMobile ? "center" : "start",
          }}
        >
          <EmailIcon color="white" />
          <chakra.span
            sx={{
              color: "white",
              marginLeft: "0.5rem",
              _hover: "#B1EDEB",
              cursor: "pointer",
            }}
            fontSize=".9rem"
          >
            info@aradchain.tech
          </chakra.span>
        </Box>
      </Box>
    </>
  );
}
