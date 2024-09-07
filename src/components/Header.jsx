import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseCircleOutline } from "react-icons/io5";

import {
  Image,
  Box,
  Flex,
  Button,
  Link as ChakraLink,
  Icon,
} from "@chakra-ui/react";
import { CartSvg } from "./icons";

export default function Header() {
  const [activeTab, setActiveTab] = useState("home");
  const [mobileMenu, setMobileMenu] = useState(false);

  const handleActiveTab = (active) => setActiveTab(active);

  const MobileNav = () => (
    <Flex
      bg="primary"
      zIndex="10"
      flexDir="column"
      alignItems={"center"}
      justifyContent={"center"}
      gap="5"
      minW="250px"
      pos="absolute"
      top="0"
      right="0"
      minH="100vh"
      py="10"
      boxShadow="xl"
    >
      <Box pos="absolute" top="10" fontSize={20} right="5" zIndex={20}>
        <IoCloseCircleOutline />
      </Box>
      <ChakraLink
        onClick={() => handleActiveTab("home")}
        borderBottom={activeTab === "home" ? "2px solid white" : ""}
        _hover={{ transform: "scale(1.05)" }}
        transition="all 0.2s"
        cursor="pointer"
      >
        Home
      </ChakraLink>
      <ChakraLink
        onClick={() => handleActiveTab("menu")}
        borderBottom={activeTab === "menu" ? "2px solid white" : ""}
        _hover={{ transform: "scale(1.05)" }}
        transition="all 0.2s"
        cursor="pointer"
        href="/pages/MenuPage.jsx"
      >
        Menu
      </ChakraLink>
      <ChakraLink
        onClick={() => handleActiveTab("order")}
        borderBottom={activeTab === "order" ? "2px solid white" : ""}
        _hover={{ transform: "scale(1.05)" }}
        transition="all 0.2s"
        cursor="pointer"
      >
        Orders
      </ChakraLink>
      <Icon
        as={CartSvg}
        _hover={{ transform: "scale(1.05)" }}
        transition="all 0.2s"
        cursor="pointer"
      />
    </Flex>
  );

  const toggleMobileNav = () => setMobileMenu(!mobileMenu);

  return (
    <Flex
      bg="primary"
      px={{ base: 3, md: 10, lg: 20 }}
      color="white"
      justify="space-between"
      alignItems="center"
    >
      {/* LOGO */}
      <Box>
        <Image src="/images/logo.png" width={110} height={110} alt="logo" />
      </Box>
      <Box display={{ base: "block", md: "none" }} onClick={toggleMobileNav}>
        <GiHamburgerMenu />
        {mobileMenu && <MobileNav />}
      </Box>
      <Flex
        justify="space-between"
        alignItems="center"
        display={{ base: "none", md: "flex" }}
        gap={10}
      >
        <Flex alignItems="center" gap={6}>
          <ChakraLink
            onClick={() => handleActiveTab("home")}
            borderBottom={activeTab === "home" ? "2px solid white" : ""}
            _hover={{ transform: "scale(1.05)" }}
            transition="all 0.2s"
            cursor="pointer"
          >
            Home
          </ChakraLink>
          <ChakraLink
            onClick={() => handleActiveTab("menu")}
            borderBottom={activeTab === "menu" ? "2px solid white" : ""}
            _hover={{ transform: "scale(1.05)" }}
            transition="all 0.2s"
            cursor="pointer"
            href="/pages/MenuPage.jsx"
          >
            Menu
          </ChakraLink>
          <ChakraLink
            onClick={() => handleActiveTab("order")}
            borderBottom={activeTab === "order" ? "2px solid white" : ""}
            _hover={{ transform: "scale(1.05)" }}
            transition="all 0.2s"
            cursor="pointer"
          >
            Orders
          </ChakraLink>
          <Icon
            as={CartSvg}
            _hover={{ transform: "scale(1.05)" }}
            transition="all 0.2s"
            cursor="pointer"
          />
        </Flex>
        <Button
          bg="btnPrimary"
          color={"white"}
          px={4}
          py={2.5}
          rounded="sm"
          _hover={{ transform: "scale(1.05)" }}
          transition="all 0.3s"
          fontWeight="semibold"
        >
          Explore our menu
        </Button>
      </Flex>
    </Flex>
  );
}
